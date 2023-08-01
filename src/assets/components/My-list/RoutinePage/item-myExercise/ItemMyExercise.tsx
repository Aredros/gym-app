import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisVertical, faEdit } from "@fortawesome/free-solid-svg-icons";
import { ItemImage } from "../../../All-list/Item-exercise/ItemImage";
import { ItemSet } from "./ItemSet";
import { CreateSetButton } from "./CreateSetButton";
import { DeleteSetButton } from "./DeleteSetButton";
import { DeleteMyItemButton } from "./DeleteMyItemButton";
import { RoutineContext } from "../../../../../App";
import { LinkToPage } from "./LinkToPage";

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

  const setsOFsameExercise = exerciseItem?.sets;

  // Update the type in the corresponding exerciseItem from myRoutines
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;

    // Update the type in the corresponding exerciseItem from myRoutines
    setMyRoutines((prevRoutines) => {
      const updatedRoutines = prevRoutines.map((routine) => {
        if (routine.routineID === routineID) {
          const updatedExercises = routine.routineExercises.map((exercise) => {
            if (exercise.myExerciseID === exerciseItem.myExerciseID) {
              return { ...exercise, type: newType };
            }
            return exercise;
          });
          return { ...routine, routineExercises: updatedExercises };
        }
        return routine;
      });
      return updatedRoutines;
    });
  };

  const handleObjective = () => {
    // Update the type in the corresponding exerciseItem from myRoutines
    setMyRoutines((prevRoutines) => {
      const updatedRoutines = prevRoutines.map((routine) => {
        if (routine.routineID === routineID) {
          const updatedExercises = routine.routineExercises.map((exercise) => {
            if (exercise.myExerciseID === exerciseItem.myExerciseID) {
              return { ...exercise, objective: objectiveTextState };
            }
            return exercise;
          });
          return { ...routine, routineExercises: updatedExercises };
        }
        return routine;
      });
      return updatedRoutines;
    });
    setEditObjective(false);
  };

  //Get previous objective so it can be edited
  const prevObj = exerciseItem.objective;

  useEffect(() => {
    // Update localStorage whenever routines change
    localStorage.setItem("todosLocal", JSON.stringify("myRoutines"));
  }, [myRoutines]);

  return (
    <li
      className="item-my-exercise"
      key={`edit-my-item-${exerciseItem.myExerciseID}-${exerciseItem.name}`}
    >
      <div className="item-my-exercise__area1">
        <div className="item-my-exercise__area1__textNimage">
          {exerciseItem.linkImage && (
            <ItemImage
              typeClass={"item-my-exercise"}
              exerciseItem={exerciseItem}
            />
          )}
          <h2>
            {exerciseItem.name} {completedCounter}/{allSets}{" "}
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
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          onClick={() => setOptionState((prevState) => !prevState)}
        />
        <div
          className="item-my-exercise__area1__options"
          style={{ display: optionState ? "flex" : "none" }}
        >
          <DeleteMyItemButton
            exerciseItem={exerciseItem}
            routineID={routineID}
          />
          <LinkToPage exerciseItem={exerciseItem} />
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            onClick={() => setOptionState(!optionState)}
          />
        </div>
      </div>
      <form className="item-my-exercise__area2">
        <div className="item-my-exercise__area2__form__part0">
          {editObjective ? (
            <>
              <input
                type="text"
                value={objectiveTextState}
                onChange={(e) => setObjectiveTextState(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleObjective()}
              />
            </>
          ) : exerciseItem.objective !== "" ? (
            <>
              {" "}
              <p>
                <b>Objective:</b> {exerciseItem.objective}{" "}
              </p>{" "}
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => setEditObjective(!editObjective)}
              />
            </>
          ) : (
            <p>
              <b>Objective:</b> No objective set...{" "}
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => setEditObjective(!editObjective)}
              />
            </p>
          )}
        </div>
        <div className="item-my-exercise__area2__form__part1">
          <div className="item-my-exercise__area2__form__part1__setButtons">
            <select
              name="workout-type"
              id="workout-type"
              value={exerciseItem.type}
              onChange={handleTypeChange}
            >
              <option value="Cardio">Cardio</option>
              <option value="RPT">RPT</option>
              <option value="KRP">KRP</option>
              <option value="KDT">KDT</option>
              <option value="Stretch">Stretch</option>
            </select>
          </div>
          <div className="item-my-exercise__area2__form__part1__setButtons">
            <CreateSetButton
              exerciseID={exerciseItem.myExerciseID}
              routineID={routineID}
            />
            <DeleteSetButton
              exerciseID={exerciseItem.myExerciseID}
              routineID={routineID}
              exerciseItem={exerciseItem}
            />
          </div>
        </div>
        <div className="item-my-exercise__area2__form__part2">
          {setsOFsameExercise.map((each, index) => (
            <ItemSet
              key={`item-set-${index}-${exerciseItem.myExerciseID}`}
              item={each}
              type={exerciseItem.type}
              index={index}
              routineID={exerciseItem.routine}
              exerciseID={exerciseItem.myExerciseID}
            />
          ))}
        </div>
        {/* <button type="button" onClick={() => handleClickCounterSaver()}>
          +
        </button> */}
      </form>
    </li>
  );
};
