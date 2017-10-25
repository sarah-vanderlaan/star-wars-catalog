import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const Character = ({ id, name }) => (
  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 tile">
    <Link to={`/character/${id}`}>
      {name}
    </Link>
  </div>
);

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
