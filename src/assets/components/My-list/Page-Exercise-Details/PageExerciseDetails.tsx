import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RoutineContext } from "../../../../App";

interface Routines {
  routineID: string;
  isEditing: boolean;
  routineName: string;
  routineImage: string;
  routineExercises: IExerciseInfo[];
}

interface IExerciseInfo {
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

export const PageExerciseDetails = () => {
  const {
    exerciseList = [],
    myRoutines = [] as Routines[],
    setMyRoutines = () => {},
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  // Access the URL parameter using useParams hook
  const { myExerciseID } = useParams();

  // Initialize ExerciseFromRoutine variable to undefined
  let ExerciseFromRoutine: IExerciseInfo | undefined;

  // Iterate through all routines and exercises to find the matching exercise
  myRoutines.forEach((routine) => {
    routine.routineExercises.forEach((exercise) => {
      if (exercise.myExerciseID === myExerciseID) {
        ExerciseFromRoutine = exercise;
      }
    });
  });

  return (
    <>
      <div>
        <div className="main-exercises">
          {ExerciseFromRoutine && <h2>{ExerciseFromRoutine.name}</h2>}
        </div>
      </div>
    </>
  );
};
