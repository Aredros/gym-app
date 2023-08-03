import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import {
  faHandFist,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { ItemImage } from "../../../All-list/Item-exercise/ItemImage";

import { RoutineContext } from "../../../../../App";

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

interface ItemMyExerciseIT {
  routineID: string;
  exerciseItem: ITroutineSets;
}

export const ItemMyExercise = (props: ItemMyExerciseIT) => {
  const { myRoutines = [], setMyRoutines = () => {} } =
    useContext(RoutineContext) || {}; //getting the colors from the context

  const { exerciseItem, routineID } = props;

  //state to show or dissapear the settings that has options like Delete
  const [optionState, setOptionState] = React.useState<boolean>(false);
  //
  const [editObjective, setEditObjective] = useState(false);
  //
  const [objectiveTextState, setObjectiveTextState] = useState(
    exerciseItem.objective
  );

  const allSets = exerciseItem.sets.length;

  const completedCounter =
    exerciseItem.sets.filter((each: ITset) => each.setCompleted === true)
      ?.length || 0;

  //Function to know if all sets from an exercise have been done

  //GET Current URL for going backwards button
  const url = window.location.href;

  useEffect(() => {
    // Update localStorage whenever routines change
    localStorage.setItem("todosLocal", JSON.stringify("myRoutines"));
  }, [myRoutines]);

  return (
    <li
      className="item-my-exercise"
      key={`edit-my-item-${exerciseItem.myExerciseID}-${exerciseItem.name}`}
    >
      <div
        className="item-my-exercise__area1"
        style={{
          background: completedCounter === allSets ? "#5fe782" : "##ffe4c4",
        }}
      >
        <div className="item-my-exercise__area1__textNimage">
          <h2>
            {exerciseItem.name} {completedCounter}/{allSets}{" "}
            {completedCounter === allSets ? (
              <FontAwesomeIcon icon={faHandFist} />
            ) : null}
          </h2>
        </div>
        <div className="item-my-exercise__area1__muscles">
          {exerciseItem.muscles &&
            exerciseItem.muscles.map((muscle: string) => {
              return (
                <span key={`muscles-${muscle}-${exerciseItem.myExerciseID}`}>
                  {" "}
                  {muscle}{" "}
                </span>
              );
            })}
        </div>
        <Link
          key={`exercise-details-${exerciseItem.myExerciseID}`}
          to={
            {
              pathname: `/myexerciseDetails/${exerciseItem.myExerciseID}`,
              state: { prevPage: url },
            } as any
          }
        >
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
      </div>
    </li>
  );
};
