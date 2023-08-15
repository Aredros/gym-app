import React, { useRef, useContext } from "react";
import { EditItemExercise } from "./EditItemExercise";
import { ItemImage } from "./ItemImage";
import { RoutineContext } from "../../../../App";
import { DeleteItemExerciseButton } from "./DeleteItemExerciseButton";
import { v4 as uuidv4 } from "uuid";
import { StartEditingItemExerciseButton } from "./StartEditingItemExerciseButton";

interface ItemExerciteIT {
  exercise: {
    id: string;
    name: string;
    muscles: string[];
    linkImage: string;
    details: string;
  };
}

export const ItemExercise = (props: ItemExerciteIT) => {
  const {
    exerciseList = [],
    myRoutines = [],
    setMyRoutines = () => {},
    doneActivities = [],
    setDoneActivities = () => {},
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { exercise } = props;

  //states
  const [routineToChoose, setRoutineToChoose] = React.useState(
    myRoutines.length > 0 ? myRoutines[0].routineName : ""
  );

  const editRef = useRef<HTMLDialogElement | null>(null);
  const openModal = () => {
    editRef.current?.showModal();
  };
  const closeModal = () => {
    editRef.current?.close();
  };

  //Add Exercise to my personal list routine
  const addMyExercise = (
    selectedExerciseId: string,
    selectedRoutineID: string
  ) => {
    //Get to know if we're dealing with the exercise with the same ID (true or false)
    const selectedExercise = exerciseList.find(
      (exercise) => exercise.id === selectedExerciseId
    );
    if (selectedExercise) {
      const updatedExercise = {
        idExercise: selectedExercise.id, // Add the 'id' property
        isEditing: false, // Add the 'isEditing' property
        name: selectedExercise.name,
        muscles: selectedExercise.muscles,
        linkImage: selectedExercise.linkImage,
        myExerciseID: uuidv4(), // Add the 'myExerciseID' property
        objective: "",
        routine: selectedRoutineID, // Add the 'routine' property
        type: "Cardio",
        sets: [
          {
            setCompleted: false,
            reps: 0,
            weight: 0,
            distance: 0,
            time: 0,
          },
        ],
      };
      const selectedRoutine = myRoutines.find(
        (chosenRoutine) => chosenRoutine.routineID === selectedRoutineID
      );
      if (selectedRoutine) {
        const updatedExercises = [
          ...selectedRoutine.routineExercises,
          updatedExercise,
        ];

        const updatedRoutines = myRoutines.map((chosenRoutine) =>
          chosenRoutine.routineID === selectedRoutineID
            ? { ...chosenRoutine, routineExercises: updatedExercises }
            : chosenRoutine
        );

        setMyRoutines(updatedRoutines);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMyExercise(exercise.id, routineToChoose);
    alert("Exercise added to your routine!");
  };

  // Generate a unique key for each EditItemExercise component
  const editItemKey = `edit-item-${exercise.id}-${exercise.name}`;

  if (!myRoutines || myRoutines.length === 0) {
    return null; // or return a placeholder/error message
  }

  return (
    <li className="Item-exercise" key={exercise.id}>
      <div className="Item-exercise__area1">
        <div className="Item-exercise__area1__titleNbuttons">
          <h2>{exercise.name}</h2>
          <div className="Item-exercise__area1__titleNbuttons__buttons">
            <StartEditingItemExerciseButton
              openModal={openModal}
              exercise={exercise}
            />
            <DeleteItemExerciseButton exercise={exercise} />
          </div>
        </div>
        <div className="Item-exercise__area1__routineChooser">
          <form onSubmit={handleSubmit}>
            <select
              name="routineChooser"
              id="routineChooser"
              onChange={(e) => setRoutineToChoose(e.target.value)}
            >
              <option value="" disabled>
                choose routine
              </option>
              {myRoutines.map((chosenRoutine) => {
                return (
                  <option
                    key={chosenRoutine.routineID}
                    value={chosenRoutine.routineID}
                  >
                    {chosenRoutine.routineName}
                  </option>
                );
              })}
            </select>
            <button type="submit"> Add to routine</button>
          </form>
        </div>
      </div>
      <div className="Item-exercise__area2">
        {exercise.muscles &&
          exercise.muscles.map((muscle) => {
            return <span key={`${muscle}${exercise.id}`}>{muscle} </span>;
          })}
      </div>
      {exercise.linkImage && (
        <ItemImage typeClass={"Item-exercise"} exerciseItem={exercise} />
      )}
      <dialog ref={editRef}>
        <EditItemExercise
          key={editItemKey}
          exercise={exercise}
          closeModal={closeModal}
        />
      </dialog>
    </li>
  );
};
