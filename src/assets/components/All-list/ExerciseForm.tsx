import React, { useRef } from "react";

interface AddExerciseIT {
  addExercise: (
    exerciseName: string,
    muscles: string[],
    linkImage: string
  ) => void;
  closeModal: () => void;
}

export const ExerciseForm = (props: AddExerciseIT) => {
  const { closeModal, addExercise } = props;

  const [exerciseName, setExerciseName] = React.useState("");
  const [linkImage, setLinkImage] = React.useState("");
  const [muscles, setMuscles] = React.useState([""]);

  const formRef = useRef<HTMLFormElement>(null);

  const submitExercise = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addExercise(exerciseName, muscles, linkImage);
    setExerciseName("");
    setLinkImage("");
    setMuscles([""]);
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

  return (
    <form onSubmit={submitExercise} className="exerciseAddForm" ref={formRef}>
      <input
        type="text"
        value={exerciseName}
        placeholder="Add exercise"
        onChange={(e) => setExerciseName(e.target.value)}
      />

      <button type="submit">Add</button>
      <button type="reset" onClick={closeModal}>
        Cancel
      </button>
      <div className="exerciseAddForm__checkboxes">
        <p>Workout type</p>
        <input
          type="checkbox"
          value="Chest"
          onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
        />
        <label>Chest</label>
        <input
          type="checkbox"
          value="Back"
          onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
        />
        <label>Back</label>

        <input
          type="checkbox"
          value="Arms"
          onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
        />
        <label>Arms</label>

        <input
          type="checkbox"
          value="Legs"
          onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
        />
        <label>Legs</label>

        <input
          type="checkbox"
          value="Shoulders"
          onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
        />
        <label>Shoulders</label>

        <input
          type="checkbox"
          value="Abs"
          onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
        />
        <label>Abs</label>

        <input
          type="checkbox"
          value="Core"
          onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
        />
        <label>Core</label>

        <input
          type="checkbox"
          value="Cardio"
          onChange={(e) => addTypeToArray(e.target.value, e.target.checked)}
        />
        <label>Cardio</label>
      </div>
      <input
        type="text"
        value={linkImage}
        placeholder="Image url"
        onChange={(e) => setLinkImage(e.target.value)}
      />
    </form>
  );
};
