import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

interface exerciseIT {
  id: string;
  MyExerciseID: string;
  weekday: string;
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
}

interface routineDetailsIT {
  exercise: string;
  type: string;
  sets: number;
  reps: number;
  weights: number;
}

interface ItemMyExerciseIT {
  exerciseItem: exerciseIT;
  deleteMyExercise: (id: string) => void;
}

export const ItemMyExercise = (props: ItemMyExerciseIT) => {
  const { exerciseItem, deleteMyExercise } = props;

  // Generate a unique key for localStorage
  const localStorageKey = exerciseItem.MyExerciseID;

  //state to show or dissapear the settings
  const [optionState, setOptionState] = React.useState<boolean>(false);
  //storing the data of the full routine
  const [routineDetails, setRoutineDetails] = useState<routineDetailsIT[]>([]);

  //every item for storing inside routines
  const [sets, setSets] = React.useState<number>(1);
  const [type, setType] = React.useState<string>("Other");
  const [reps, setReps] = React.useState<any[]>([]);
  const [weights, setWeights] = React.useState<any[]>([]);

  //Get the localStorage data for the whole routine
  useEffect(() => {
    const setData = localStorage.getItem(`${localStorageKey}-sets`);
    if (setData) {
      const parsedSet = parseInt(setData, 10);
      setSets(parsedSet);
    }
    const setTypeData = localStorage.getItem(`${localStorageKey}-type`);
    if (setTypeData) {
      setType(setTypeData);
    }
    const setDataReps = localStorage.getItem(`${localStorageKey}-reps`);
    if (setDataReps) {
      const parsedDataReps = JSON.parse(setDataReps);
      setReps(parsedDataReps);
    }

    const setDataWeights = localStorage.getItem(`${localStorageKey}-weights`);
    if (setDataWeights) {
      const parsedDataWeights = JSON.parse(setDataWeights);
      setWeights(parsedDataWeights);
    }

    const setDataRoutine = localStorage.getItem(`${localStorageKey}-routine`);
    if (setDataRoutine) {
      const parsedDataRoutine = JSON.parse(setDataRoutine);
      setRoutineDetails(parsedDataRoutine);
    }
  }, []);

  const handleSets = (sets: number) => {
    setSets(sets);
    localStorage.setItem(`${localStorageKey}-sets`, sets.toString());
  };

  const handleType = (type: string) => {
    setType(type);
    localStorage.setItem(`${localStorageKey}-type`, type);
  };

  const handleReps = (index: number, rep: number) => {
    const updatedReps = [...reps]; // Create a copy of the reps array
    updatedReps[index] = rep; // Update the value at the specified index
    setReps(updatedReps); // Update the state

    const updatedRoutine = routineDetails.map((item, i) => {
      if (i === index) {
        return { ...item, reps: rep };
      }
      return item;
    });

    setRoutineDetails(updatedRoutine);
    localStorage.setItem(
      `${localStorageKey}-routine`,
      JSON.stringify(updatedRoutine)
    );
  };

  const handleWeights = (index: number, weight: number) => {
    const updatedWeights = [...weights]; // Create a copy of the weights array
    updatedWeights[index] = weight; // Update the value at the specified index
    setWeights(updatedWeights); // Update the state

    const updatedRoutine = routineDetails.map((item, i) => {
      if (i === index) {
        return { ...item, weights: weight };
      }
      return item;
    });

    setRoutineDetails(updatedRoutine);
    localStorage.setItem(
      `${localStorageKey}-routine`,
      JSON.stringify(updatedRoutine)
    );
  };

  // Generate a unique key for each EditItemExercise component
  const editItemKey = `edit-my-item-${exerciseItem.id}-${exerciseItem.name}`;

  return (
    <li className="item-my-exercise" key={exerciseItem.id}>
      <div className="item-my-exercise__area1">
        <div className="item-my-exercise__area1__textNimage">
          {exerciseItem.linkImage && (
            <div
              className="item-my-exercise__image"
              onClick={() => window.open(exerciseItem.linkImage)}
            >
              <img src={exerciseItem.linkImage} alt={exerciseItem.name} />
            </div>
          )}
          <h2>{exerciseItem.name}</h2>
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
          <label htmlFor="sets">Sets</label>
          <select
            name="sets"
            id="sets"
            value={sets}
            onChange={(e) => handleSets(parseInt(e.target.value, 10))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="item-my-exercise__area2__form__part2">
          {Array.from({ length: sets }).map((_, index) => (
            <div
              key={editItemKey}
              className="item-my-exercise__area2__form__part2__set"
            >
              <input type="checkbox" name="isCompleted" id="isCompleted" />
              <h4>SET:{index + 1}</h4>
              <div>
                <input
                  type="number"
                  name="reps"
                  id="reps"
                  value={reps[index] || 0}
                  onChange={(e) =>
                    handleReps(index, parseInt(e.target.value, 10))
                  }
                />
                <label htmlFor="reps">Reps</label>
              </div>
              <div>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  value={weights[index] || 0}
                  onChange={(e) =>
                    handleWeights(index, parseInt(e.target.value, 10))
                  }
                />
                <label htmlFor="weight">Kgs</label>
              </div>
            </div>
          ))}
        </div>
      </form>
    </li>
  );
};
