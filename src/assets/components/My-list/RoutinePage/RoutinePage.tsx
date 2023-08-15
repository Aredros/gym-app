import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemMyExercise } from "./item-myExercise/ItemMyExercise";
import { RoutineContext } from "../../../../App";
import { DeleteRoutineButton } from "./DeleteRoutineButton";
import { ProgressTracker } from "./ProgressTracker";
import { v4 as uuidv4 } from "uuid";

interface Routines {
  routineID: string;
  isEditing: boolean;
  routineName: string;
  routineImage: string;
  routineCompletion: number[];
  routineExercises: ITroutineSets[];
}

interface ITroutineSets {
  idExercise: string;
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

interface doneDataDetails {
  date: string;
  id: string;
  doneExerciseID: string;
  routineID: string;
  totalSets: number;
  completedSets: number;
}

export const RoutinePage = () => {
  const {
    exerciseList = [],
    myRoutines = [],
    doneActivities = [],
    setDoneActivities = () => {},
  } = useContext(RoutineContext) || {};

  const { routineID } = useParams<{ routineID?: string }>();

  const [dateTest, setDateTest] = useState("");

  const validRoutineID = routineID ?? "";
  const TheRoutine = myRoutines?.find(
    (routine) => routine.routineID === validRoutineID
  );

  const getRoutineName = (routineID: string) => {
    const selectedRoutine = myRoutines?.find(
      (routine) => routine.routineID === routineID
    );
    return selectedRoutine ? selectedRoutine.routineName : "Routine Not Found";
  };
  //

  useEffect(() => {
    const updateDoneActivities = () => {
      setDoneActivities((prevDoneActivities) => {
        const updatedDoneActivities: doneDataDetails[] = prevDoneActivities.map(
          (activity) => {
            const matchingExercise = TheRoutine?.routineExercises.find(
              (exercise) => exercise.myExerciseID === activity.doneExerciseID
            );

            if (
              matchingExercise &&
              activity.routineID === validRoutineID &&
              activity.date === new Date().toLocaleDateString()
            ) {
              const completedSets = matchingExercise.sets.filter(
                (set) => set.setCompleted
              ).length;

              return {
                ...activity,
                totalSets: matchingExercise.sets.length,
                completedSets: completedSets,
              };
            }

            return activity;
          }
        );

        // Add new activities for exercises that were not found in existing doneActivities
        TheRoutine?.routineExercises.forEach((exercise) => {
          const existingActivity = updatedDoneActivities.find(
            (activity) =>
              activity.doneExerciseID === exercise.myExerciseID &&
              activity.date === new Date().toLocaleDateString()
          );

          if (!existingActivity) {
            updatedDoneActivities.push({
              date: new Date().toLocaleDateString(),
              id: uuidv4(),
              doneExerciseID: exercise.myExerciseID,
              routineID: validRoutineID,
              totalSets: exercise.sets.length,
              completedSets: exercise.sets.filter((set) => set.setCompleted)
                .length,
            });
          }
        });

        return updatedDoneActivities;
      });
    };

    updateDoneActivities();
  }, [setDoneActivities, validRoutineID]);

  ///Control the testing handles
  const TestingHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (dateTest !== "" && TheRoutine) {
      const firstExercise = TheRoutine?.routineExercises[0];
      const newDoneActivity = {
        date: new Date(dateTest).toLocaleDateString(), // Convert to the "yyyy-MM-dd" format
        id: uuidv4(),
        doneExerciseID: firstExercise.myExerciseID,
        routineID: validRoutineID,
        totalSets: 4,
        completedSets: 1,
      };
      setDoneActivities([...doneActivities, newDoneActivity]);
      // Update localStorage whenever routines change
      localStorage.setItem(
        "localDoneActivities",
        JSON.stringify(doneActivities)
      );
    }
  };

  useEffect(() => {
    // Update localStorage whenever doneActivities change
    localStorage.setItem("localDoneActivities", JSON.stringify(doneActivities));
  }, [doneActivities]);

  return (
    <div>
      <div className="main-exercises">
        <div key={`key-${validRoutineID}`}>
          <h3>{getRoutineName(validRoutineID)}</h3>
          <ProgressTracker routineID={validRoutineID} />
          <ul className="all-exercises-list">
            {TheRoutine?.routineExercises.map((exercise: ITroutineSets) => (
              <ItemMyExercise
                key={exercise.myExerciseID}
                routineID={validRoutineID}
                exerciseItem={exercise}
              />
            ))}
          </ul>
          <DeleteRoutineButton routineID={validRoutineID} />
        </div>
      </div>
      <form>
        <label>Add Done Activity:</label>
        <input
          type="date"
          value={dateTest}
          onChange={(e) => {
            setDateTest(e.target.value); // Simply set the date value as is
          }}
        />
        <button
          onClick={(e) => {
            TestingHandler(e);
          }}
        >
          Add Done Activity
        </button>
      </form>
    </div>
  );
};
