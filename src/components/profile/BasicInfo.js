import React, { PropTypes } from 'react';
import { PersonConstants, Units, Gender } from '../../constants/labelMappings';

const BasicInfo = ({ person }) => {

  //Get value of property (with units if applicable) or return Unknown
  let getValue = key => {
    let value = person[key];
    return value ? value + (Units[key] || "") : "Unknown";
  };

  let basics = [ "birthYear", "height", "mass" ];

  return (
    <div>
      <div id="name" className="name">{person.name}</div>
      <div className="basics">
        {basics.map((prop, i) => (
          <div key={i} id={prop}>
            {PersonConstants[prop]}:&nbsp;&nbsp;
            <span className="property">
              {getValue(prop)}
            </span>
          </div>)
        )}
        <div id="gender">
          {PersonConstants.gender}:&nbsp;&nbsp;
          <span className="property">
            {Gender[person.gender] || "Unknown"}
          </span>
        </div>
      </div>
    </div>
  );
};

BasicInfo.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    birthYear: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.number,
    mass: PropTypes.number
  }).isRequired
};

export default BasicInfo;
