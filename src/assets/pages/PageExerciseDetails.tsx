import React, { useContext, useState } from "react";
import "../../assets/Styles/pages/all-pages.scss";
import { useParams, useNavigate } from "react-router-dom";
import { RoutineContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEdit } from "@fortawesome/free-solid-svg-icons";
import { CreateSetButton } from "../components/My-list/RoutinePage/item-myExercise/CreateSetButton";
import { DeleteSetButton } from "../components/My-list/RoutinePage/item-myExercise/DeleteSetButton";
import { ItemSet } from "../components/My-list/RoutinePage/item-myExercise/ItemSet";
import { DeleteMyItemButton } from "../components/My-list/RoutinePage/item-myExercise/DeleteMyItemButton";
import { auth, db } from "../../config/firebase";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import StretchImg from "../../stretching.png";

interface AllListExercise {
  id: string;
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
  details: string;
  userCreator: string;
}

interface Routines {
  routineID: string;
  isEditing: boolean;
  routineName: string;
  routineImage: string;
  routineCompletion: number[];
  routineExercises: ITroutineSets[];
  routineCreator: string;
}

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

export const PageExerciseDetails = () => {
  const {
    exerciseList = [] as AllListExercise[],
    myRoutines = [] as Routines[],
    setMyRoutines = () => {},
  } = useContext(RoutineContext) || {};

  // Access the URL parameter using useParams hook
  const { myExerciseID } = useParams();

  // Initialize ExerciseFromRoutine variable to undefined
  let ExerciseFromRoutine: ITroutineSets | undefined;

  // Iterate through all routines and exercises to find the matching exercise
  if (myRoutines) {
    myRoutines.forEach((routine) => {
      routine.routineExercises?.forEach((exercise) => {
        if (exercise.individualMyExerciseID === myExerciseID) {
          ExerciseFromRoutine = exercise;
        }
      });
    });
  }

  const GeneralExerciseInfo: AllListExercise | undefined = exerciseList.find(
    (exercise) => exercise.id === ExerciseFromRoutine?.allExercisesUniqueID
  );

  //Check if OBJECTIVE of the exercise is being edited or not
  const [editObjective, setEditObjective] = useState(false);
  //The objective Text used to make the replacing of the REAL state in the APP posible
  const [objectiveTextState, setObjectiveTextState] = useState(
    ExerciseFromRoutine?.objective
  );

  const handleObjective = async () => {
    // Update local state
    const updatedRoutines = myRoutines.map((routine) => {
      if (routine.routineID === ExerciseFromRoutine?.routine) {
        const updatedExercises = routine.routineExercises.map((exercise) => {
          if (
            exercise.individualMyExerciseID ===
            ExerciseFromRoutine?.individualMyExerciseID
          ) {
            return {
              ...exercise,
              objective: objectiveTextState,
            } as ITroutineSets;
          }
          return exercise;
        });
        return { ...routine, routineExercises: updatedExercises } as Routines;
      }
      return routine;
    });

    setMyRoutines(updatedRoutines);
    setEditObjective(false);

    if (ExerciseFromRoutine) {
      try {
        // Create a new Firestore document reference for the routine
        const routineDocRef = doc(
          db,
          "myExercises",
          `routine-${ExerciseFromRoutine.routine}`
        );

        // Get the routine document from Firestore
        const routineDoc = await getDoc(routineDocRef);

        if (routineDoc.exists()) {
          // Update the routineExercises array with the updated exercise
          const updatedRoutineExercises = routineDoc
            .data()
            .routineExercises.map((exercise: ITroutineSets) => {
              if (
                exercise.individualMyExerciseID ===
                ExerciseFromRoutine?.individualMyExerciseID
              ) {
                return {
                  ...exercise,
                  objective: objectiveTextState,
                };
              }
              return exercise;
            });

          // Update the routineExercises field in the routine document
          await updateDoc(routineDocRef, {
            routineExercises: updatedRoutineExercises,
          });

          console.log("Exercise objective updated in Firebase");
        }
      } catch (err) {
        console.log("Error updating exercise objective in Firebase:", err);
      }
    }
  };

  // Update the type in the corresponding exerciseItem from myRoutines
  const handleTypeChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;

    const updatedRoutines = myRoutines.map((routine) => {
      if (routine.routineID === ExerciseFromRoutine?.routine) {
        const updatedExercises = routine.routineExercises.map((exercise) => {
          if (
            exercise.individualMyExerciseID ===
            ExerciseFromRoutine?.individualMyExerciseID
          ) {
            return { ...exercise, type: newType };
          }
          return exercise;
        });
        return { ...routine, routineExercises: updatedExercises };
      }
      return routine;
    });

    // Update the type in the corresponding exerciseItem from myRoutines
    setMyRoutines(updatedRoutines);

    if (ExerciseFromRoutine) {
      try {
        // Create a new Firestore document reference for the routine
        const routineDocRef = doc(
          db,
          "myExercises",
          `routine-${ExerciseFromRoutine.routine}`
        );

        // Get the routine document from Firestore
        const routineDoc = await getDoc(routineDocRef);

        if (routineDoc.exists()) {
          // Update the routineExercises array with the updated exercise type
          const updatedRoutineExercises = routineDoc
            .data()
            .routineExercises.map((exercise: ITroutineSets) => {
              if (
                exercise.individualMyExerciseID ===
                ExerciseFromRoutine?.individualMyExerciseID
              ) {
                return {
                  ...exercise,
                  type: newType,
                };
              }
              return exercise;
            });

          // Update the routineExercises field in the routine document
          await updateDoc(routineDocRef, {
            routineExercises: updatedRoutineExercises,
          });

          console.log("Exercise type updated in Firebase");
        }
      } catch (err) {
        console.log("Error updating exercise type in Firebase:", err);
      }
    }
  };

  const setsOFsameExercise = ExerciseFromRoutine?.sets || []; // Assuming 'sets' is an array of sets in IExerciseInfo

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="main-columns-divide__main-area">
        <div className="main-exercises">
          <div className="PageExerciseDetails-header">
            <FontAwesomeIcon icon={faArrowLeft} onClick={goBack} />
            {GeneralExerciseInfo && <h2>{GeneralExerciseInfo.name}</h2>}
          </div>

          <div className="page-exercise">
            {/* In area 2 we will explore the GENERAL details of the exercise */}
            <div className="page-exercise__area1">
              <div className="page-exercise__area1__image">
                <img
                  src={
                    GeneralExerciseInfo?.linkImage === ""
                      ? StretchImg
                      : GeneralExerciseInfo?.linkImage
                  }
                  alt={GeneralExerciseInfo?.name}
                />
              </div>
              <div className="page-exercise__area1__general-details">
                <div className="details-muscle">
                  {" "}
                  {GeneralExerciseInfo?.muscles.map((muscle) => (
                    <p key={muscle}>{muscle}</p>
                  ))}
                </div>

                <p className="details-description">
                  {GeneralExerciseInfo?.details}
                </p>
              </div>
            </div>
            {/* In area 2 we will explore the routine part of the exercise */}
            <form className="page-exercise__area2">
              {/* Objective OR Objective edition input */}
              <div className="page-exercise__area2__objective">
                {editObjective ? (
                  <>
                    <textarea
                      value={objectiveTextState}
                      onChange={(e) => setObjectiveTextState(e.target.value)}
                    ></textarea>
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => handleObjective()}
                    />
                  </>
                ) : ExerciseFromRoutine?.objective !== "" ? (
                  <>
                    {" "}
                    <p>
                      <b>Objective:</b> {ExerciseFromRoutine?.objective}{" "}
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
              {/* SETS */}
              <div className="page-exercise__area2__sets">
                <div className="page-exercise__area2__sets__controls">
                  <div className="page-exercise__area2__sets__controls__selectType">
                    <select
                      name="workout-type"
                      id="workout-type"
                      value={ExerciseFromRoutine?.type}
                      onChange={handleTypeChange}
                    >
                      <option value="Cardio">Cardio</option>
                      <option value="RPT">RPT</option>
                      <option value="KRP">KRP</option>
                      <option value="KDT">KDT</option>
                      <option value="Stretch">Stretch</option>
                    </select>
                  </div>
                  <div className="page-exercise__area2__sets__controls__moreOrLess">
                    {ExerciseFromRoutine?.routine &&
                      ExerciseFromRoutine?.individualMyExerciseID && (
                        <>
                          <CreateSetButton
                            exerciseID={
                              ExerciseFromRoutine.individualMyExerciseID
                            }
                            routineID={ExerciseFromRoutine.routine}
                          />
                          <DeleteSetButton
                            exerciseID={
                              ExerciseFromRoutine.individualMyExerciseID
                            }
                            routineID={ExerciseFromRoutine.routine}
                          />
                        </>
                      )}
                  </div>
                </div>
                <div className="page-exercise__area2__sets__sets">
                  {ExerciseFromRoutine?.routine &&
                    ExerciseFromRoutine?.individualMyExerciseID &&
                    setsOFsameExercise?.map((each, index) => (
                      <ItemSet
                        key={`item-set-${index}-${ExerciseFromRoutine?.individualMyExerciseID}`}
                        item={each}
                        type={ExerciseFromRoutine?.type || ""}
                        index={index}
                        routineID={ExerciseFromRoutine?.routine || ""}
                        exerciseID={
                          ExerciseFromRoutine?.individualMyExerciseID || ""
                        }
                      />
                    ))}
                </div>
              </div>
            </form>
          </div>
          <DeleteMyItemButton
            exerciseItem={ExerciseFromRoutine}
            routineID={ExerciseFromRoutine?.routine || ""}
          />
        </div>
      </div>
    </>
  );
};
