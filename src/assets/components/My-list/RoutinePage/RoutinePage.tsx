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
    myRoutines = [],
    doneActivities = [],
    setDoneActivities = () => {},
  } = useContext(RoutineContext) || {};

  const { routineID } = useParams<{ routineID?: string }>();

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

  const allRoutineCompletion = TheRoutine?.routineCompletion;

  useEffect(() => {
    const updateDoneActivities = () => {
      setDoneActivities((prevDoneActivities) => {
        const updatedDoneActivities: doneDataDetails[] = prevDoneActivities.map(
          (activity) => {
            const matchingExercise = TheRoutine?.routineExercises.find(
              (exercise) => exercise.myExerciseID === activity.doneExerciseID
            );

            if (
              matchingExercise &&
              activity.routineID === validRoutineID &&
              activity.date === new Date().toLocaleDateString()
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

        // Add new activities for exercises that were not found in existing doneActivities
        TheRoutine?.routineExercises.forEach((exercise) => {
          const existingActivity = updatedDoneActivities.find(
            (activity) =>
              activity.doneExerciseID === exercise.myExerciseID &&
              activity.date === new Date().toLocaleDateString()
          );

          if (!existingActivity) {
            updatedDoneActivities.push({
              date: new Date().toLocaleDateString(),
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

    updateDoneActivities();
  }, [setDoneActivities, validRoutineID]);

  useEffect(() => {
    // Update localStorage whenever routines change
    localStorage.setItem("localDoneActivities", JSON.stringify(doneActivities));
  }, [doneActivities]);

  return (
    <div>
      <div className="main-exercises">
        <div key={`key-${validRoutineID}`}>
          <h3>{getRoutineName(validRoutineID)}</h3>
          <ProgressTracker routineID={validRoutineID} />
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
