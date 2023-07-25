import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import "./styles.scss";
import "./assets/Styles/add-form-styles.scss";
import { Navigation } from "./assets/components/Navigation";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AllExercises } from "./assets/components/AllExercises";
import { MyExercises } from "./assets/components/MyExercises";
import PersonalLinks from "./assets/components/Navigation/PersonalLinks";
import { PageExerciseDetails } from "./assets/components/My-list/Page-Exercise-Details/PageExerciseDetails";

// import addNotification from "react-push-notification";

interface Exercise {
  id: string;
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
}
interface Routines {
  routineID: string;
  isEditing: boolean;
  routineName: string;
  routineImage: string;
  routineExercises: ITroutineSets[];
}
interface ITroutineSets {
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

interface GeneralContextFiles {
  exerciseList: Exercise[];
  setExerciseList: React.Dispatch<React.SetStateAction<Exercise[]>>;
  myRoutines: Routines[];
  setMyRoutines: React.Dispatch<React.SetStateAction<Routines[]>>;
  // doneArchivedRoutines: Routines[];
  // setDoneArchivedRoutines: React.Dispatch<React.SetStateAction<Routines[]>>;
}

//crearting context that will pass the colors and doneTodoList
export const RoutineContext = createContext<GeneralContextFiles | undefined>(
  undefined
);

function App() {
  const [exerciseList, setExerciseList] = useState<Exercise[]>(() =>
    JSON.parse(localStorage.getItem("exerciseList") || "[]")
  );
  const [myRoutines, setMyRoutines] = useState<Routines[]>(() => {
    const storedData = localStorage.getItem("myRoutines");
    return storedData
      ? JSON.parse(storedData)
      : [
          {
            routineID: "001",
            isEditing: false,
            routineName: "Default-routine",
            routineImage: "",
            routineExercises: [
              {
                isEditing: false,
                name: "Bench Press",
                muscles: ["Chest"],
                linkImage: "",
                myExerciseID: "0011",
                objective: "10 sets 5reps 5kilos",
                routine: "Default-routine",
                type: "",
                sets: [
                  {
                    setCompleted: false,
                    reps: 5,
                    weight: 50,
                    distance: 0,
                    time: 0,
                  },
                  {
                    setCompleted: false,
                    reps: 15,
                    weight: 55,
                    distance: 0,
                    time: 0,
                  },
                ],
              },
            ],
          },
        ];
  });
  // const [doneArchivedRoutines, setDoneArchivedRoutines] = React.useState<
  //   Routines[]
  // >([
  //   {
  //     myOldExerciseID: "0011",
  //     sets: [
  //       {
  //         setCompleted: false,
  //         reps: 5,
  //         weight: 50,
  //         distance: 0,
  //         time: 0,
  //       },
  //       {
  //         setCompleted: false,
  //         reps: 15,
  //         weight: 55,
  //         distance: 0,
  //         time: 0,
  //       },
  //     ],
  //   },
  //   {
  //     myOldExerciseID: "0012",
  //     sets: [
  //       {
  //         setCompleted: false,
  //         reps: 2,
  //         weight: 50,
  //         distance: 10,
  //         time: 110,
  //       },
  //     ],
  //   },
  // ]);

  //get all exercises stored into the localStorage
  useEffect(() => {
    //empty array and local storage
    //localStorage.clear();
    const StoredIntoLocalExerciseList = localStorage.getItem("exerciseList");
    if (StoredIntoLocalExerciseList) {
      setExerciseList(JSON.parse(StoredIntoLocalExerciseList));
    }

    const MyStoredIntoLocalRoutines = localStorage.getItem("myRoutines");
    if (MyStoredIntoLocalRoutines) {
      setMyRoutines(JSON.parse(MyStoredIntoLocalRoutines));
    }
  }, []);

  // Save updated exerciseList to localStorage
  useEffect(() => {
    localStorage.setItem("exerciseList", JSON.stringify(exerciseList));
  }, [exerciseList]);

  // Save updated myRoutines to localStorage
  useEffect(() => {
    localStorage.setItem("myRoutines", JSON.stringify(myRoutines));
  }, [myRoutines]);

  return (
    <RoutineContext.Provider
      value={{ exerciseList, setExerciseList, myRoutines, setMyRoutines }}
    >
      <div className="App">
        <PersonalLinks />
        <h1>Gym list</h1>

        <BrowserRouter basename="/gym-app/">
          <div>
            <Navigation />

            <Routes>
              <Route path="*" element={<MyExercises />} />
              <Route path="/all-exercises/" element={<AllExercises />} />
              <Route
                path={`/myexerciseDetails/:myExerciseID`}
                element={<PageExerciseDetails />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </RoutineContext.Provider>
  );
}

export default App;
