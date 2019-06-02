import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.png';
import Launches from './components/Launches'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="Container">
         <img src={logo}
          alt="SpaceX"
          style={{ width: 300, height: 200, display: 'block', margin: 'auto'}}
          />
          <Launches></Launches>
       </div>
      </ApolloProvider>
    )
  }
}

export default App;
