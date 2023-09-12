import { useRef, useEffect, useState, useContext } from "react";
import "../../assets/Styles/pages/all-pages.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { RoutineForm } from "../components/My-list/RoutinePage/RoutineForm";
import { RoutineContext } from "../../App";

export const MyExercises = () => {
  const { myRoutines = [] } = useContext(RoutineContext) || {}; //getting the colors from the context

  const location = useLocation(); // Get the current location

  const routineRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    routineRef.current?.showModal();
  };

  const closeModal = () => {
    routineRef.current?.close();
  };

  const [showParentElements, setShowParentElements] = useState<boolean>(false);
  useEffect(() => {
    // Determine whether to show the "New" button or not based on the current location
    setShowParentElements(!location.pathname.includes("/routine/"));
  }, [location]);

  return (
    <div className="main-columns-divide__main-area">
      <div className="main-exercises">
        <h2>My Routines</h2>

        {showParentElements && (
          <>
            <span className="button-with-text" onClick={openModal}>
              <FontAwesomeIcon icon={faPlus} /> New Routine
            </span>

            <dialog ref={routineRef}>
              <RoutineForm closeModal={closeModal} />
            </dialog>
          </>
        )}

        {myRoutines.map((routine) => (
          <Link
            key={`routine-${routine.routineName}`}
            to={`routine/${routine.routineID}`}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 5px",
                backgroundColor: "#efc177",
                padding: "10px 10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              {routine.routineName}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
