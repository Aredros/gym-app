import React, { useRef } from "react";
import { ExerciseForm } from "./All-list/ExerciseForm";
import { Navigation } from "./Navigation";
import { ItemExercise } from "./All-list/ItemExercise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

interface AllExerciseProps {
  startEditingExercise: (id: string) => void;
  addExercise: (
    exerciseName: string,
    muscles: string[],
    linkImage: string
  ) => void;
  addMyExercise: (id: string, weekday: string) => void;
  deleteExercise: (id: string) => void;
  processEditingExercise: (
    id: string,
    exerciseName: string,
    muscles: string[],
    linkImage: string
  ) => void;
  exercises: {
    id: string;
    isEditing: boolean;
    name: string;
    muscles: string[];
    linkImage: string;
  }[];
}

export const AllExercises = (props: AllExerciseProps) => {
  //all props being passed
  const {
    deleteExercise,
    addMyExercise,
    exercises,
    addExercise,
    startEditingExercise,
    processEditingExercise,
  } = props;

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div>
      <Navigation />
      <div className="main-exercises">
        <h2>All Exercises</h2>
        <span className="button-with-text" onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} /> New
        </span>
        <dialog ref={modalRef}>
          <ExerciseForm addExercise={addExercise} closeModal={closeModal} />
        </dialog>

        <ul className="all-exercises-list">
          {exercises.map((exercise) => (
            <ItemExercise
              exercise={exercise}
              addMyExercise={addMyExercise}
              key={exercise.id}
              deleteExercise={deleteExercise}
              startEditingExercise={startEditingExercise}
              processEditingExercise={processEditingExercise}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
