import React, { useContext } from "react";
import { useParams } from "react-router-dom";

interface ITroutineSets {
  exerciseInfo?: IExerciseInfo[];
}

interface IExerciseInfo {
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

export const PageExerciseDetails = () => {
  // Access the URL parameter using useParams hook
  const { myExerciseID } = useParams();

  return (
    <>
      <div className="card">
        <p>ID: {myExerciseID}</p>

        {/* Render other exercise details based on "data" */}
      </div>
    </>
  );
};
