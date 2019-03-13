import React, { Component } from "react";
import styled,{ createGlobalStyle } from 'styled-components';
import Home from './containers/Home';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { connect } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding: 0;
    font-family: sans-serif;
    font-style: normal;
    font-size: 14px;
  }
`;

class App extends Component {
    render() {
        let routes = (
          <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        );

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

export default App;