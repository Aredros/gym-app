import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { RoutineContext } from "../../../../../App";

interface exerciseIT {
  myExerciseID: string;
  name: string;
  linkImage: string;
}

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
  exerciseItem: exerciseIT;
}

interface doneDataDetails {
  date: string;
  id: string;
  doneExerciseID: string;
  routineID: string;
  totalSets: number;
  completedSets: number;
}

export const DeleteSetButton = (props: ITcreateSet) => {
  const {
    exerciseList = [],
    setExerciseList = () => {},
    myRoutines = [],
    setMyRoutines = () => {},
    doneActivities = [],
    setDoneActivities = () => {},
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { exerciseID, routineID, exerciseItem } = props;

  //Create a set inside a routine
  const eraseSet = (MyExerciseID: string, routineID: string) => {
    // Find the selected routine
    const selectedRoutineIndex = myRoutines.findIndex(
      (routine) => routine.routineID === routineID
    );

    if (selectedRoutineIndex !== -1) {
      // Find the exercise in the routineExercises array
      const exerciseIndex = myRoutines[
        selectedRoutineIndex
      ].routineExercises.findIndex(
        (exercise) => exercise.myExerciseID === MyExerciseID
      );

      if (exerciseIndex !== -1) {
        // Create a new array for routineExercises to avoid mutating the state
        const updatedRoutineExercises = [
          ...myRoutines[selectedRoutineIndex].routineExercises,
        ];

        // Remove the last set from the exercise sets
        updatedRoutineExercises[exerciseIndex].sets.pop();

        // Create a new array for myRoutines to avoid mutating the state
        const updatedMyRoutines = myRoutines.map((routine, index) => {
          if (index === selectedRoutineIndex) {
            return {
              ...routine,
              routineExercises: updatedRoutineExercises,
            };
          }
          return routine;
        });

        // Update the state with the new myRoutines array
        setMyRoutines(updatedMyRoutines);
      }
    }
    //now create a new item in the doneData state
    setDoneActivities((prevDoneActivities) =>
      prevDoneActivities.map((doneActivity) => {
        if (
          doneActivity.doneExerciseID === exerciseID &&
          doneActivity.totalSets >= 0
        ) {
          return {
            ...doneActivity,
            totalSets: doneActivity.totalSets - 1,
          };
        }
        return doneActivity;
      })
    );
  };

  return (
    <button type="button" onClick={() => eraseSet(exerciseID, routineID)}>
      -
    </button>
  );
};
