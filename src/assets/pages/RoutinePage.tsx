import { useContext, useEffect, useState } from "react";
import "../../assets/Styles/pages/all-pages.scss";
import { useParams } from "react-router-dom";
import { ItemMyExercise } from "../components/My-list/RoutinePage/item-myExercise/ItemMyExercise";
import { RoutineContext } from "../../App";
import { DeleteRoutineButton } from "../components/My-list/RoutinePage/DeleteRoutineButton";
import { ProgressTracker } from "../components/My-list/RoutinePage/ProgressTracker";
import { v4 as uuidv4 } from "uuid";
import { TitleRoutinePage } from "../components/My-list/RoutinePage/TitlteRoutinePage";
import { auth, db } from "../../config/firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

interface ITroutineSets {
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

interface doneDataDetails {
  date: string;
  id: string;
  doneExerciseID: string;
  routineID: string;
  totalSets: number;
  completedSets: number;
  creatorDoneData: string;
}

export const RoutinePage = () => {
  const {
    myRoutines = [],
    setMyRoutines = () => {},
    doneActivities = [],
    setDoneActivities = () => {},
    isLoggedIn,
  } = useContext(RoutineContext) || {};

  const { routineID } = useParams<{ routineID?: string }>();

  const [activeDay, setActiveDay] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const validRoutineID = routineID ?? "";
  const TheRoutine = myRoutines?.find(
    (routine) => routine.routineID === validRoutineID
  );

  const [routineObjectiveText, setRoutineObjectiveText] = useState(
    TheRoutine?.routineDetails
  );

  const startRoutineHandler = () => {
    const todayDateString = new Date().toLocaleDateString();
    console.log("Start Routine Clicked");
    setActiveDay(todayDateString);
    updateDoneActivities();
  };

  //
  const updateExistingActivity = (
    activity: doneDataDetails,
    matchingExercise: ITroutineSets
  ) => {
    const completedSets = matchingExercise.sets.filter(
      (set) => set.setCompleted
    ).length;

    return {
      ...activity,
      totalSets: matchingExercise.sets.length,
      completedSets: completedSets,
    };
  };
  const createNewActivity = (exercise: ITroutineSets) => {
    const todayDateString = new Date().toLocaleDateString();
    return {
      date: todayDateString,
      id: uuidv4(),
      doneExerciseID: exercise.individualMyExerciseID,
      routineID: validRoutineID,
      totalSets: exercise.sets.length,
      completedSets: exercise.sets.filter((set) => set.setCompleted).length,
      creatorDoneData: auth.currentUser?.email || "",
    };
  };

  const updateDoneActivities = async () => {
    const todayDateString = new Date().toLocaleDateString();

    const updatedDoneActivities: doneDataDetails[] = doneActivities.map(
      (activity) => {
        if (activity.date !== todayDateString) {
          return activity;
        }
        const matchingExercise = TheRoutine?.routineExercises.find(
          (exercise) =>
            exercise.individualMyExerciseID === activity.doneExerciseID
        );
        if (
          matchingExercise &&
          activity.routineID === validRoutineID &&
          activity.date === todayDateString
        ) {
          return updateExistingActivity(activity, matchingExercise);
        }

        return activity;
      }
    );

    TheRoutine?.routineExercises.forEach((exercise) => {
      const existingActivity = updatedDoneActivities.find(
        (activity) =>
          activity.doneExerciseID === exercise.individualMyExerciseID &&
          activity.date === todayDateString
      );

      if (!existingActivity) {
        updatedDoneActivities.push(createNewActivity(exercise));
      }
    });

    setDoneActivities(updatedDoneActivities);

    if (isLoggedIn) {
      try {
        // Create a new Firestore collection reference
        const gymCollectionRef = collection(db, "doneActivities");

        for (const activity of updatedDoneActivities) {
          // Construct the document ID with the desired format
          const documentId = `doneData-${activity.doneExerciseID}`;

          // Create a reference to the document
          const exerciseDocRef = doc(gymCollectionRef, documentId);

          // Add the newTodo to Firestore
          await setDoc(exerciseDocRef, activity);
        }

        console.log("sending doneData to Firebase");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const updateObjective = async () => {
    const updatedList = myRoutines.map((routine) => {
      if (routine.routineID === validRoutineID) {
        return { ...routine, routineDetails: routineObjectiveText || "" };
      }
      return routine;
    });
    setMyRoutines(updatedList);
    if (isLoggedIn) {
      try {
        const gymCollectionRef = doc(
          db,
          "myRoutines",
          `routine-${validRoutineID}`
        );
        // Get the routine document from Firestore
        const routineDoc = await getDoc(gymCollectionRef);
        if (routineDoc.exists()) {
          await updateDoc(gymCollectionRef, {
            routineDetails: routineObjectiveText,
          });
          console.log("Routine Details Updated");
        }
      } catch (err) {
        console.log(`not edited` + err);
      }
    }
  };

  // const checkAndUpdateDoneActivities = () => {
  //   if (activeDay === new Date().toLocaleDateString()) {
  //     updateDoneActivities();
  //   }
  //   requestAnimationFrame(checkAndUpdateDoneActivities);
  // };
  //

  // useEffect(() => {
  //   checkAndUpdateDoneActivities();
  // }, [doneActivities, activeDay]);

  useEffect(() => {
    // Update localStorage whenever doneActivities change
    localStorage.setItem("localDoneActivities", JSON.stringify(doneActivities));
  }, [doneActivities]);
  useEffect(() => {
    // Update localStorage whenever doneActivities change
    localStorage.setItem("myRoutines", JSON.stringify(myRoutines));
  }, [myRoutines]);

  return (
    <div className="main-columns-divide__main-area">
      <div className="main-exercises">
        <div key={`key-${validRoutineID}`}>
          <TitleRoutinePage validRoutineID={validRoutineID} />
          <ProgressTracker routineID={validRoutineID} />
          <div className="start-routine-button">
            <button onClick={startRoutineHandler}>Save Routine</button>
            <p>
              If the routine has not been saved, then it wont be shown on past
              days
            </p>
            {isEditing ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <textarea
                  value={routineObjectiveText}
                  onChange={(e) => {
                    if (TheRoutine) {
                      setRoutineObjectiveText(e.target.value);
                    }
                  }}
                />
                <button
                  onClick={() => {
                    updateObjective();
                    setIsEditing(!isEditing);
                  }}
                >
                  Save Routine Details
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <p>{TheRoutine?.routineDetails}</p>{" "}
                <button onClick={() => setIsEditing(!isEditing)}>
                  Edit Routine Details
                </button>
              </div>
            )}
          </div>

          <ul className="all-exercises-list">
            {TheRoutine?.routineExercises.map((exercise: ITroutineSets) => (
              <ItemMyExercise
                key={exercise.individualMyExerciseID}
                routineID={validRoutineID}
                exerciseItem={exercise}
              />
            ))}
          </ul>
          <DeleteRoutineButton routineID={validRoutineID} />
        </div>
      </div>
    </div>
  );
};
