import React from "react";
import { Navigation } from "./Navigation";
import { MyDailyDivider } from "./My-list/MyDailyDivider";

interface Exercise {
  id: string;
  MyExerciseID: string;
  weekday: string;
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
}

interface Days {
  [key: string]: Exercise[];
}

interface MyExercisesProps {
  deleteMyExercise: (id: string) => void;
  myExercises: Exercise[];
}

export const MyExercises = (props: MyExercisesProps) => {
  const { myExercises, deleteMyExercise } = props;

  // function to sort todos tasks based on the day of the week assigned to the exercise
  const sortExercisesByDay = (exercises: Exercise[]) => {
    const days: Days = {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    };

    exercises.forEach((exercise) => {
      const day = exercise.weekday.toLowerCase();
      days[day].push(exercise);
    });
    return days;
  };

  //function to register a done day, saving the exercise, with repetitions and date
  //LATER

  const sortedExercisesByDay = sortExercisesByDay(myExercises);

  return (
    <div>
      <Navigation />
      <div className="main-exercises">
        <h2>My Exercises list</h2>
        {Object.entries(sortedExercisesByDay).map(
          ([day, exercises]) =>
            exercises.length > 0 && (
              <MyDailyDivider
                key={day}
                exercises={exercises}
                day={day}
                deleteMyExercise={deleteMyExercise}
              />
            )
        )}
      </div>
    </div>
  );
};
