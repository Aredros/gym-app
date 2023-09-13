import React, { useEffect, useState, createContext } from "react";
import { Auth } from "./assets/pages/auth";
import { auth, db } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import django from "./Djangocircle.png";
import "./assets/Styles/animations.scss";
import "./App.css";
import "./styles.scss";
import "./assets/Styles/components/Page-exercise-details.scss";
import "./assets/Styles/components/add-form-styles.scss";
import { Navigation } from "./assets/components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllExercises } from "./assets/pages/AllExercises";
import { MyExercises } from "./assets/pages/MyExercises";
import { PageExerciseDetails } from "./assets/pages/PageExerciseDetails";
import { RoutinePage } from "./assets/pages/RoutinePage";

// import addNotification from "react-push-notification";

interface Exercise {
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
  routineDetails: string;
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

interface GeneralContextFiles {
  exerciseList: Exercise[];
  setExerciseList: React.Dispatch<React.SetStateAction<Exercise[]>>;
  myRoutines: Routines[];
  setMyRoutines: React.Dispatch<React.SetStateAction<Routines[]>>;
  doneActivities: doneDataDetails[];
  setDoneActivities: React.Dispatch<React.SetStateAction<doneDataDetails[]>>;
  isLoggedIn: boolean;
}

//crearting context that will pass the colors and doneTodoList
export const RoutineContext = createContext<GeneralContextFiles | undefined>(
  undefined
);

function App() {
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //check if the user is logged in or not
  const [isAuthenticated, setIsAuthenticated] = useState(false); //check if it is an anonymous user or not
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const [myRoutines, setMyRoutines] = useState<Routines[]>([]);
  const [doneActivities, setDoneActivities] = React.useState<doneDataDetails[]>(
    []
  );

  //get all exercises stored into the localStorage
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    //Verifying if the user is Anon or not
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? !user.isAnonymous : false);
    });

    return () => {
      unsubscribe();
    };

    //empty array and local storage
    // localStorage.clear();
  }, []);

  // Save updated myRoutines to localStorage
  useEffect(() => {
    // Get ALL Exercises from Firestore //
    const getExerciseListDataFromDatabase = async () => {
      try {
        if (auth.currentUser) {
          // Get the current user's email
          const userEmail = auth.currentUser.email;
          // Create a query to fetch todos where the user is the same as the current user
          const q = query(
            collection(db, "allExercises"),
            where("userCreator", "==", userEmail),
            where("userCreator", "!=", "")
          );

          // Get the documents that match the query
          const querySnapshot = await getDocs(q);

          // Map the documents to an array of todos
          const typesFromDatabase: Exercise[] = [];
          const typeIds: Set<string> = new Set(); // Set to track unique todo IDs

          querySnapshot.docs.forEach((doc) => {
            const type = doc.data() as Exercise; // Cast the document data to ITodo
            if (!typeIds.has(type.id)) {
              // Check if the todo ID is already in the set
              typesFromDatabase.push(type);
              typeIds.add(type.id); // Add the todo ID to the set
            }
          });

          // Update the todos state with the retrieved todos
          setExerciseList(typesFromDatabase);
        }
      } catch (err) {
        console.log(err);
      }
    };
    //GET ALL MY ROUTINES FROM FIRESTORE //
    const getMyRoutinesDataFromDatabase = async () => {
      try {
        if (auth.currentUser) {
          // Get the current user's email
          const userEmail = auth.currentUser.email;
          // Create a query to fetch todos where the user is the same as the current user
          const q = query(
            collection(db, "myExercises"),
            where("routineCreator", "==", userEmail),
            where("routineCreator", "!=", "")
          );

          // Get the documents that match the query
          const querySnapshot = await getDocs(q);

          // Map the documents to an array of todos
          const routinesFromDatabase: Routines[] = [];
          const typeIds: Set<string> = new Set(); // Set to track unique todo IDs

          querySnapshot.docs.forEach((doc) => {
            const rout = doc.data() as Routines; // Cast the document data to ITodo
            if (!typeIds.has(rout.routineID)) {
              // Check if the todo ID is already in the set
              routinesFromDatabase.push(rout);
              typeIds.add(rout.routineID); // Add the todo ID to the set
            }
          });

          // Update the todos state with the retrieved todos
          setMyRoutines(routinesFromDatabase);
        }
      } catch (err) {
        console.log(err);
      }
    };
    //GET ALL MY ROUTINES FROM FIRESTORE //
    const getDoneActivitiesDataFromDatabase = async () => {
      try {
        if (auth.currentUser) {
          // Get the current user's email
          const userEmail = auth.currentUser.email;
          // Create a query to fetch todos where the user is the same as the current user
          const q = query(
            collection(db, "doneActivities"),
            where("creatorDoneData", "==", userEmail),
            where("creatorDoneData", "!=", "")
          );

          // Get the documents that match the query
          const querySnapshot = await getDocs(q);

          // Map the documents to an array of todos
          const doneActFromDatabase: doneDataDetails[] = [];
          const typeIds: Set<string> = new Set(); // Set to track unique todo IDs

          querySnapshot.docs.forEach((doc) => {
            const doneAc = doc.data() as doneDataDetails; // Cast the document data to ITodo
            if (!typeIds.has(doneAc.id)) {
              // Check if the todo ID is already in the set
              doneActFromDatabase.push(doneAc);
              typeIds.add(doneAc.id); // Add the todo ID to the set
            }
          });

          // Update the todos state with the retrieved todos
          setDoneActivities(doneActFromDatabase);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (isLoggedIn) {
      getExerciseListDataFromDatabase();
      getMyRoutinesDataFromDatabase();
      getDoneActivitiesDataFromDatabase();
    } else {
      const storedAllExercises = localStorage.getItem("exerciseList") || "[]";
      const storedMyExercises = localStorage.getItem("myRoutines") || "[]";
      const storedDoneData =
        localStorage.getItem("localDoneActivities") || "[]";
      try {
        // Fetch all exercises from LocalStorage
        setExerciseList(JSON.parse(storedAllExercises));
        // Fetch all my routines from LocalStorage
        setMyRoutines(JSON.parse(storedMyExercises));
        // Fetch all done Data from LocalStorage
        setDoneActivities(JSON.parse(storedDoneData));
      } catch (error) {
        console.log("Error parsing stored Exercise data:", error);
      }
    }
  }, [isLoggedIn]);

  const showMenuFunction = () => {
    setShowMenu(!showMenu);
  };

  //useEffect used to  check if the user is authenticated or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);

  return (
    <RoutineContext.Provider
      value={{
        exerciseList,
        setExerciseList,
        myRoutines,
        setMyRoutines,
        doneActivities,
        setDoneActivities,
        isLoggedIn,
      }}
    >
      <div className="App">
        {loading ? (
          <div className="loading">
            <div className="loading-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="180"
                viewBox="0 0 24 24"
              >
                <path
                  fill={"#e5bf16"}
                  d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="1.5s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  />
                </path>
              </svg>
              <img className="django-loading" src={django} alt="django" />
            </div>
          </div>
        ) : (
          <>
            {isAuthenticated ? (
              <BrowserRouter basename="/gym-app/">
                <div className="main-columns-divide">
                  <button
                    className="nav-menu-responsive"
                    onClick={showMenuFunction}
                  >
                    Menu
                  </button>
                  <Navigation
                    showMenu={showMenu}
                    showMenuFunction={showMenuFunction}
                  />
                  <Routes>
                    <Route path="/" element={<MyExercises />} />
                    <Route path="/all-exercises" element={<AllExercises />} />
                    <Route
                      path={`/myexerciseDetails/:myExerciseID`}
                      element={<PageExerciseDetails />}
                    />
                    <Route
                      path={`/routine/:routineID`}
                      element={<RoutinePage />}
                    />
                  </Routes>
                </div>
              </BrowserRouter>
            ) : (
              <Auth />
            )}
          </>
        )}
      </div>
    </RoutineContext.Provider>
  );
}

export default App;
