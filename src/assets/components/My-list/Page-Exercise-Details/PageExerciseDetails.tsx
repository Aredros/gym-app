import React, { useContext, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { RoutineContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEdit } from "@fortawesome/free-solid-svg-icons";
import { CreateSetButton } from "../RoutinePage/item-myExercise/CreateSetButton";
import { DeleteSetButton } from "../RoutinePage/item-myExercise/DeleteSetButton";
import { ItemSet } from "../RoutinePage/item-myExercise/ItemSet";
import { DeleteMyItemButton } from "../RoutinePage/item-myExercise/DeleteMyItemButton";
import StretchImg from "../../../../stretching.png";

interface Routines {
  routineID: string;
  isEditing: boolean;
  routineName: string;
  routineImage: string;
  routineCompletion: number[];
  routineExercises: IExerciseInfo[];
}

interface IExerciseInfo {
  idExercise: string;
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

export const PageExerciseDetails = () => {
  const {
    exerciseList = [],
    myRoutines = [] as Routines[],
    setMyRoutines = () => {},
  } = useContext(RoutineContext) || {}; //getting the colors from the context

  // Access the URL parameter using useParams hook
  const { myExerciseID } = useParams();

  // Initialize ExerciseFromRoutine variable to undefined
  let ExerciseFromRoutine: IExerciseInfo | undefined;

  // Iterate through all routines and exercises to find the matching exercise
  myRoutines.forEach((routine) => {
    routine.routineExercises.forEach((exercise) => {
      if (exercise.myExerciseID === myExerciseID) {
        ExerciseFromRoutine = exercise;
      }
    });
  });

  //Check if OBJECTIVE of the exercise is being edited or not
  const [editObjective, setEditObjective] = useState(false);
  //The objective Text used to make the replacing of the REAL state in the APP posible
  const [objectiveTextState, setObjectiveTextState] = useState(
    ExerciseFromRoutine?.objective
  );

  const handleObjective = () => {
    setMyRoutines((prevRoutines: Routines[]) => {
      const updatedRoutines = prevRoutines.map((routine) => {
        if (routine.routineID === ExerciseFromRoutine?.routine) {
          const updatedExercises = routine.routineExercises.map((exercise) => {
            if (exercise.myExerciseID === ExerciseFromRoutine?.myExerciseID) {
              return {
                ...exercise,
                objective: objectiveTextState,
              } as IExerciseInfo;
            }
            return exercise;
          });
          return { ...routine, routineExercises: updatedExercises } as Routines;
        }
        return routine;
      });
      return updatedRoutines;
    });
    setEditObjective(false);
  };

  // Update the type in the corresponding exerciseItem from myRoutines
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;

    // Update the type in the corresponding exerciseItem from myRoutines
    setMyRoutines((prevRoutines) => {
      const updatedRoutines = prevRoutines.map((routine) => {
        if (routine.routineID === ExerciseFromRoutine?.routine) {
          const updatedExercises = routine.routineExercises.map((exercise) => {
            if (exercise.myExerciseID === ExerciseFromRoutine?.myExerciseID) {
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

  const setsOFsameExercise = ExerciseFromRoutine?.sets || []; // Assuming 'sets' is an array of sets in IExerciseInfo

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <div className="main-exercises">
          <div className="PageExerciseDetails-header">
            <FontAwesomeIcon icon={faArrowLeft} onClick={goBack} />
            {ExerciseFromRoutine && <h2>{ExerciseFromRoutine.name}</h2>}
          </div>

          <div className="page-exercise">
            {/* In area 2 we will explore the GENERAL details of the exercise */}
            <div className="page-exercise__area1">
              <div className="page-exercise__area1__image">
                <img
                  src={
                    ExerciseFromRoutine?.linkImage === ""
                      ? StretchImg
                      : ExerciseFromRoutine?.linkImage
                  }
                  alt={ExerciseFromRoutine?.name}
                />
              </div>
              <div className="page-exercise__area1__general-details">
                <div className="details-muscle">
                  {" "}
                  {ExerciseFromRoutine?.muscles.map((muscle) => (
                    <p key={muscle}>{muscle}</p>
                  ))}
                </div>

                <p className="details-description">
                  {exerciseList.map((exercise) => {
                    if (exercise.id === ExerciseFromRoutine?.idExercise) {
                      return exercise.details;
                    }
                  })}
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
                      ExerciseFromRoutine?.myExerciseID && (
                        <>
                          <CreateSetButton
                            exerciseID={ExerciseFromRoutine.myExerciseID}
                            routineID={ExerciseFromRoutine.routine}
                          />
                          <DeleteSetButton
                            exerciseID={ExerciseFromRoutine.myExerciseID}
                            routineID={ExerciseFromRoutine.routine}
                            exerciseItem={ExerciseFromRoutine}
                          />
                        </>
                      )}
                  </div>
                </div>
                <div className="page-exercise__area2__sets__sets">
                  {ExerciseFromRoutine?.routine &&
                    ExerciseFromRoutine?.myExerciseID &&
                    setsOFsameExercise?.map((each, index) => (
                      <ItemSet
                        key={`item-set-${index}-${ExerciseFromRoutine?.myExerciseID}`}
                        item={each}
                        type={ExerciseFromRoutine?.type || ""}
                        index={index}
                        routineID={ExerciseFromRoutine?.routine || ""}
                        exerciseID={ExerciseFromRoutine?.myExerciseID || ""}
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
