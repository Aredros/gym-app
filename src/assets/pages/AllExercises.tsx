import { useRef, useContext } from "react";
import "../../assets/Styles/pages/all-pages.scss";
import "../../assets/Styles/pages/all-exercises.scss";
import { ExerciseForm } from "../components/All-list/ExerciseForm";
import { ItemExercise } from "../components/All-list/Item-exercise/ItemExercise";
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
    <div className="main-columns-divide__main-area">
      <div className="main-exercises">
        <h2>All Exercises</h2>
        <span className="button-with-text" onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} /> New Exercise
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
