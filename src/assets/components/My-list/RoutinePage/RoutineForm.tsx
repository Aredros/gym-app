import React, { useRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { RoutineContext } from "../../../../App";

interface AddExerciseIT {
  closeModal: () => void;
}

export const RoutineForm = (props: AddExerciseIT) => {
  const {
    exerciseList = [],
    myRoutines = [],
    setMyRoutines = () => {},
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { closeModal } = props;

  const [routineName, setRoutineName] = React.useState("");
  const [linkImage, setLinkImage] = React.useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const submitRoutine = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRoutine(routineName, linkImage);
    setRoutineName("");
    setLinkImage("");
    // reset the form
    formRef.current?.reset();
    ///close the pop up
    closeModal();
  };

  //create and add exercise to the list of exercises
  const addRoutine = (routineName: string, routineImage: string) => {
    const newRoutine = {
      routineID: uuidv4(),
      isEditing: false,
      routineName: routineName,
      routineImage: routineImage,
      routineExercises: [], // Add routineExercises as an empty array
    };
    setMyRoutines([...myRoutines, newRoutine]);
    //Save into localStorage
    localStorage.setItem(
      "myRoutines",
      JSON.stringify([...myRoutines, newRoutine])
    );
  };

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
    </form>
  );
};
