import React, { useContext } from "react";
import { RoutineContext } from "../../../../App";
import { auth, db } from "../../../../config/firebase";
import { addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";

interface exerciseIT {
  routineID: string;
}

export const DeleteRoutineButton = (props: exerciseIT) => {
  const {
    myRoutines = [],
    setMyRoutines = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { routineID } = props;

  //Erase Routine from my personal list
  const deleteMyRoutine = async (selectedRoutineID: string) => {
    const updatedRoutines = myRoutines.filter(
      (routine) => routine.routineID !== selectedRoutineID
    );

    // Save into localStorage
    localStorage.setItem("myRoutines", JSON.stringify(updatedRoutines));
    setMyRoutines(updatedRoutines);

    // If connected then also delete from Firebase
    if (isLoggedIn) {
      try {
        const routineDocRef = doc(
          db,
          "myExercises",
          `routine-${selectedRoutineID}`
        );
        await deleteDoc(routineDocRef);
        console.log("Routine deleted from Firebase");
      } catch (error) {
        console.error("Error deleting routine from Firebase:", error);
      }
    }
  };
  return (
    <button onClick={() => deleteMyRoutine && deleteMyRoutine(routineID)}>
      Delete Routine
    </button>
  );
};
