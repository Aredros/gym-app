import React, { useContext } from "react";
import { ItemExerciseContext } from "./ItemMyExercise";

interface SetsIT {
  completed: boolean;
  setN: number;
  reps: number;
  weight: number;
}

interface routineDetailsIT {
  sets: SetsIT[];
}

interface ItemSetIT {
  localStorageKey: string;
  item: SetsIT;
  keyCode: string;
  index: number;
}

interface RoutineContextData {
  routineDetails: any; // Define the appropriate type for routineDetails
  setRoutineDetails: React.Dispatch<React.SetStateAction<any>>; // Define the appropriate type for setRoutineDetails
  oldRoutineDetails: any; // Define the appropriate type for oldRoutineDetails
  setOldRoutineDetails: React.Dispatch<React.SetStateAction<any>>; // Define the appropriate type for setOldRoutineDetails
}

export const ItemSet = (props: ItemSetIT) => {
  const {
    routineDetails,
    setRoutineDetails,
    oldRoutineDetails,
    setOldRoutineDetails,
  } = useContext(ItemExerciseContext) || ({} as RoutineContextData);

  const { item, keyCode, index, localStorageKey } = props;

  const localSaveTemplate = localStorage.setItem(
    `${localStorageKey}-routine`,
    JSON.stringify(routineDetails)
  );

  const handleReps = (index: number, repetitions: number) => {
    const updatedRoutine = { ...routineDetails };
    updatedRoutine.sets[index].reps = repetitions;
    setRoutineDetails(updatedRoutine);
    //Update localStorage
    localSaveTemplate;
  };

  const handleWeights = (index: number, weightupd: number) => {
    const updatedRoutine = { ...routineDetails };
    updatedRoutine.sets[index].weight = weightupd;
    setRoutineDetails(updatedRoutine);
    //Update localStorage
    localSaveTemplate;
  };

  //handleCheckbox and initializes the old routine getter
  const handleCheckBox = (setNumber: number) => {
    const updatedSets = routineDetails.sets.map((elementMap: SetsIT) => {
      if (elementMap.setN === setNumber) {
        return { ...elementMap, completed: !elementMap.completed };
      }
      return elementMap;
    });
    const updatedRoutine: routineDetailsIT = {
      sets: updatedSets,
    };
    setRoutineDetails(updatedRoutine);
    // Update localStorage
    localSaveTemplate;
    //update old routine
    if (!item.completed) {
      const filteredOldRoutine = oldRoutineDetails.sets.filter(
        (item: any) => item.setN !== setNumber
      );
      const updatedOldRoutine = {
        ...oldRoutineDetails,
        sets: [
          ...filteredOldRoutine,
          {
            setN: setNumber,
            reps: item.reps,
            weight: item.weight,
            completed: true,
          },
        ],
      };
      setOldRoutineDetails(updatedOldRoutine);
      localStorage.setItem(
        `${localStorageKey}-old-routine`,
        JSON.stringify(routineDetails)
      );
    }
  };

  return (
    <div key={keyCode} className="item-my-exercise__area2__form__part2__set">
      <input
        type="checkbox"
        name="isCompleted"
        id="isCompleted"
        checked={item.completed ? true : false}
        onChange={() => handleCheckBox(item.setN)}
      />
      <h4>SET:{index + 1}</h4>
      <div className="mesurer">
        <div className="mesurer__compare-old-new">
          <p>
            {oldRoutineDetails.sets
              .filter((item: any) => item.setN === index + 1)
              .map((item: any) => item.reps)}
          </p>
          <input
            type="number"
            name="reps"
            id="reps"
            value={item.reps}
            onChange={(e) => handleReps(index, parseInt(e.target.value, 10))}
          />
        </div>
        <label htmlFor="reps">Reps</label>
      </div>
      <div className="mesurer">
        <div className="mesurer__compare-old-new">
          <p>
            {oldRoutineDetails.sets
              .filter((item: any) => item.setN === index + 1)
              .map((item: any) => item.weight)}
          </p>
          <input
            type="number"
            name="weight"
            id="weight"
            value={item.weight}
            onChange={(e) => handleWeights(index, parseInt(e.target.value, 10))}
          />
        </div>
        <label htmlFor="weight">Kgs</label>
      </div>
    </div>
  );
};
