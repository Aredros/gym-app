import React, { useContext } from "react";
import { RoutineContext } from "../../../../App";

interface exerciseIT {
  routineID: string;
}

export const DeleteRoutineButton = (props: exerciseIT) => {
  const { myRoutines = [], setMyRoutines = () => {} } =
    useContext(RoutineContext) || {}; //getting the colors from the context

  const { routineID } = props;

  //Erase Routine from my personal list
  const deleteMyRoutine = (selectedRoutineID: string) => {
    const updatedRoutines = myRoutines.filter(
      (routine) => routine.routineID !== selectedRoutineID
    );

    //Save into localStorage
    localStorage.setItem("myRoutines", JSON.stringify(updatedRoutines));
    setMyRoutines(updatedRoutines);
  };

  return (
    <button onClick={() => deleteMyRoutine && deleteMyRoutine(routineID)}>
      Delete Routine
    </button>
  );
};
