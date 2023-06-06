import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { EditItemExercise } from "./EditItemExercise";

interface ItemExerciteIT {
  addMyExercise: (id: string, weekday: string) => void;
  startEditingExercise: (id: string) => void;
  processEditingExercise: (
    id: string,
    exerciseName: string,
    muscles: string[],
    linkImage: string
  ) => void;
  deleteExercise: (id: string) => void;
  exercise: {
    id: string;
    name: string;
    muscles: string[];
    linkImage: string;
  };
}

export const ItemExercise = (props: ItemExerciteIT) => {
  const {
    exercise,
    addMyExercise,
    deleteExercise,
    startEditingExercise,
    processEditingExercise,
  } = props;
  //states
  const [weekDay, setWeekDay] = React.useState("Sunday");

  const editRef = useRef<HTMLDialogElement | null>(null);
  const openModal = () => {
    editRef.current?.showModal();
  };
  const closeModal = () => {
    editRef.current?.close();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMyExercise(exercise.id, weekDay);
    setWeekDay("Sunday");
  };

  const handleStartEdition = () => {
    startEditingExercise(exercise.id);
    openModal();
  };

  // Generate a unique key for each EditItemExercise component
  const editItemKey = `edit-item-${exercise.id}-${exercise.name}`;

  return (
    <li className="Item-exercise" key={exercise.id}>
      <div className="Item-exercise__area1">
        <h2>{exercise.name}</h2>
        <form onSubmit={handleSubmit}>
          <select
            name="weekDay"
            id="weekDay"
            onChange={(e) => setWeekDay(e.target.value)}
          >
            <option value="" disabled>
              week day
            </option>
            <option value={"Sunday"}>Sunday</option>
            <option value={"Monday"}>Monday</option>
            <option value={"Tuesday"}>Tuesday</option>
            <option value={"Wednesday"}>Wednesday</option>
            <option value={"Thursday"}>Thursday</option>
            <option value={"Friday"}>Friday</option>
            <option value={"Saturday"}>Saturday</option>
          </select>
          <button type="submit">
            {" "}
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
        <FontAwesomeIcon icon={faEdit} onClick={handleStartEdition} />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteExercise(exercise.id)}
        />
      </div>
      <div className="Item-exercise__area2">
        {exercise.muscles.map((muscle) => {
          return <span key={`${muscle}${exercise.id}`}>{muscle} </span>;
        })}
      </div>
      {exercise.linkImage && (
        <div
          className="Item-exercise__image"
          onClick={() => window.open(exercise.linkImage)}
        >
          <img src={exercise.linkImage} alt={exercise.name} />
        </div>
      )}
      <dialog ref={editRef}>
        <EditItemExercise
          key={editItemKey}
          exercise={exercise}
          closeModal={closeModal}
          processEditingExercise={processEditingExercise}
        />
      </dialog>
    </li>
  );
};
