import React, { useRef } from "react";

interface AddExerciseIT {
  processEditingExercise: (
    id: string,
    exerciseName: string,
    muscles: string[],
    linkImage: string
  ) => void;
  closeModal: () => void;
  exercise: {
    id: string;
    name: string;
    muscles: string[];
    linkImage: string;
  };
}

export const EditItemExercise = (props: AddExerciseIT) => {
  const { closeModal, exercise, processEditingExercise } = props;

  const [exerciseName, setExerciseName] = React.useState(exercise.name);
  const [linkImage, setLinkImage] = React.useState(exercise.linkImage);
  const [muscles, setMuscles] = React.useState(exercise.muscles);

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

  return (
    <form onSubmit={submitExercise} className="exerciseAddForm" ref={formRef}>
      <div>
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
      </div>
      <p>Workout type</p>
      <div className="exerciseAddForm__checkboxes">
        {[
          "Chest",
          "Back",
          "Arms",
          "Legs",
          "Shoulders",
          "Abs",
          "Core",
          "Cardio",
        ].map((muscle) => (
          <div
            className="exerciseAddForm__checkboxes__item"
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
      <input
        type="text"
        value={linkImage}
        placeholder="Image url"
        onChange={(e) => setLinkImage(e.target.value)}
      />
    </form>
  );
};
