import React, { useRef, useContext } from "react";
import { ExerciseForm } from "./All-list/ExerciseForm";
import { ItemExercise } from "./All-list/Item-exercise/ItemExercise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { RoutineContext } from "../../App";

export const AllExercises = () => {
  const { exerciseList = [] } = useContext(RoutineContext) || {}; //getting the colors from the context
  //

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div>
      <div className="main-exercises">
        <h2>All Exercises</h2>
        <span className="button-with-text" onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} /> New
        </span>
        <dialog ref={modalRef}>
          <ExerciseForm closeModal={closeModal} />
        </dialog>

        <ul className="all-exercises-list">
          {exerciseList.map((exercise) => (
            <ItemExercise exercise={exercise} key={exercise.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
