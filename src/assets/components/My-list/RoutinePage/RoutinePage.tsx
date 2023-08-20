import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemMyExercise } from "./item-myExercise/ItemMyExercise";
import { RoutineContext } from "../../../../App";
import { DeleteRoutineButton } from "./DeleteRoutineButton";
import { ProgressTracker } from "./ProgressTracker";
import { v4 as uuidv4 } from "uuid";

interface Routines {
  routineID: string;
  isEditing: boolean;
  routineName: string;
  routineImage: string;
  routineCompletion: number[];
  routineExercises: ITroutineSets[];
}

interface ITroutineSets {
  idExercise: string;
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

interface doneDataDetails {
  date: string;
  id: string;
  doneExerciseID: string;
  routineID: string;
  totalSets: number;
  completedSets: number;
}

export const RoutinePage = () => {
  const {
    exerciseList = [],
    myRoutines = [],
    doneActivities = [],
    setDoneActivities = () => {},
  } = useContext(RoutineContext) || {};

  const { routineID } = useParams<{ routineID?: string }>();

  const [activeDay, setActiveDay] = useState("");

  const validRoutineID = routineID ?? "";
  const TheRoutine = myRoutines?.find(
    (routine) => routine.routineID === validRoutineID
  );

  const getRoutineName = (routineID: string) => {
    const selectedRoutine = myRoutines?.find(
      (routine) => routine.routineID === routineID
    );
    return selectedRoutine ? selectedRoutine.routineName : "Routine Not Found";
  };
  //

  const startRoutineHandler = () => {
    const todayDateString = new Date().toLocaleDateString();
    console.log("Start Routine Clicked");
    setActiveDay(todayDateString);
  };

  const updateDoneActivities = () => {
    setDoneActivities((prevDoneActivities) => {
      const todayDateString = new Date().toLocaleDateString();

      const updatedDoneActivities: doneDataDetails[] = prevDoneActivities.map(
        (activity) => {
          // Filter out activities from previous days
          if (activity.date !== todayDateString) {
            return activity;
          }

          const matchingExercise = TheRoutine?.routineExercises.find(
            (exercise) => exercise.myExerciseID === activity.doneExerciseID
          );

          if (
            matchingExercise &&
            activity.routineID === validRoutineID &&
            activity.date === todayDateString
          ) {
            const completedSets = matchingExercise.sets.filter(
              (set) => set.setCompleted
            ).length;

            return {
              ...activity,
              totalSets: matchingExercise.sets.length,
              completedSets: completedSets,
            };
          }

          return activity;
        }
      );

      // Add new activity for exercises that were not found in existing doneActivities
      TheRoutine?.routineExercises.forEach((exercise) => {
        const existingActivity = updatedDoneActivities.find(
          (activity) =>
            activity.doneExerciseID === exercise.myExerciseID &&
            activity.date === todayDateString
        );

        if (!existingActivity) {
          updatedDoneActivities.push({
            date: todayDateString,
            id: uuidv4(),
            doneExerciseID: exercise.myExerciseID,
            routineID: validRoutineID,
            totalSets: exercise.sets.length,
            completedSets: exercise.sets.filter((set) => set.setCompleted)
              .length,
          });
        }
      });

      return updatedDoneActivities;
    });
  };

  const checkAndUpdateDoneActivities = () => {
    if (activeDay === new Date().toLocaleDateString()) {
      updateDoneActivities();
    }
    // Recursively call the function
    requestAnimationFrame(checkAndUpdateDoneActivities);
  };

  useEffect(() => {
    checkAndUpdateDoneActivities();
  }, [activeDay, setDoneActivities]);

  useEffect(() => {
    // Update localStorage whenever doneActivities change
    localStorage.setItem("localDoneActivities", JSON.stringify(doneActivities));
  }, [doneActivities]);

  return (
    <div>
      <div className="main-exercises">
        <div key={`key-${validRoutineID}`}>
          <h3>{getRoutineName(validRoutineID)}</h3>
          <ProgressTracker routineID={validRoutineID} />
          <div className="start-routine-button">
            <button onClick={startRoutineHandler}>Save Routine</button>
            <p>
              If the routine has not been saved, then it wont be shown on past
              days
            </p>
          </div>

          <ul className="all-exercises-list">
            {TheRoutine?.routineExercises.map((exercise: ITroutineSets) => (
              <ItemMyExercise
                key={exercise.myExerciseID}
                routineID={validRoutineID}
                exerciseItem={exercise}
              />
            ))}
          </ul>
          <DeleteRoutineButton routineID={validRoutineID} />
        </div>
      </div>
    </div>
  );
};
