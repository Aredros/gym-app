import React, { useContext } from "react";
import { RoutineContext } from "../../../../App";

interface TitleRoutinePageProps {
  validRoutineID: string;
}

export const TitleRoutinePage = (props: TitleRoutinePageProps) => {
  const { myRoutines = [] } = useContext(RoutineContext) || {};

  const getRoutineName = (routineID: string) => {
    const selectedRoutine = myRoutines?.find(
      (routine) => routine.routineID === routineID
    );
    return selectedRoutine ? selectedRoutine.routineName : "Routine Not Found";
  };

  return <h3>{getRoutineName(props.validRoutineID)}</h3>;
};
