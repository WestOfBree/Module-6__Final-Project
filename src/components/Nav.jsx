import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/frog.png";
import Module from "./Module";

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleModule = () => {
      setIsOpen(!isOpen);
      console.log("Module toggled");
  };
  
  
  return (
    <nav id="nav">
      <div className="row">
        <div className="column">
          <div className="nav__container">
            <div className="nav__left">
              <Link to="/" className="notflix__logo">
                <h1>Notflix</h1>
              </Link>
              <img src={logo} alt="Frog Logo" className="frog__logo" />
            </div>
            
            <div className="nav__right">
              <ul className="nav__links">
                <li>
                 <Link className="nav__link" to="/">Home</Link>
                </li>
                <li>
                  <Link className="nav__link" to="/Results">Find a movie</Link>
                </li>
                <li>
                  <button className="primary-boop click" onClick={() => toggleModule()}> Contact</button>
                  
                </li>
              </ul>
            </div>
            {isOpen && <Module toggleModule={toggleModule} isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
