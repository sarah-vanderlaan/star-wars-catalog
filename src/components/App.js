import React from 'react';
import { Provider } from 'react-redux';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import CatalogPage from './catalog/CatalogPage';
import ProfilePage from './profile/ProfilePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import filterReducer from '../reducers/filterReducer';
import { createStore } from 'redux';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graphcms.com/relay/v1/swapi'
});

const client = new ApolloClient({
  networkInterface,
  connectToDevTools: true,
});

const store = createStore(filterReducer);

class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router>
            <div>
              <Route exact path="/" component={CatalogPage} />
              <Route path="/character/:id" component={ProfilePage} />
            </div>
          </Router>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
