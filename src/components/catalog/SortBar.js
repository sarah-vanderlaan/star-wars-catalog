import React, { PropTypes } from 'react';
import { SortConstants } from '../../constants/labelMappings';

const SortBar = (props) => {

  let changeSortOrder = event => props.onChange(event.target.value);

  let sortOpts = [
    "name_ASC",
    "name_DESC",
    "birthYear_ASC",
    "birthYear_DESC"
  ];

  return (
    <div className="sort row center-xs">
      {sortOpts.map((opt, i) => (
        <div className="checkbox col-xs-12 col-sm-3" key={i}>
          <input
            id={opt}
            type="checkbox"
            onChange={changeSortOrder}
            value={opt}
            checked={opt === props.sortOrder} />
          <label className="label" htmlFor={i}>{SortConstants[opt]}</label>
        </div>
      ))}
    </div>
  );
};

SortBar.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SortBar;
