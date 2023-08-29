import React, { useRef, useContext } from "react";
import { RoutineContext } from "../../../../App";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../../../config/firebase"; // Import your initialized Firebase instance

interface AddExerciseIT {
  closeModal: () => void;
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

export const EditItemExercise = (props: AddExerciseIT) => {
  const {
    exerciseList = [],
    setExerciseList = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { closeModal, exercise } = props;

  const [exerciseName, setExerciseName] = React.useState(exercise.name);
  const [linkImage, setLinkImage] = React.useState(exercise.linkImage);
  const [muscles, setMuscles] = React.useState<string[]>(
    exercise.muscles || []
  );

  //form that encloses the dialog
  const formRef = useRef<HTMLFormElement>(null);

  const submitExercise = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    processEditingExercise(exercise.id, exerciseName, muscles, linkImage);
    closeModal();
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setMuscles((prevMuscles) => [...prevMuscles, value]);
    } else {
      setMuscles((prevMuscles) =>
        prevMuscles.filter((muscle) => muscle !== value)
      );
    }
  };

  //process and finish the editing process //CURRENTLY WORKING ON
  const processEditingExercise = async (
    id: string,
    exerciseName: string,
    muscles: string[],
    linkImage: string
  ) => {
    const updatedExercises = exerciseList.map((exercise) => {
      if (exercise.id === id) {
        return {
          ...exercise,
          name: exerciseName,
          muscles: muscles,
          linkImage: linkImage,
          isEditing: false,
        };
      } else {
        return exercise;
      }
    });
    setExerciseList(updatedExercises);
    if (isLoggedIn) {
      try {
        // Create a new Firestore document reference for the exercise
        const exerciseDocRef = doc(db, "allExercises", `exercise-${id}`);
        // Get the routine document from Firestore
        const exerciseDoc = await getDoc(exerciseDocRef);

        if (exerciseDoc.exists()) {
          // Update the exercise document
          await updateDoc(exerciseDocRef, {
            name: exerciseName,
            muscles: muscles,
            linkImage: linkImage,
          });
          console.log("Exercise edited in Firebase");
        }
      } catch (err) {
        console.log(`not added` + err);
      }
    }
  };

  return (
    <form onSubmit={submitExercise} className="exerciseAddForm" ref={formRef}>
      <input
        type="text"
        value={exerciseName}
        placeholder="Add exercise"
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <div className="exerciseAddForm__checkboxes">
        <p>Workout type</p>
        <div className="exerciseAddForm__checkboxes__area">
          {[
            "Neck",
            "Traps",
            "Traps-middle",
            "Lowerback",
            "Shoulders",
            "Chest",
            "Biceps",
            "Triceps",
            "Forearms",
            "Obliques",
            "Abdominals",
            "Laterals",
            "Quads",
            "Calves",
            "Hamstrings",
            "Glutes",
            "Core",
            "Cardio",
          ].map((muscle) => (
            <div
              className="exerciseAddForm__checkboxes__area__box"
              key={`muscle-${exercise.id}-${muscle}`} // Assign a unique key
            >
              <input
                type="checkbox"
                value={muscle}
                checked={muscles.includes(muscle)}
                onChange={handleCheckboxChange}
              />
              <label>{muscle}</label>
            </div>
          ))}
        </div>
      </div>
      <input
        type="text"
        value={linkImage}
        placeholder="Image url"
        onChange={(e) => setLinkImage(e.target.value)}
      />
      <div className="exerciseAddForm__buttons">
        <button type="submit">Update</button>
        <button type="reset" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </form>
  );
};
