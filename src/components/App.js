/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import PageNotFound from './PageNotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavLink exact to="/">Home</NavLink>
          {' | '}
          <NavLink to="/about">About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
