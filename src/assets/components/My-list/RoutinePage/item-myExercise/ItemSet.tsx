import React, { useContext, useEffect } from "react";
import { RoutineContext } from "../../../../../App";

interface ITset {
  setCompleted: boolean;
  reps: number;
  weight: number;
  distance: number;
  time: number;
}

interface ItemSetIT {
  type: string;
  item: ITset;
  index: number;
  routineID: string;
  exerciseID: string;
}

export const ItemSet = (props: ItemSetIT) => {
  const { myRoutines = [], setMyRoutines = () => {} } =
    useContext(RoutineContext) || {}; //getting the colors from the context
  //

  const { item, index, routineID, exerciseID, type } = props;

  // Helper function to update the sets of the selected exercise in the routine
  const updateExerciseSets = (updatedSets: ITset[]) => {
    setMyRoutines((prevMyRoutines) =>
      prevMyRoutines.map((routine) => {
        if (routine.routineID === routineID) {
          return {
            ...routine,
            routineExercises: routine.routineExercises.map((exercise) => {
              if (exercise.myExerciseID === exerciseID) {
                return {
                  ...exercise,
                  sets: updatedSets,
                };
              }
              return exercise;
            }),
          };
        }
        return routine;
      })
    );
  };

  const handleReps = (repetitions: number) => {
    const updatedSets = myRoutines
      .find((routine) => routine.routineID === routineID)
      ?.routineExercises.find(
        (exercise) => exercise.myExerciseID === exerciseID
      )
      ?.sets.map((set, i) => {
        if (i === index) {
          return { ...set, reps: repetitions };
        }
        return set;
      });
    if (updatedSets) {
      updateExerciseSets(updatedSets);
    }
  };

  const handleWeights = (weightupd: number) => {
    const updatedSets = myRoutines
      .find((routine) => routine.routineID === routineID)
      ?.routineExercises.find(
        (exercise) => exercise.myExerciseID === exerciseID
      )
      ?.sets.map((set, i) => {
        if (i === index) {
          return { ...set, weight: weightupd };
        }
        return set;
      });
    if (updatedSets) {
      updateExerciseSets(updatedSets);
    }
  };

  const handleTime = (timeupd: number) => {
    const updatedSets = myRoutines
      .find((routine) => routine.routineID === routineID)
      ?.routineExercises.find(
        (exercise) => exercise.myExerciseID === exerciseID
      )
      ?.sets.map((set, i) => {
        if (i === index) {
          return { ...set, time: timeupd };
        }
        return set;
      });
    if (updatedSets) {
      updateExerciseSets(updatedSets);
    }
  };

  const handleDist = (distupd: number) => {
    const updatedSets = myRoutines
      .find((routine) => routine.routineID === routineID)
      ?.routineExercises.find(
        (exercise) => exercise.myExerciseID === exerciseID
      )
      ?.sets.map((set, i) => {
        if (i === index) {
          return { ...set, distance: distupd };
        }
        return set;
      });
    if (updatedSets) {
      updateExerciseSets(updatedSets);
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const updatedSets = myRoutines.map((routine) => {
      if (routine.routineID === routineID) {
        return {
          ...routine,
          routineExercises: routine.routineExercises.map((exercise) => {
            if (exercise.myExerciseID === exerciseID) {
              return {
                ...exercise,
                sets: exercise.sets.map((set, i) => {
                  if (i === index) {
                    return { ...set, setCompleted: checked };
                  }
                  return set;
                }),
              };
            }
            return exercise;
          }),
        };
      }
      return routine;
    });

    setMyRoutines(updatedSets);
  };

  useEffect(() => {
    // Update localStorage whenever routines change
    localStorage.setItem("myRoutines", JSON.stringify(myRoutines));
  }, [myRoutines]);

  return (
    <div className="item-my-exercise__area2__form__part2__set">
      <input
        type="checkbox"
        name="isCompleted"
        id="isCompleted"
        checked={item.setCompleted}
        onChange={handleCheckboxChange} // Add onChange handler to handle checkbox changes
      />
      <h4>SET:{index + 1}</h4>
      {(type === "KDT" || type === "RPT" || type === "KRP") && (
        <div className="mesurer">
          <div className="mesurer__compare-old-new">
            <input
              type="number"
              name="reps"
              id="reps"
              value={item.reps}
              onChange={(e) => handleReps(parseInt(e.target.value, 10))}
            />
          </div>
          <label htmlFor="reps">Reps</label>
        </div>
      )}
      {(type === "Cardio" || type === "Stretch") && (
        <div className="mesurer">
          <div className="mesurer__compare-old-new">
            <input
              type="number"
              name="time"
              id="time"
              value={item.time}
              onChange={(e) => handleTime(parseInt(e.target.value, 10))}
            />
          </div>
          <label htmlFor="time">Time</label>
        </div>
      )}
      {type === "Cardio" && (
        <div className="mesurer">
          <div className="mesurer__compare-old-new">
            <input
              type="number"
              name="distance"
              id="distance"
              value={item.distance}
              onChange={(e) => handleDist(parseInt(e.target.value, 10))}
            />
          </div>
          <label htmlFor="distance">Km</label>
        </div>
      )}
      {(type === "KDT" || type === "RPT" || type === "KRP") && (
        <div className="mesurer">
          <div className="mesurer__compare-old-new">
            <input
              type="number"
              name="weight"
              id="weight"
              value={item.weight}
              onChange={(e) => handleWeights(parseInt(e.target.value, 10))}
            />
          </div>
          <label htmlFor="weight">Kgs</label>
        </div>
      )}
    </div>
  );
};
