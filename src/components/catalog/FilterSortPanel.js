import React, { PropTypes } from 'react';
import SearchBar from './SearchBar';
import SortBar from './SortBar';

const FilterSortPanel = (props) => {

  return (
    <div className="filter">
      <SearchBar searchTerm={props.searchTerm} onChange={props.onSearchChange}/>
      <SortBar sortOrder={props.sortOrder} onChange={props.onSortChange} />
    </div>
  );
};

FilterSortPanel.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired
};

export default FilterSortPanel;
