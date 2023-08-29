import React, { useContext, useEffect } from "react";
import { RoutineContext } from "../../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../../../config/firebase";
import { updateDoc, where, getDoc, doc } from "firebase/firestore";

interface ITroutineSets {
  ExerciseName: string;
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

interface ItemSetIT {
  type: string;
  item: ITset;
  index: number;
  routineID: string;
  exerciseID: string;
}

export const ItemSet = (props: ItemSetIT) => {
  const {
    myRoutines = [],
    setMyRoutines = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {}; //getting the colors from the context
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
              if (exercise.individualMyExerciseID === exerciseID) {
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

  const handleCounter = async (amount: number, variable: string) => {
    const updatedSets = myRoutines
      .find((routine) => routine.routineID === routineID)
      ?.routineExercises.find(
        (exercise) => exercise.individualMyExerciseID === exerciseID
      )
      ?.sets.map((set, i) => {
        if (i === index) {
          return { ...set, [variable]: amount };
        }
        return set;
      });
    if (updatedSets) {
      updateExerciseSets(updatedSets);

      // Update Firebase if connected
      if (isLoggedIn) {
        try {
          const routineExerciseDocRef = doc(
            db,
            "myExercises",
            `routine-${routineID}`
          );
          const routineExerciseDoc = await getDoc(routineExerciseDocRef);

          if (routineExerciseDoc.exists()) {
            const routineExercisesData = routineExerciseDoc.data();

            const updatedRoutineExercises =
              routineExercisesData.routineExercises.map(
                (exercise: ITroutineSets) => {
                  if (exercise.individualMyExerciseID === exerciseID) {
                    return {
                      ...exercise,
                      sets: updatedSets,
                    };
                  }
                  return exercise;
                }
              );

            await updateDoc(routineExerciseDocRef, {
              routineExercises: updatedRoutineExercises,
            });
            console.log("Exercise sets updated in Firebase");
          }
        } catch (error) {
          console.error("Error updating exercise sets:", error);
        }
      }
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = e.target;
    const updatedSets = myRoutines.map((routine) => {
      if (routine.routineID === routineID) {
        return {
          ...routine,
          routineExercises: routine.routineExercises.map((exercise) => {
            if (exercise.individualMyExerciseID === exerciseID) {
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

    // Update Firebase if connected
    if (isLoggedIn) {
      try {
        const routineExerciseDocRef = doc(
          db,
          "myExercises",
          `routine-${routineID}`
        );
        const routineExerciseDoc = await getDoc(routineExerciseDocRef);

        if (routineExerciseDoc.exists()) {
          const routineExercisesData = routineExerciseDoc.data();

          const updatedRoutineExercises =
            routineExercisesData.routineExercises.map(
              (exercise: ITroutineSets) => {
                if (exercise.individualMyExerciseID === exerciseID) {
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
              }
            );

          await updateDoc(routineExerciseDocRef, {
            routineExercises: updatedRoutineExercises,
          });
          console.log("Exercise sets updated in Firebase");
        }
      } catch (error) {
        console.error("Error updating exercise sets:", error);
      }
    }
  };

  // Save updated exercises and routines to localStorage
  useEffect(() => {
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

      {(type === "KDT" || type === "RPT" || type === "KRP") && (
        <div className="mesurer">
          <div className="mesurer__compare-old-new">
            <input
              type="number"
              inputMode="numeric"
              name="reps"
              id="reps"
              value={item.reps}
              onChange={(e) =>
                handleCounter(parseInt(e.target.value, 10), "reps")
              }
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
              inputMode="numeric"
              name="time"
              id="time"
              value={item.time}
              onChange={(e) =>
                handleCounter(parseInt(e.target.value, 10), "time")
              }
            />
          </div>
          <label htmlFor="time">
            <FontAwesomeIcon icon={faClock} />
          </label>
        </div>
      )}
      {type === "Cardio" && (
        <div className="mesurer">
          <div className="mesurer__compare-old-new">
            <input
              type="number"
              inputMode="numeric"
              name="distance"
              id="distance"
              value={item.distance}
              onChange={(e) =>
                handleCounter(parseInt(e.target.value, 10), "distance")
              }
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
              inputMode="numeric"
              name="weight"
              id="weight"
              value={item.weight}
              onChange={(e) =>
                handleCounter(parseInt(e.target.value, 10), "weight")
              }
            />
          </div>
          <label htmlFor="weight">
            <FontAwesomeIcon icon={faWeightHanging} />
          </label>
        </div>
      )}
    </div>
  );
};
