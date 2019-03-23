import React from "react";
import Home from './containers/Home';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './containers/Layout/Layout';

const App =()=>{
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
};

export default withRouter(App);
