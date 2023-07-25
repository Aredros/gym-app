import React, { useContext } from "react";
import { RoutineContext } from "../../../../../App";

interface ITset {
  setCompleted: boolean;
  reps: number;
  weight: number;
  distance: number;
  time: number;
}

interface ITcreateSet {
  exerciseID: string;
  routineID: string;
}

export const CreateSetButton = (props: ITcreateSet) => {
  const { myRoutines = [], setMyRoutines = () => {} } =
    useContext(RoutineContext) || {};

  const { exerciseID, routineID } = props;

  // Create a new set and add it to the selected exercise in the routine
  const createSet = () => {
    setMyRoutines((prevMyRoutines) =>
      prevMyRoutines.map((routine) => {
        if (routine.routineID === routineID) {
          return {
            ...routine,
            routineExercises: routine.routineExercises.map((exercise) => {
              if (exercise.myExerciseID === exerciseID) {
                const newSet: ITset = {
                  setCompleted: false,
                  reps: 0,
                  weight: 0,
                  distance: 0,
                  time: 0,
                };
                return {
                  ...exercise,
                  sets: [...exercise.sets, newSet],
                };
              }
              return exercise;
            }),
          };
        }
        return routine;
      })
    );
  };

  return (
    <button type="button" onClick={createSet}>
      +
    </button>
  );
};
