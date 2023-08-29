import React, { useContext } from "react";
import { RoutineContext } from "../../../../../App";
import { auth, db } from "../../../../../config/firebase";
import { updateDoc, getDoc, doc } from "firebase/firestore";

interface exerciseIT {
  allExercisesUniqueID: string;
  isEditing: boolean;
  individualMyExerciseID: string;
  objective: string;
  routine: string;
  type: string;
  sets: ITset[];
  myExUserCreator: string;
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
}

export const DeleteSetButton = (props: ITcreateSet) => {
  const {
    myRoutines = [],
    setMyRoutines = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { exerciseID, routineID } = props;

  //Create a set inside a routine
  const eraseSet = async () => {
    const routineUpdate = myRoutines.map((routine) => {
      if (routine.routineID === routineID) {
        return {
          ...routine,
          routineExercises: routine.routineExercises.map((exercise) => {
            if (exercise.individualMyExerciseID === exerciseID) {
              return {
                ...exercise,
                sets: exercise.sets.slice(0, -1), // Remove the last set
              };
            }
            return exercise;
          }),
        };
      }
      return routine;
    });
    setMyRoutines(routineUpdate);

    //if connected then delete from firebase
    if (isLoggedIn) {
      try {
        const routineExerciseDocRef = doc(
          db,
          "myExercises",
          `routine-${routineID}`
        );
        const routineExerciseDoc = await getDoc(routineExerciseDocRef);

        if (routineExerciseDoc.exists()) {
          const chosenRoutineData = routineExerciseDoc.data();

          const updatedRoutineExercises =
            chosenRoutineData.routineExercises.map((exercise: exerciseIT) => {
              if (exercise.individualMyExerciseID === exerciseID) {
                return {
                  ...exercise,
                  sets: exercise.sets.slice(0, -1),
                };
              }
              return exercise;
            });

          const updatedRoutine = {
            ...chosenRoutineData,
            routineExercises: updatedRoutineExercises,
          };
          await updateDoc(routineExerciseDocRef, updatedRoutine);
          console.log("Set removed from the exercise in Firebase");
        }
      } catch (error) {
        console.error("Error updating exercise sets:", error);
      }
    }
  };

  return (
    <button type="button" onClick={eraseSet}>
      -
    </button>
  );
};
