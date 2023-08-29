import React, { useRef, useContext } from "react";
import { EditItemExercise } from "./EditItemExercise";
import { ItemImage } from "./ItemImage";
import { RoutineContext } from "../../../../App";
import { DeleteItemExerciseButton } from "./DeleteItemExerciseButton";
import { StartEditingItemExerciseButton } from "./StartEditingItemExerciseButton";
import { auth, db } from "../../../../config/firebase";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

interface ITroutineSets {
  ExerciseName: string;
  allExercisesUniqueID: string;
  isEditing: boolean;
  individualMyExerciseID: string;
  objective: string;
  routine: string;
  type: string;
  sets: ITset[];
  myExUserCreator: string;
}
interface ITset {
  setCompleted: boolean;
  reps: number;
  weight: number;
  distance: number;
  time: number;
}

interface ItemExerciteIT {
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

export const ItemExercise = (props: ItemExerciteIT) => {
  const {
    exerciseList = [],
    myRoutines = [],
    setMyRoutines = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { exercise } = props;

  //states
  const [routineToChoose, setRoutineToChoose] = React.useState(
    myRoutines.length > 0 ? myRoutines[0].routineID : ""
  );

  const editRef = useRef<HTMLDialogElement | null>(null);
  const openModal = () => {
    editRef.current?.showModal();
  };
  const closeModal = () => {
    editRef.current?.close();
  };

  //Add Exercise to my personal list routine
  const addMyExercise = async (
    selectedExerciseId: string,
    selectedRoutineID: string
  ) => {
    //Get to know if we're dealing with the exercise with the same ID (true or false)
    const selectedExercise = exerciseList.find(
      (exercise) => exercise.id === selectedExerciseId
    );

    if (selectedExercise) {
      const newMyExercise: ITroutineSets = {
        ExerciseName: selectedExercise.name, // Add the 'name' property
        allExercisesUniqueID: selectedExercise.id, // Add the 'id' property
        isEditing: false, // Add the 'isEditing' property
        individualMyExerciseID: uuidv4(), // Add the 'myExerciseID' property
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
        myExUserCreator: auth.currentUser?.email || "",
      };

      const updatedRoutines = myRoutines.map((eachRoutine) =>
        eachRoutine.routineID === selectedRoutineID
          ? {
              ...eachRoutine,
              routineExercises: [
                ...eachRoutine.routineExercises,
                newMyExercise,
              ],
            }
          : eachRoutine
      );

      setMyRoutines(updatedRoutines);

      if (isLoggedIn) {
        try {
          // Create a new Firestore document reference for the routine
          const routineDocRef = doc(
            db,
            "myExercises",
            `routine-${selectedRoutineID}`
          );

          // Get the routine document from Firestore
          const routineDoc = await getDoc(routineDocRef);

          if (routineDoc.exists()) {
            // Update the routineExercises array with the newMyExercise
            const updatedRoutineExercises = [
              ...routineDoc.data().routineExercises,
              newMyExercise,
            ];

            // Update the routineExercises field in the routine document
            await updateDoc(routineDocRef, {
              routineExercises: updatedRoutineExercises,
            });

            console.log("Exercise added to the routine in Firebase");
          }
        } catch (err) {
          console.log(`not added` + err);
        }
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
                    key={`${chosenRoutine.routineID}-${chosenRoutine.routineName}`}
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
