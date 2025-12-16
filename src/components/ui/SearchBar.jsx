import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar({  userQuery, error, onChange, setUserQuery, onFormSubmit}) {

  return (
    <div>
      <form className="search-bar"  onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="What are you in the mood for?"
          value={userQuery}
          onChange={(e) => {setUserQuery(e.target.value), console.log(e.target.value);}}
          id="search--input"
        />
        <button className="search--boop click" type="submit" >
          boop
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default SearchBar;
