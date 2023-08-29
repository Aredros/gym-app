import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { RoutineContext } from "../../../../../App";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../../../config/firebase";
import {
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

interface exerciseIT {
  routineID: string;
  exerciseItem?: {
    allExercisesUniqueID: string;
    isEditing: boolean;
    individualMyExerciseID: string;
    objective: string;
    routine: string;
    type: string;
    sets: any[];
    myExUserCreator: string;
  };
}

export const DeleteMyItemButton = (props: exerciseIT) => {
  const {
    myRoutines = [],
    setMyRoutines = () => {},
    doneActivities = [],
    setDoneActivities = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { exerciseItem, routineID } = props;

  //Erase Exercise from my personal list routine
  const deleteMyExercise = async (
    selectedRoutineID: string,
    selectedExerciseID: string
  ) => {
    const updatedRoutines = myRoutines.map((routine) => {
      if (routine.routineID === selectedRoutineID) {
        const updatedExercises = routine.routineExercises.filter(
          (exercise) => exercise.individualMyExerciseID !== selectedExerciseID
        );
        return { ...routine, routineExercises: updatedExercises };
      } else {
        return routine;
      }
    });

    setMyRoutines(updatedRoutines);

    if (isLoggedIn) {
      try {
        console.log("deleting from Firebase: MyExercises");
        // Get the current user's email
        const userEmail = auth.currentUser?.email;

        // Create a query to fetch the specific todo based on the user and todo ID
        const q = query(
          collection(db, "allExercises"),
          where("myExUserCreator", "==", userEmail),
          where("id", "==", selectedExerciseID)
        );

        // Get the document that matches the query
        const querySnapshot = await getDocs(q);

        // Delete the document associated with the user and todo ID
        querySnapshot.docs.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
      } catch (err) {
        console.log(err);
      }
    }

    //DONEdata Part
    //Delete the last item with the same ID from doneData state
    const lastDoneDataIndex = doneActivities
      .slice()
      .reverse()
      .findIndex((doneData) => doneData.doneExerciseID === selectedExerciseID);

    if (lastDoneDataIndex !== -1) {
      const lastDoneData =
        doneActivities[doneActivities.length - lastDoneDataIndex - 1];
      setDoneActivities(
        doneActivities.filter((doneData) => doneData !== lastDoneData)
      );
    }

    //go back to prev Page
    goBack();
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // Save updated exercises and routines to localStorage
  useEffect(() => {
    localStorage.setItem("myRoutines", JSON.stringify(myRoutines));
  }, [myRoutines]);

  return (
    <>
      {exerciseItem && (
        <button
          onClick={() =>
            deleteMyExercise &&
            deleteMyExercise(routineID, exerciseItem.individualMyExerciseID)
          }
        >
          Delete from Routine <FontAwesomeIcon icon={faTrash} />
        </button>
      )}
    </>
  );
};
