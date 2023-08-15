import React, { useRef, useContext, useEffect } from "react";
import { RoutineContext } from "../../../App";
import { v4 as uuidv4 } from "uuid";

interface AddExerciseIT {
  closeModal: () => void;
}

interface Exercise {
  id: string;
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
  details: string;
}

export const ExerciseForm = (props: AddExerciseIT) => {
  const { exerciseList = [], setExerciseList } =
    useContext(RoutineContext) || {};

  const { closeModal } = props;

  const [exerciseName, setExerciseName] = React.useState("");
  const [linkImage, setLinkImage] = React.useState("");
  const [muscles, setMuscles] = React.useState<string[]>([""]);
  const [details, setDetails] = React.useState("");

  const formRef = useRef<HTMLFormElement>(null);

  //create and add exercise to the list of exercises
  const addExercise = (
    exerciseName: string,
    muscles: string[],
    linkImage: string
  ) => {
    if (!setExerciseList) return; // Guard against potential null reference
    const newExercise: Exercise = {
      id: uuidv4(),
      isEditing: false,
      name: exerciseName,
      muscles: muscles,
      linkImage: linkImage,
      details: details, // Add this line with an empty string or provide relevant details
    };
    setExerciseList((prevExerciseList) => [...prevExerciseList, newExercise]);
  };

  const submitExercise = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addExercise(exerciseName, muscles, linkImage);
    setExerciseName("");
    setLinkImage("");
    setMuscles([""]);
    setDetails("");
    // reset the form
    formRef.current?.reset();
    ///close the pop up
    closeModal();
  };

  const addTypeToArray = (value: string, checked: boolean) => {
    if (checked) {
      return setMuscles([...muscles, value]);
    } else {
      return setMuscles(muscles.filter((muscle) => muscle !== value));
    }
  };

  // Save updated exercises and routines to localStorage
  useEffect(() => {
    localStorage.setItem("exerciseList", JSON.stringify(exerciseList));
  }, [exerciseList]);

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
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Neck"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Neck</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Traps"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Traps</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Traps-middle"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Traps-middle</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Lowerback"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Lowerback</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Shoulders"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Shoulders</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Chest"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Chest</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Biceps"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Biceps</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Triceps"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Triceps</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Forearms"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Forearms</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Obliques"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Obliques</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Abdominals"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Abdominals</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Laterals"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Laterals</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Quads"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Quads -legs</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Calves"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Calves</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Hamstrings"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Hamstrings</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Glutes"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Glutes</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Core"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Core</label>
          </div>
          <div className="exerciseAddForm__checkboxes__area__box">
            <input
              type="checkbox"
              value="Cardio"
              onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
            />
            <label>Cardio</label>
          </div>
        </div>
      </div>
      <input
        type="text"
        value={linkImage}
        placeholder="Image url"
        onChange={(e) => setLinkImage(e.target.value)}
      />
      <textarea
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Description"
      ></textarea>
      <div className="exerciseAddForm__buttons">
        <button type="submit">Add</button>
        <button type="reset" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </form>
  );
};
