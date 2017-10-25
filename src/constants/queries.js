import gql from 'graphql-tag';

export const getAllCharacters = gql`
  query getAllCharacters($filter: PersonFilter, $order: PersonOrderBy) {
    viewer {
      allPersons(filter: $filter, orderBy: $order) {
        edges {
          node { id name }
        }
      }
    }
  }
`;

export const getPersonDetails = gql`
  query getPersonDetails($id: ID, $residentFilter: PersonFilter) {
    viewer {
      Person(id:$id) {
        id
        name
        birthYear
        height
        gender
        mass
        films {
          edges {
            node { title }
          }
        }
        homeworld {
          id
          name
          residents(filter:$residentFilter) {
            edges {
              node { id name }
            }
          }
        }
      }
    }
  }
`;
