import React from "react";
import "./Module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Module({ toggleModule, isOpen, setIsOpen }) {
  // const [isOpen, setIsOpen] = React.useState(false);

  // const toggleModule = ({isOpen, setIsOpen} ) => {
  //     setIsOpen(!isOpen);
  //     console.log("Module toggled");
  // };

  if (!isOpen) return null;

  return (
    // <div className="row">
    //   <div className="column">
        <div className="module__container">
          <div className="module__container--background">
            <div className="module__header">
              <button onClick={toggleModule} className="module__close">
                <FontAwesomeIcon icon="times" />{" "}
              </button>
            </div>
          </div>

          <div className="module__content">
            <h2 className="module__title">Thank you for your interest!</h2>
            <p className="module__description">
              This site was built as a class project to showcase our skills in
              React development. If you would like to see more please check out
              my{" "}
              <a href="" className="ePortfolio__link">
                ePortfolio
              </a>
              !
            </p>
            {/* SOCIAL MEDIA ICONS */}
            <div className="module__socials">
              <a href="" className="module__social--link no-cursor">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="" className="module__social--link no-cursor">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="" className="module__social--link no-cursor">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
    //   </div>
    // </div>
  );
}

export default Module;
