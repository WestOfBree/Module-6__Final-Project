import React from "react";
import "./Module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faSplotch } from "@fortawesome/free-solid-svg-icons";
function Module({ toggleModule, isOpen, setIsOpen }) {
  // const [isOpen, setIsOpen] = React.useState(false);

  // const toggleModule = ({isOpen, setIsOpen} ) => {
  //     setIsOpen(!isOpen);
  //     console.log("Module toggled");
  // };

  if (!isOpen) return null;

  return (
    <div className="module__container">
      <div className="module__backdrop" onClick={toggleModule} />
      <div className="module__container--background">
        <div className="module__header">
          <button onClick={toggleModule} className="module__close" aria-label="Close module">
            x
          </button>
        </div>

        <div className="module__content">
          <h2 className="module__title">Thank you for your interest!</h2>
          <p className="module__description">
            This site was built as a class project to showcase our skills in
            React development. If you would like to see more please check out
            my{" "}
            <a href="https://example.com" className="ePortfolio__link">
              ePortfolio
            </a>
            !
          </p>
          {/* SOCIAL MEDIA ICONS */}
          <div className="module__socials">
            <a href="https://github.com/WestOfBree" className="module__social--link">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.bree-thomas.com/" className="module__social--link">
              <FontAwesomeIcon icon={faSplotch} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module;
