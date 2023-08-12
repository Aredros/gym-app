import React, { useContext, useState, useEffect } from "react";
import { RoutineContext } from "../../../../App";

interface exerciseIT {
  routineID: string;
}

interface doneDataDetails {
  date: string;
  id: string;
  doneExerciseID: string;
  routineID: string;
  totalSets: number;
  completedSets: number;
}

interface ITRoutine {
  routineID: string;
  isEditing: boolean;
  routineName: string;
  routineImage: string;
  routineCompletion: number[];
  routineExercises: ITroutineSets[];
}
interface ITroutineSets {
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
  myExerciseID: string;
  objective: string;
  routine: string;
  type: string;
  sets: ITset[];
}

interface ITset {
  setCompleted: boolean;
  reps: number;
  weight: number;
  distance: number;
  time: number;
}

export const ProgressTracker = (props: exerciseIT) => {
  const { myRoutines = [], doneActivities = [] } =
    useContext(RoutineContext) || {}; //getting the colors from the context

  const { routineID } = props;

  // State to store the last four days
  const [lastFourDays, setLastFourDays] = useState<string[]>([]);

  useEffect(() => {
    // Calculate the unique dates from doneActivities for the given routine and exercise, excluding the current day
    const uniqueDates = Array.from(
      new Set(
        doneActivities
          .filter(
            (activity) =>
              activity.routineID === routineID &&
              activity.date !== new Date().toLocaleDateString()
          )
          .map((activity) => activity.date)
      )
    );

    const sortedUniqueDates = uniqueDates.sort();

    // Update the lastFourDays state with the latest dates
    setLastFourDays(
      sortedUniqueDates.slice(Math.max(0, sortedUniqueDates.length - 3))
    );
  }, [doneActivities]); // Run the effect whenever doneActivities or routineID changes

  // Create a map to group activities by date
  const groupedActivities = new Map<string, doneDataDetails[]>();
  doneActivities.forEach((activity) => {
    if (activity.routineID === routineID) {
      const dateGroup = groupedActivities.get(activity.date) || [];
      dateGroup.push(activity);

      groupedActivities.set(activity.date, dateGroup);
    }
  });

  // Create progress data for each of the last four days
  const progressData = lastFourDays.map((date) => {
    const activities = groupedActivities.get(date) || [];
    const totalCompletedSets = activities.reduce(
      (total, activity) => total + activity.completedSets,
      0
    );
    const totalTotalSets = activities.reduce(
      (total, activity) => total + activity.totalSets,
      0
    );
    const progress =
      totalTotalSets === 0 ? 0 : (totalCompletedSets / totalTotalSets) * 100;
    return {
      date: date,
      progress: progress,
    };
  });

  //Data used for the last BAR that is going to be the current day when the activities are being done
  const countAllSetsInRoutine = (
    ThisRoutineID: string,
    whatAreWeCounting: string
  ) => {
    let count = 0;
    const routineIndex = myRoutines.findIndex(
      (routine: ITRoutine) => routine.routineID === ThisRoutineID
    );
    const TheSelectedRoutine = myRoutines[routineIndex] as ITRoutine;
    TheSelectedRoutine.routineExercises.forEach((exercise: ITroutineSets) => {
      whatAreWeCounting === "completedSets"
        ? (count += exercise.sets.filter(
            (set) => set.setCompleted === true
          ).length)
        : (count += exercise.sets.length);
    });
    return count;
  };

  const completedSets = countAllSetsInRoutine(routineID, "completedSets");
  const totalSets = countAllSetsInRoutine(routineID, "totalSets");
  const CurrentCounter = Math.round((completedSets / totalSets) * 100);

  return (
    <div className="routine-tracker">
      {progressData.map((data, index) => (
        <div
          key={index}
          className={`progress-bar ${data.date}`}
          style={{
            background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(${
              data.progress === 100 ? "#5fe782" : "#d72536"
            } ${data.progress}%, #b1b2c3 0)`,
          }}
        >
          <progress
            value={data.progress}
            max-content={100}
            min-content={0}
            style={{
              visibility: "hidden",
              height: "0",
              width: "0",
            }}
          >
            {data.progress.toFixed(2)}%
          </progress>
          <p className="progress-bar-date">{Math.round(data.progress)}%</p>
          <p className="progress-bar-date__today">
            {
              //Transfor Date to only MONTH and DAY only for Display
              new Date(data.date).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              })
            }
          </p>
        </div>
      ))}
      <div
        key={`current-bar-${routineID}`}
        className="progress-bar"
        style={{
          background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#646cff ${CurrentCounter}%, #b1b2c3 0)`,
        }}
      >
        <progress
          value={CurrentCounter}
          max-content={100}
          min-content={0}
          style={{
            visibility: "hidden",
            height: "0",
            width: "0",
          }}
        >
          {CurrentCounter.toFixed(2)}%
        </progress>
        <p className="progress-bar-date">{CurrentCounter}%</p>
        <p className="progress-bar-date__today">Today</p>
      </div>
    </div>
  );
};
