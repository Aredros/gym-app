import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      {" "}
      <Link
        to="/"
        className={`navigation__item-${
          location.pathname === "/" ? "active" : "inactive"
        }`}
      >
        My Routines
      </Link>
      <Link
        to="/all-exercises"
        className={`navigation__item-${
          location.pathname === "/all-exercises" ? "active" : "inactive"
        }`}
      >
        All Exercises
      </Link>
    </nav>
  );
};
