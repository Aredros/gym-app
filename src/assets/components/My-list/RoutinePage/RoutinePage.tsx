import React, { useContext } from "react";
import { ItemMyExercise } from "./item-myExercise/ItemMyExercise";
import { RoutineContext } from "../../../../App";
import { DeleteRoutineButton } from "./DeleteRoutineButton";

interface ITroutineSets {
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
  myExerciseID: string;
  objective: string;
  routine: string;
  type: string;
  sets: ITset[];
}

interface ITset {
  setCompleted: boolean;
  reps: number;
  weight: number;
  distance: number;
  time: number;
}

interface RoutinePageProps {
  routineID: string;
  exercises: ITroutineSets[];
}

export const RoutinePage = (props: RoutinePageProps) => {
  const { myRoutines } = useContext(RoutineContext) || {};

  const { routineID, exercises } = props;

  // Get routine name based on the routineID
  const getRoutineName = (routineID: string) => {
    const selectedRoutine = myRoutines?.find(
      (routine) => routine.routineID === routineID
    );
    return selectedRoutine ? selectedRoutine.routineName : "";
  };

  return (
    <>
      <div key={`key-${routineID}`}>
        <h3>{getRoutineName(routineID)}</h3>
        <div className="tracking-container">
          {/* {completedRoutineCollection.map((counter) => (
            <div key={counter.id}>
              <p>
                {counter.completedSets}/{counter.totalSets}
              </p>
              <p>
                {new Date(counter.date).toLocaleDateString(undefined, {
                  day: "numeric",
                  month: "short",
                })}
              </p>
            </div> 
          ))} */}
        </div>
        <ul className="all-exercises-list">
          {exercises.map((exercise) => (
            <ItemMyExercise
              key={exercise.myExerciseID} // Add a unique key prop using exercise.id or another unique identifier
              routineID={routineID}
              exerciseItem={exercise}
            />
          ))}
        </ul>
        <DeleteRoutineButton routineID={routineID} />
      </div>
    </>
  );
};
