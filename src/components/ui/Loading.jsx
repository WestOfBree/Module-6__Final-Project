import React from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";

function Loading({loading}) {

    return (
        <div id="loading__screen--container" className="loading__screen">
                 <div id="loading__screen">
               <FontAwesomeIcon className="loading__icon" icon={faFish} spin/>
            </div>
        </div>
    );
}

export default Loading;