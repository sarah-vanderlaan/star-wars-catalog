import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import * as filterActions from '../../actions/filterActions';
import Logo from '../../resources/logo.svg';
import Up from '../../resources/up.svg';
import Down from '../../resources/down.svg';
import FilterSortPanel from './FilterSortPanel';
import CharacterList from '../common/CharacterList';
import { getAllCharacters } from '../../constants/queries';

export class UnwrappedCatalogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilter: true
    };

    this.toggleFilterPanel = this.toggleFilterPanel.bind(this);
  }

  toggleFilterPanel(event) {
    event.preventDefault();
    this.setState({ showFilter : !this.state.showFilter });
  }

  render() {
    let { characters, error, loading } = this.props;

    return (
      <div className="catalog">
        <Logo className="logo"/>
        <div className="toggle" onClick={this.toggleFilterPanel}>
          {this.state.showFilter ? <Up/> : <Down/>}
        </div>
        {this.state.showFilter &&
          <FilterSortPanel
            searchTerm={this.props.searchTerm}
            onSearchChange={this.props.changeSearchTerm}
            sortOrder={this.props.sortOrder}
            onSortChange={this.props.changeSortOrder} />}
        <CharacterList
          characters={characters}
          loading={loading}
          error={error} />
      </div>
    );
  }
}

UnwrappedCatalogPage.propTypes = {
  //From graphQL
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,

  //From redux
  searchTerm: PropTypes.string.isRequired,
  changeSearchTerm: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  changeSortOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  movieFilter: state.movieFilter,
  sortOrder: state.sortOrder
});

const mapDispatchToProps = dispatch => ({
  changeSearchTerm: searchTerm =>
    dispatch(filterActions.changeSearchTerm(searchTerm)),
  changeSortOrder: newSortOrder =>
    dispatch(filterActions.changeSortOrder(newSortOrder))
});

const withQueries = graphql(getAllCharacters, {
  props: ({ data: { loading, viewer, error } }) => ({
    characters: (viewer && viewer.allPersons.edges.map(e => e.node)) || [],
    loading: loading,
    error: error,
  }),
  options: ownProps => {
    return {
      variables: {
        "filter": {
          "name_contains": ownProps.searchTerm
        },
        order: ownProps.sortOrder
      }
    };
  }
})(UnwrappedCatalogPage);

export default connect(mapStateToProps,mapDispatchToProps)(withQueries);
