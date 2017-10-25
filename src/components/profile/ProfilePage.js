import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { PulseLoader } from 'halogen';
import DarthVadar from '../../resources/darthvadar.svg';
import FriendsPanel from './FriendsPanel';
import BasicInfo from './BasicInfo';
import Error from '../common/Error';
import { getPersonDetails } from '../../constants/queries';

export class UnwrappedProfilePage extends React.Component {

  render() {
    let { character, loading, error } = this.props;

    //Return loading dots if data still loading
    if(loading) {
      return <PulseLoader color="#355063" size="10px" margin="4px" />;
    }

    let errorMsg = "There was an error loading the requested character! :(";
    let getProfile = error ? <Error message={errorMsg}/> : (
      <div>
        <BasicInfo person = {character} />
        <FriendsPanel homeworld={character.homeworld} />
      </div>
    ) ;

    return (
      <div className="profile">
        <Link className="back-section" to={`/`}>
          <DarthVadar className="back-icon"/>
          <div className="back-text">Back to Catalog</div>
        </Link>
        {getProfile}
      </div>
    );
  }
}

UnwrappedProfilePage.propTypes = {
  //From graphQL
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  character: PropTypes.object.isRequired
};

export default graphql(getPersonDetails, {
  props: ({ data: { loading, viewer, error } }) => ({
    character: (viewer && viewer.Person) || {},
    loading: loading,
    error: error,
  }),
  options: (ownProps) => {
    const personID = ownProps.match.params.id;
    return {
      variables: {
        id: personID,
        residentFilter: {
          id_not: personID
        }
      }
    };
  }
})(UnwrappedProfilePage);
