import React from "react";
import { ItemMyExercise } from "./ItemMyExercise";

interface exerciseIT {
  id: string;
  MyExerciseID: string;
  weekday: string;
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
}

interface ItemMyExerciseIT {
  exercises: exerciseIT[];
  deleteMyExercise: (id: string) => void;
  day: string;
}

export const MyDailyDivider = (props: ItemMyExerciseIT) => {
  const { day, exercises, deleteMyExercise } = props;

  return (
    <div>
      <h3>{day}</h3>
      <ul className="all-exercises-list">
        {exercises.map((exercise) => (
          <ItemMyExercise
            key={exercise.id}
            exerciseItem={exercise}
            deleteMyExercise={deleteMyExercise}
          />
        ))}
      </ul>
    </div>
  );
};
