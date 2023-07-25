import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
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
  //

  const { exerciseItem, routineID } = props;

  //state to show or dissapear the settings that has options like Delete
  const [optionState, setOptionState] = React.useState<boolean>(false);

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
            <LinkToPage exerciseItem={exerciseItem} />
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

          <FontAwesomeIcon
            icon={faEllipsisVertical}
            onClick={() => setOptionState(!optionState)}
          />
        </div>
      </div>
      <form className="item-my-exercise__area2">
        <div className="item-my-exercise__area2__form__part1">
          <div className="item-my-exercise__area2__form__part1__setButtons">
            <label htmlFor="workout-type">Type</label>
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
            <label htmlFor="sets">Sets</label>

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
