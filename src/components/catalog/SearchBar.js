import React, { PropTypes } from 'react';

const SearchBar = (props) => {

  const changeSearchTerm = e => props.onChange(e.target.value);

  return (
    <input
      className="searchBar"
      type="text"
      onChange={changeSearchTerm}
      placeholder="Search for character"
      value={props.searchTerm} />
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
