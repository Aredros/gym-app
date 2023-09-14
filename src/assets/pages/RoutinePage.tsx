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
import moment from "moment";

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
  routineName: string;
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

  const [isEditing, setIsEditing] = useState(false);
  const [updatedDoneActivitiesState, setUpdatedDoneActivitiesState] = useState<
    doneDataDetails[]
  >([]);

  const validRoutineID = routineID ?? "";
  const TheRoutine = myRoutines?.find(
    (routine) => routine.routineID === validRoutineID
  );

  const [routineObjectiveText, setRoutineObjectiveText] = useState(
    TheRoutine?.routineDetails
  );

  const startRoutineHandler = async () => {
    try {
      console.log("Start Routine Clicked");
      updateDoneActivities();
    } catch (error) {
      console.log(`error while saving routine` + error);
    }
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
    const todayDateString = moment().format("YYYY-MM-DD");
    return {
      date: todayDateString,
      id: uuidv4(),
      doneExerciseID: exercise.individualMyExerciseID,
      routineID: validRoutineID,
      routineName: TheRoutine?.routineName || "",
      totalSets: exercise.sets.length,
      completedSets: exercise.sets.filter((set) => set.setCompleted).length,
      creatorDoneData: auth.currentUser?.email || "",
    };
  };

  const updateDoneActivities = async () => {
    const todayDateString = moment().format("YYYY-MM-DD");

    // Filter out activities for previous dates
    const currentDayActivities = doneActivities.filter(
      (activity) => activity.date === todayDateString
    );

    // Update only the activities for the current day
    const updatedCurrentDayActivities = currentDayActivities.map((activity) => {
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
    });

    // Combine the updated current day activities with activities from previous days
    const updatedActivities = doneActivities.map((activity) => {
      if (activity.date === todayDateString) {
        return updatedCurrentDayActivities.find(
          (updatedActivity) => updatedActivity?.id === activity.id
        );
      }
      return activity;
    });

    let updatedDoneActivities = updatedActivities.filter(
      (activity) => activity !== undefined
    ) as doneDataDetails[]; // Filter out undefined items and cast to the correct type

    // Create a set of exercise IDs for which we already have activities for today
    const exerciseIDsWithActivities = new Set(
      updatedDoneActivities
        .filter(
          (activity) =>
            activity.routineID === validRoutineID &&
            activity.date === todayDateString
        )
        .map((activity) => activity.doneExerciseID)
    );

    // Iterate through routineExercises and create/update activities
    for (const exercise of TheRoutine?.routineExercises || []) {
      // Check if there is already an activity for this exercise for today
      const existingActivity = updatedDoneActivities.find(
        (activity) =>
          activity?.doneExerciseID === exercise.individualMyExerciseID &&
          activity?.date === todayDateString
      );

      if (!existingActivity) {
        // Create a new activity if it doesn't exist
        updatedDoneActivities.push(createNewActivity(exercise));
      } else {
        // Update the existing activity if it exists
        const updatedActivity = updateExistingActivity(
          existingActivity,
          exercise
        );

        // Replace the existing activity in the array with the updated one
        const index = updatedDoneActivities.findIndex(
          (activity) => activity.id === updatedActivity.id
        );

        if (index !== -1) {
          updatedDoneActivities[index] = updatedActivity;
        }
      }

      // Add the exercise's ID to the set of exercise IDs with activities
      exerciseIDsWithActivities.add(exercise.individualMyExerciseID);
    }

    // Remove activities for exercises that are no longer part of the routine
    updatedDoneActivities = updatedDoneActivities.filter((activity) => {
      return (
        activity.routineID === validRoutineID &&
        (activity.date !== todayDateString ||
          exerciseIDsWithActivities.has(activity.doneExerciseID))
      );
    });

    setDoneActivities(updatedDoneActivities);

    if (isLoggedIn) {
      try {
        // Create a new Firestore collection reference
        const gymCollectionRef = collection(db, "doneActivities");

        for (const activity of updatedDoneActivities) {
          // Construct the document ID with the desired format
          const documentId = `doneData-${activity?.doneExerciseID}`;

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
