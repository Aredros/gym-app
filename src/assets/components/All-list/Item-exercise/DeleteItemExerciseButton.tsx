import React, { useContext } from "react";
import { RoutineContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface DeleteExerciseIT {
  exercise: {
    id: string;
    name: string;
    muscles: string[];
    linkImage: string;
  };
}

export const DeleteItemExerciseButton = (props: DeleteExerciseIT) => {
  const { exerciseList = [], setExerciseList = () => {} } =
    useContext(RoutineContext) || {}; //getting the colors from the context

  const { exercise } = props;

  const deleteExercise = (id: string) => {
    const updatedExercises = exerciseList.filter(
      (exercise) => exercise.id !== id
    );
    //Save into localStorage
    localStorage.setItem("exerciseList", JSON.stringify(updatedExercises));
    setExerciseList(updatedExercises);
  };

  return (
    <FontAwesomeIcon
      icon={faTrash}
      onClick={() => deleteExercise(exercise.id)}
    />
  );
};
