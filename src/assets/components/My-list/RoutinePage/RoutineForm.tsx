import React, { useRef, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { RoutineContext } from "../../../../App";
import { auth, db } from "../../../../config/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

interface AddExerciseIT {
  closeModal: () => void;
}

export const RoutineForm = (props: AddExerciseIT) => {
  const {
    myRoutines = [],
    setMyRoutines = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { closeModal } = props;

  const [routineName, setRoutineName] = React.useState("");
  const [routineDescription, setRoutineDescription] = React.useState("");
  const [routineImage, setRoutineImage] = React.useState("");
  const [linkImage, setLinkImage] = React.useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const submitRoutine = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRoutine(routineName, linkImage);
    setRoutineName("");
    setRoutineDescription("");
    setLinkImage("");
    // reset the form
    formRef.current?.reset();
    ///close the pop up
    closeModal();
  };

  //create and add exercise to the list of exercises
  const addRoutine = async (routineName: string, routineImage: string) => {
    const newRoutine = {
      routineID: uuidv4(),
      routineDetails: routineDescription,
      isEditing: false,
      routineName: routineName,
      routineImage: routineImage,
      routineCompletion: [],
      routineExercises: [], // Add routineExercises as an empty array
      routineCreator: auth.currentUser?.email || "",
    };
    setMyRoutines([...myRoutines, newRoutine]);

    if (isLoggedIn) {
      try {
        // Create a new Firestore collection reference
        const routinesCollectionRef = collection(db, "myExercises");

        // Construct the document ID with the desired format
        const documentId = `routine-${newRoutine.routineID}`;

        // Create a reference to the document
        const routineDocRef = doc(routinesCollectionRef, documentId);

        // Set the data for the document
        await setDoc(routineDocRef, newRoutine);

        console.log("Sending routine to Firebase");
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Save updated exercises and routines to localStorage
  useEffect(() => {
    localStorage.setItem("myRoutines", JSON.stringify(myRoutines));
  }, [myRoutines]);

  return (
    <form onSubmit={submitRoutine} className="exerciseAddForm" ref={formRef}>
      <input
        type="text"
        value={routineName}
        placeholder="Routine name"
        onChange={(e) => setRoutineName(e.target.value)}
      />

      <button type="submit">Add Routine</button>
      <button type="reset" onClick={closeModal}>
        Cancel
      </button>
      <input
        type="text"
        value={linkImage}
        placeholder="Image url"
        onChange={(e) => setLinkImage(e.target.value)}
      />
      <textarea
        value={routineDescription}
        placeholder="Description"
        onChange={(e) => setRoutineDescription(e.target.value)}
      />
    </form>
  );
};
