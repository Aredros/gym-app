import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHandFist,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import { RoutineContext } from "../../../../../App";

interface AllListExercise {
  id: string;
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
  details: string;
  userCreator: string;
}

interface ITroutineSets {
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
  routineID: string;
  exerciseItem: ITroutineSets;
}

export const ItemMyExercise = (props: ItemMyExerciseIT) => {
  const { exerciseList = [], myRoutines = [] } =
    useContext(RoutineContext) || {}; //getting the colors from the context

  const { exerciseItem, routineID } = props;

  const allSets = exerciseItem.sets.length;

  const completedCounter =
    exerciseItem.sets.filter((each: ITset) => each.setCompleted === true)
      ?.length || 0;

  const GeneralExerciseInfo: AllListExercise | undefined = exerciseList.find(
    (exercise) => exercise.id === exerciseItem.allExercisesUniqueID
  );

  //GET Current URL for going backwards button
  const url = window.location.href;

  useEffect(() => {
    // Update localStorage whenever routines change
    localStorage.setItem("todosLocal", JSON.stringify("myRoutines"));
  }, [myRoutines]);

  return (
    <Link
      key={`exercise-details-${exerciseItem.individualMyExerciseID}`}
      to={
        {
          pathname: `/myexerciseDetails/${exerciseItem.individualMyExerciseID}`,
          state: { prevPage: url },
        } as any
      }
    >
      <li
        className="item-my-exercise"
        key={`edit-my-item-${exerciseItem.individualMyExerciseID}-${GeneralExerciseInfo?.name}`}
      >
        <div
          className="item-my-exercise__area1"
          style={{
            background: completedCounter === allSets ? "#5fe782" : "##ffe4c4",
          }}
        >
          <div className="item-my-exercise__area1__textNimage">
            <h2>
              {GeneralExerciseInfo?.name} {completedCounter}/{allSets}{" "}
              {completedCounter === allSets ? (
                <FontAwesomeIcon icon={faHandFist} />
              ) : null}
            </h2>
          </div>
          <div className="item-my-exercise__area1__muscles">
            {GeneralExerciseInfo?.muscles &&
              GeneralExerciseInfo?.muscles.map((muscle: string) => {
                return (
                  <span
                    key={`muscles-${muscle}-${exerciseItem.individualMyExerciseID}`}
                  >
                    {" "}
                    {muscle}{" "}
                  </span>
                );
              })}
          </div>

          <FontAwesomeIcon icon={faRightToBracket} />
        </div>
      </li>
    </Link>
  );
};
