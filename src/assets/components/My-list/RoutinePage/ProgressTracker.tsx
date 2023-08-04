import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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

export const ProgressTracker = (props: exerciseIT) => {
  const {
    myRoutines = [],
    doneActivities = [],
    setDoneActivities = () => {},
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { routineID } = props;

  // Create an array of the last four days
  const currentDate = new Date();
  const lastFourDays = Array.from({ length: 4 }, (_, i) => {
    const date = new Date();
    date.setDate(currentDate.getDate() - i);
    return date.toLocaleDateString();
  });

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

  return (
    <div className="routine-tracker">
      {progressData.map((data, index) => (
        <div
          key={index}
          className="progress-bar"
          style={{
            background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink ${data.progress}%, pink 0)`,
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
        </div>
      ))}
    </div>
  );
};
