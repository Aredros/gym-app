import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { RoutineContext } from "../../../../../App";

interface exerciseIT {
  routineID: string;
  exerciseItem: {
    myExerciseID: string;
    routine: string;
    isEditing: boolean;
    name: string;
    muscles: string[];
    linkImage: string;
  };
}

export const DeleteMyItemButton = (props: exerciseIT) => {
  const {
    exerciseList = [],
    setExerciseList = () => {},
    myRoutines = [],
    setMyRoutines = () => {},
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { exerciseItem, routineID } = props;

  //Erase Exercise from my personal list routine
  const deleteMyExercise = (
    selectedRoutineID: string,
    selectedExerciseID: string
  ) => {
    const updatedRoutines = myRoutines.map((routine) => {
      if (routine.routineID === selectedRoutineID) {
        const updatedExercises = routine.routineExercises.filter(
          (exercise) => exercise.myExerciseID !== selectedExerciseID
        );
        return { ...routine, routineExercises: updatedExercises };
      } else {
        return routine;
      }
    });

    //Save into localStorage
    localStorage.setItem("myRoutines", JSON.stringify(updatedRoutines));
    setMyRoutines(updatedRoutines);
  };

  return (
    <FontAwesomeIcon
      icon={faTrash}
      onClick={() =>
        deleteMyExercise &&
        deleteMyExercise(routineID, exerciseItem.myExerciseID)
      }
    />
  );
};
