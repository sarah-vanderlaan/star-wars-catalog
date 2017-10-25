import React, { PropTypes } from 'react';
import CharacterList from '../common/CharacterList';

const FriendsPanel = ({ homeworld }) => {

  if(!homeworld) {
    return (
      <div className="title">
        I don't have a planet :(
      </div>
    );
  }

  let planet = homeworld.name;
  //Have to map to node because of the shape of the data from query
  let friends = homeworld.residents.edges.map(e => e.node);

  return (
    <div>
      <div className="title">
        I am found on planet
        <span className="planet"> {planet} </span>
        with the following friends:
      </div>
      <CharacterList characters={friends} />
    </div>
  );
};

FriendsPanel.propTypes = {
  homeworld: PropTypes.shape({
    name: PropTypes.string,
    residents: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default FriendsPanel;
