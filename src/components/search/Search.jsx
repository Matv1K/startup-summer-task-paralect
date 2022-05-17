import { useState } from "react";

import "./Search.scss";

import SearchIcon from "assets/icons/search-small.svg";

const Search = ({ setSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSearch(value);

    setValue("");
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="search-form">
      <label htmlFor="search">
        <img className="search-form__icon" src={SearchIcon} alt="search" />
      </label>
      <input
        className="search-form__input"
        id="search"
        type="search"
        placeholder="Enter GitHub username"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
