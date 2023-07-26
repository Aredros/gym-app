import React, { useContext } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { PageExerciseDetails } from "../../Page-Exercise-Details/PageExerciseDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

interface ITroutineSets {
  exerciseItem: {
    isEditing: boolean;
    name: string;
    muscles: string[];
    linkImage: string;
    myExerciseID: string;
    objective: string;
    routine: string;
    type: string;
    sets: ITset[];
  };
}

interface ITset {
  setCompleted: boolean;
  reps: number;
  weight: number;
  distance: number;
  time: number;
}

export const LinkToPage = (props: ITroutineSets) => {
  const { exerciseItem } = props;
  return (
    <>
      <Link
        key={`exercise-details-${exerciseItem.myExerciseID}`}
        to={`/myexerciseDetails/${exerciseItem.myExerciseID}`}
      >
        <FontAwesomeIcon icon={faDatabase} />
      </Link>
    </>
  );
};
