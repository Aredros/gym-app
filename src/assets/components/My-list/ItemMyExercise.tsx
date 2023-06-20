import React, { useEffect, useState, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { ItemImage } from "../All-list/ItemImage";
import { ItemSet } from "./ItemSet";

interface exerciseIT {
  id: string;
  MyExerciseID: string;
  weekday: string;
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
}

interface SetsIT {
  completed: boolean;
  setN: number;
  reps: number;
  weight: number;
}

interface routineDetailsIT {
  sets: SetsIT[];
}

interface ItemMyExerciseIT {
  exerciseItem: exerciseIT;
  deleteMyExercise: (id: string) => void;
}

interface ContextIT {
  routineDetails: routineDetailsIT;
  setRoutineDetails: React.Dispatch<React.SetStateAction<routineDetailsIT>>;
  oldRoutineDetails: routineDetailsIT;
  setOldRoutineDetails: React.Dispatch<React.SetStateAction<routineDetailsIT>>;
}

export const ItemExerciseContext = React.createContext<ContextIT | undefined>(
  undefined
);

export const ItemMyExercise = (props: ItemMyExerciseIT) => {
  const { exerciseItem, deleteMyExercise } = props;

  // Generate a unique key for localStorage
  const localStorageKey = exerciseItem.MyExerciseID;

  //state to show or dissapear the settings
  const [optionState, setOptionState] = React.useState<boolean>(false);
  // Storing the data of the full routine
  const [routineDetails, setRoutineDetails] = useState<routineDetailsIT>({
    sets: [],
  });
  // Storing the data of the full routine
  const [oldRoutineDetails, setOldRoutineDetails] = useState<routineDetailsIT>({
    sets: [],
  });

  //every item for storing inside routines
  const [type, setType] = React.useState<string>("Other");

  //Get the localStorage data for the whole routine
  const localDataGetTemplate = (
    name: string,
    stateSetter: any,
    extraFunct?: string
  ) => {
    const setData = localStorage.getItem(`${localStorageKey}-${name}`);
    if (setData) {
      const parsedData = extraFunct
        ? (JSON as any)[extraFunct](setData)
        : setData;
      stateSetter(parsedData);
    }
  };

  useEffect(() => {
    //Get the whole OLD routine from localStorage
    const setOldRoutine = localStorage.getItem(
      `${localStorageKey}-old-routine`
    );
    if (setOldRoutine) {
      const parsedOldRoutine = JSON.parse(setOldRoutine);
      setOldRoutineDetails(parsedOldRoutine);
    }
    //Get the whole routine from localStorage
    const setRoutine = localStorage.getItem(`${localStorageKey}-routine`);
    if (setRoutine) {
      const parsedRoutine = JSON.parse(setRoutine);
      setRoutineDetails(parsedRoutine);
    }

    //get the Type data from localStorage
    localDataGetTemplate("type", setType);
  }, []);

  const handleType = (type: string) => {
    setType(type);
    localStorage.setItem(`${localStorageKey}-type`, type);
  };

  const createSet = () => {
    const updatedRoutine = { ...routineDetails };
    const setN = updatedRoutine.sets.length + 1;
    updatedRoutine.sets.push({ setN, reps: 0, weight: 0, completed: false });
    setRoutineDetails(updatedRoutine);
    //Update localStorage
    localStorage.setItem(
      `${localStorageKey}-routine`,
      JSON.stringify(routineDetails)
    );
  };

  const eraseSet = () => {
    const updatedRoutine = { ...routineDetails };
    updatedRoutine.sets.pop();
    setRoutineDetails(updatedRoutine);
    //Update localStorage
    localStorage.setItem(
      `${localStorageKey}-routine`,
      JSON.stringify(routineDetails)
    );
  };

  const completedCounter = routineDetails.sets.filter(
    (each) => each.completed === true
  ).length;

  return (
    <ItemExerciseContext.Provider
      value={{
        routineDetails,
        setRoutineDetails,
        oldRoutineDetails,
        setOldRoutineDetails,
      }}
    >
      <li
        className="item-my-exercise"
        key={`edit-my-item-${exerciseItem.id}-${exerciseItem.name}`}
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
              {exerciseItem.name} {completedCounter}/
              {routineDetails.sets.length}
            </h2>
          </div>
          <div className="item-my-exercise__area1__muscles">
            {exerciseItem.muscles.map((muscle) => {
              return (
                <span key={`muscles-${muscle}-${exerciseItem.id}`}>
                  {" "}
                  {muscle}{" "}
                </span>
              );
            })}
          </div>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            onClick={() => setOptionState(!optionState)}
          />
          <div
            className="item-my-exercise__area1__options"
            style={{ display: optionState ? "flex" : "none" }}
          >
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteMyExercise(exerciseItem.id)}
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
                value={type}
                onChange={(e) => handleType(e.target.value)}
              >
                <option value="Other">Other</option>
                <option value="RPT">RPT</option>
                <option value="KRP">KRP</option>
                <option value="KDT">KDT</option>
                <option value="Stretch">Stretch</option>
              </select>
            </div>
            <div className="item-my-exercise__area2__form__part1__setButtons">
              <label htmlFor="sets">Sets</label>
              <button type="button" onClick={createSet}>
                +
              </button>
              <button type="button" onClick={eraseSet}>
                -
              </button>
            </div>
          </div>
          <div className="item-my-exercise__area2__form__part2">
            {routineDetails.sets.map((each, index) => (
              <ItemSet
                item={each}
                keyCode={`item-set-${index}-${exerciseItem.id}`}
                index={index}
                localStorageKey={localStorageKey}
              />
            ))}
          </div>
        </form>
      </li>
    </ItemExerciseContext.Provider>
  );
};
