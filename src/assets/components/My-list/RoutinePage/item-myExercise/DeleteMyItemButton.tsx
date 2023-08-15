import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { RoutineContext } from "../../../../../App";
import { Link, useParams, useNavigate } from "react-router-dom";

interface exerciseIT {
  routineID: string;
  exerciseItem?: {
    idExercise: string;
    isEditing: boolean;
    name: string;
    muscles: string[];
    linkImage: string;
    myExerciseID: string;
    objective: string;
    routine: string;
    type: string;
    sets: any[];
  };
}

export const DeleteMyItemButton = (props: exerciseIT) => {
  const {
    exerciseList = [],
    setExerciseList = () => {},
    myRoutines = [],
    setMyRoutines = () => {},
    doneActivities = [],
    setDoneActivities = () => {},
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  const { exerciseItem, routineID } = props;

  //Erase Exercise from my personal list routine
  const deleteMyExercise = (
    selectedRoutineID: string,
    selectedExerciseID: string
  ) => {
    const updatedRoutines = myRoutines.map((routine) => {
      if (routine.routineID === selectedRoutineID) {
        const updatedExercises = routine.routineExercises.filter(
          (exercise) => exercise.myExerciseID !== selectedExerciseID
        );
        return { ...routine, routineExercises: updatedExercises };
      } else {
        return routine;
      }
    });

    //Save into localStorage
    localStorage.setItem("myRoutines", JSON.stringify(updatedRoutines));
    setMyRoutines(updatedRoutines);

    //Delete the last item with the same ID from doneData state
    const lastDoneDataIndex = doneActivities
      .slice()
      .reverse()
      .findIndex((doneData) => doneData.doneExerciseID === selectedExerciseID);

    if (lastDoneDataIndex !== -1) {
      const lastDoneData =
        doneActivities[doneActivities.length - lastDoneDataIndex - 1];
      setDoneActivities(
        doneActivities.filter((doneData) => doneData !== lastDoneData)
      );
    }

    //go back to prev Page
    goBack();
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {exerciseItem && (
        <button
          onClick={() =>
            deleteMyExercise &&
            deleteMyExercise(routineID, exerciseItem.myExerciseID)
          }
        >
          Delete from Routine <FontAwesomeIcon icon={faTrash} />
        </button>
      )}
    </>
  );
};
