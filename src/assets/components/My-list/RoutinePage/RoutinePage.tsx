import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemMyExercise } from "./item-myExercise/ItemMyExercise";
import { RoutineContext } from "../../../../App";
import { DeleteRoutineButton } from "./DeleteRoutineButton";

interface Routines {
  routineID: string;
  isEditing: boolean;
  routineName: string;
  routineImage: string;
  routineCompletion: number[];
  routineExercises: ITroutineSets[];
}

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

export const RoutinePage = () => {
  const { myRoutines } = useContext(RoutineContext) || {};

  // Access the URL parameter using useParams hook
  const { routineID } = useParams<{ routineID?: string }>();

  // Check if routineID is defined, and provide a default value if it's undefined
  const validRoutineID = routineID ?? "";

  const TheRoutine = myRoutines?.find(
    (routine) => routine.routineID === validRoutineID
  );

  // Get routine name based on the routineID
  const getRoutineName = (routineID: string) => {
    const selectedRoutine = myRoutines?.find(
      (routine) => routine.routineID === routineID
    );
    return selectedRoutine ? selectedRoutine.routineName : "Routine Not Found";
  };

  const allRoutineCompletion = TheRoutine?.routineCompletion;

  return (
    <div>
      <div className="main-exercises">
        <div key={`key-${validRoutineID}`}>
          <h3>{getRoutineName(validRoutineID)}</h3>
          <div className="tracking-container">
            {allRoutineCompletion?.map((each) => (
              <span key={`completion-${each}`}>{each}</span>
            ))}
          </div>
          <ul className="all-exercises-list">
            {TheRoutine?.routineExercises.map((exercise: ITroutineSets) => (
              <ItemMyExercise
                key={exercise.myExerciseID} // Add a unique key prop using exercise.id or another unique identifier
                routineID={validRoutineID}
                exerciseItem={exercise}
              />
            ))}
          </ul>
          <DeleteRoutineButton routineID={validRoutineID} />
        </div>
      </div>
    </div>
  );
};
