import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar({ fetchResults, userQuery, error, onSubmit, onChange, setUserQuery, onSearch, onFormSubmit}) {

  return (
    <div>
      <form className="search-bar"  onSubmit={() => onFormSubmit()}>
        <input
          type="text"
          placeholder="What are you in the mood for?"
          value={userQuery}
          onChange={(user) => (setUserQuery(user.target.value), console.log(user.target.value))}
          id="search--input"
        />
        <button className="search--boop click" type="submit" onClick={() => onSearch()}>
          boop
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default SearchBar;
