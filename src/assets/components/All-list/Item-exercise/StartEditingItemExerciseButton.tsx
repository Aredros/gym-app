import React, { useContext } from "react";
import { RoutineContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface StartEditExerciseIT {
  openModal: () => void;
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

export const StartEditingItemExerciseButton = (props: StartEditExerciseIT) => {
  const { exerciseList = [], setExerciseList = () => {} } =
    useContext(RoutineContext) || {}; //getting the colors from the context

  const { openModal, exercise } = props;

  //Start editing process
  const startEditingExercise = (id: string) => {
    const updatedExercises = exerciseList.map((exercise) => {
      return exercise.id === id ? { ...exercise, isEditing: true } : exercise;
    });
    //Save into localStorage
    localStorage.setItem("exerciseList", JSON.stringify(updatedExercises));
    setExerciseList(updatedExercises);
  };

  const handleStartEdition = () => {
    startEditingExercise(exercise.id);
    openModal();
  };

  return <FontAwesomeIcon icon={faEdit} onClick={handleStartEdition} />;
};
