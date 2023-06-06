import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles.scss";
import { ExerciseForm } from "./assets/components/All-list/ExerciseForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AllExercises } from "./assets/components/AllExercises";
import { MyExercises } from "./assets/components/MyExercises";
import { v4 as uuidv4 } from "uuid";

interface Exercise {
  id: string;
  isEditing: boolean;
  name: string;
  muscles: string[];
  linkImage: string;
}

function App() {
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const [myExercises, setMyExercises] = useState<any[]>([]);

  //get all exercises stored into the localStorage
  useEffect(() => {
    //empty array and local storage
    //localStorage.clear();
    const StoredIntoLocalExerciseList = localStorage.getItem("exerciseList");
    if (StoredIntoLocalExerciseList) {
      setExerciseList(JSON.parse(StoredIntoLocalExerciseList));
    }
    const MyStoredIntoLocalExerciseList = localStorage.getItem("myExercises");
    if (MyStoredIntoLocalExerciseList) {
      setMyExercises(JSON.parse(MyStoredIntoLocalExerciseList));
    }
  }, []);

  //create and add exercise to the list of exercises
  const addExercise = (
    exerciseName: string,
    muscles: string[],
    linkImage: string
  ) => {
    const newExercise = {
      id: uuidv4(),
      isEditing: false,
      name: exerciseName,
      muscles: muscles,
      linkImage: linkImage,
    };
    setExerciseList([...exerciseList, newExercise]);
    //Save into localStorage
    localStorage.setItem(
      "exerciseList",
      JSON.stringify([...exerciseList, newExercise])
    );
  };

  const deleteExercise = (id: string) => {
    const updatedExercises = exerciseList.filter(
      (exercise) => exercise.id !== id
    );
    //Save into localStorage
    localStorage.setItem("exerciseList", JSON.stringify(updatedExercises));
    setExerciseList(updatedExercises);
  };

  //Start editing process
  const startEditingExercise = (id: string) => {
    const updatedExercises = exerciseList.map((exercise) => {
      return exercise.id === id ? { ...exercise, isEditing: true } : exercise;
    });
    //Save into localStorage
    localStorage.setItem("exerciseList", JSON.stringify(updatedExercises));
    setExerciseList(updatedExercises);
  };

  //process and finish the editing process //CURRENTLY WORKING ON
  const processEditingExercise = (
    id: string,
    exerciseName: string,
    muscles: string[],
    linkImage: string
  ) => {
    const updatedExercises = exerciseList.map((exercise) => {
      if (exercise.id === id) {
        return {
          ...exercise,
          name: exerciseName,
          muscles: muscles,
          linkImage: linkImage,
          isEditing: false,
        };
      } else {
        return exercise;
      }
    });
    //Save to localStorage
    localStorage.setItem("exerciseList", JSON.stringify(updatedExercises));
    setExerciseList(updatedExercises);
  };

  //Add Exercise to my personal list routine
  const addMyExercise = (id: string, weekday: string) => {
    //Get to know if we're dealing with the exercise with the same ID (true or false)
    const selectedExercise = exerciseList.find(
      (exercise) => exercise.id === id
    );
    if (selectedExercise) {
      const updatedExercise = {
        ...selectedExercise,
        weekday: weekday,
        MyExerciseID: uuidv4(),
      };
      const updatedExercises = [...myExercises, updatedExercise];
      setMyExercises(updatedExercises);
      // Save into localStorage
      localStorage.setItem("myExercises", JSON.stringify(updatedExercises));
    }
  };

  //Erase Exercise from my personal list routine
  const deleteMyExercise = (id: string) => {
    const updatedMyExercises = myExercises.filter(
      (exercise) => exercise.id !== id
    );
    //Save into localStorage
    localStorage.setItem("myExercises", JSON.stringify(updatedMyExercises));
    setMyExercises(updatedMyExercises);
  };

  return (
    <div className="App">
      <h1>Gym list</h1>
      <BrowserRouter basename="/exercises/">
        <Routes>
          <Route
            path="/"
            element={
              <MyExercises
                myExercises={myExercises}
                deleteMyExercise={deleteMyExercise}
              />
            }
          />
          <Route
            path="/all-exercises/"
            element={
              <AllExercises
                exercises={exerciseList}
                addExercise={addExercise}
                addMyExercise={addMyExercise}
                deleteExercise={deleteExercise}
                startEditingExercise={startEditingExercise}
                processEditingExercise={processEditingExercise}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
