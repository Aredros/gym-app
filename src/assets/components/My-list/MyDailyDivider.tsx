import { ItemMyExercise } from "./RoutinePage/item-myExercise/ItemMyExercise";

interface exerciseIT {
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

interface ItemMyExerciseIT {
  exercises: exerciseIT[];
  deleteMyExercise: (id: string) => void;
  routine: any;
  day: string;
}

export const MyDailyDivider = (props: ItemMyExerciseIT) => {
  const { day, exercises, deleteMyExercise, routine } = props;

  return (
    <div>
      <h3>{routine}</h3>
      <ul className="all-exercises-list">
        {exercises.map((exercise) => (
          <ItemMyExercise
            key={exercise.individualMyExerciseID}
            exerciseItem={exercise}
            routineID={exercise.routine}
          />
        ))}
      </ul>
      <div className="routine">
        <h2>Routine Maker</h2>
        <form
          className="routine__form"
          //onSubmit={handleSubmit}
        >
          <button type="submit"> Create</button>
        </form>
      </div>
    </div>
  );
};
