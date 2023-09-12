import { Link, useLocation } from "react-router-dom";
import DbAndLogOut from "./DbAndLogOut";
import PersonalLinks from "./PersonalLinks";

export const Navigation = ({
  showMenu,
  showMenuFunction,
}: {
  showMenu: boolean;
  showMenuFunction: any;
}) => {
  const location = useLocation();

  return (
    <nav
      className="navigation main-columns-divide__navigation"
      style={{ width: showMenu ? "100%" : "0%", zIndex: showMenu ? "1" : "0" }}
    >
      <PersonalLinks />
      <h1>Gym list</h1>{" "}
      <Link
        to="/"
        className={`navigation__item-${
          location.pathname === "/" ? "active" : "inactive"
        }`}
        onClick={showMenuFunction}
      >
        My Routines
      </Link>
      <Link
        to="/all-exercises"
        className={`navigation__item-${
          location.pathname === "/all-exercises" ? "active" : "inactive"
        }`}
        onClick={showMenuFunction}
      >
        All Exercises
      </Link>
      <DbAndLogOut />
    </nav>
  );
};
