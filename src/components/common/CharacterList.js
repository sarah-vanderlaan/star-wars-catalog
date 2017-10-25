import React, { PropTypes } from 'react';
import { RiseLoader } from 'halogen';
import Error from './Error';
import Character from './Character';

const CharacterList = ({ characters, loading, error }) => {

  if(error) {
    return <Error message="There was an error loading data! Sorry :(" />;
  }

  if(loading) {
    return <RiseLoader color="#355063" size="15px" margin="4px" />;
  }

  return (
    <div className="character-list">
      <div className="row center-xs">
        {!characters.length &&
          <div className="noResults">
            No matching results found!
          </div>}
        {characters.map((c, i) =>
          <Character key={i} id={c.id} name={c.name}/>)}
      </div>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object
};

export default CharacterList;
