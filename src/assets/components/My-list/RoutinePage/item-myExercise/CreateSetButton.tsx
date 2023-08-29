import React, { useContext } from "react";
import { RoutineContext } from "../../../../../App";
import { auth, db } from "../../../../../config/firebase";
import { updateDoc, where, getDoc, doc } from "firebase/firestore";

interface ITroutineSets {
  ExerciseName: string;
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

export const CreateSetButton = (props: ITcreateSet) => {
  const {
    myRoutines = [],
    setMyRoutines = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {};

  const { exerciseID, routineID } = props;

  // Create a new set and add it to the selected exercise in the routine
  const createSet = async () => {
    //new empty Set that is going to be added to the exercise after clicking the button
    const newSet: ITset = {
      setCompleted: false,
      reps: 0,
      weight: 0,
      distance: 0,
      time: 0,
    };

    const routineUpdate = myRoutines.map((routine) => {
      if (routine.routineID === routineID) {
        return {
          ...routine,
          routineExercises: routine.routineExercises.map((exercise) => {
            if (exercise.individualMyExerciseID === exerciseID) {
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
    });
    setMyRoutines(routineUpdate);
    // If connected then send to Firebase
    if (isLoggedIn) {
      try {
        const routineExerciseDocRef = doc(
          db,
          "myExercises",
          `routine-${routineID}`
        );

        const routineExerciseDoc = await getDoc(routineExerciseDocRef);

        if (routineExerciseDoc.exists()) {
          const routineExercisesData = routineExerciseDoc.data();

          const updatedRoutineExercises =
            routineExercisesData.routineExercises.map(
              (exercise: ITroutineSets) => {
                if (exercise.individualMyExerciseID === exerciseID) {
                  return {
                    ...exercise,
                    sets: [...exercise.sets, newSet],
                  };
                }
                return exercise;
              }
            );

          await updateDoc(routineExerciseDocRef, {
            routineExercises: updatedRoutineExercises,
          });
          console.log("Set added to the exercise in Firebase");
        }
      } catch (error) {
        console.error("Error updating exercise sets:", error);
      }
    }
  };

  return (
    <button type="button" onClick={createSet}>
      +
    </button>
  );
};
