import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function PersonalLinks() {
  return (
    <div
      className="personal-links"
      style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
    >
      <a href="https://www.linkedin.com/in/jose-david-molina-sosa-webdev/?locale=en_US">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://cheoworkshop.info/">
        <FontAwesomeIcon icon={faGlobe} />
      </a>
      <a href="https://github.com/Aredros">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default PersonalLinks;
