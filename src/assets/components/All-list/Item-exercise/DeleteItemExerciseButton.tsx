import React, { useContext, useEffect } from "react";
import { RoutineContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../../config/firebase";
import {
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

interface DeleteExerciseIT {
  exercise: {
    id: string;
    isEditing: boolean;
    name: string;
    muscles: string[];
    linkImage: string;
    details: string;
    userCreator: string;
  };
}

export const DeleteItemExerciseButton = (props: DeleteExerciseIT) => {
  const {
    exerciseList = [],
    setExerciseList = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { exercise } = props;

  const deleteExercise = async (id: string) => {
    const updatedExercises = exerciseList.filter(
      (exercise) => exercise.id !== id
    );
    setExerciseList(updatedExercises);
    if (isLoggedIn) {
      try {
        console.log("deleting from Firebase");
        // Get the current user's email
        const userEmail = auth.currentUser?.email;

        // Create a query to fetch the specific todo based on the user and todo ID
        const q = query(
          collection(db, "allExercises"),
          where("userCreator", "==", userEmail),
          where("id", "==", id)
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
  };

  // Save updated exercises and routines to localStorage
  useEffect(() => {
    localStorage.setItem("exerciseList", JSON.stringify(exerciseList));
  }, [exerciseList]);

  return (
    <FontAwesomeIcon
      icon={faTrash}
      onClick={() => deleteExercise(exercise.id)}
    />
  );
};
