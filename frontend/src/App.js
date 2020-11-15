import React from 'react';

//history
import history from './history';

//router
import { Router, Route, Switch } from 'react-router-dom';
import UserRegistration from './components/registration/UserRegistration';
import LoginPage from './LoginPage';
import ProfilePage from './components/profile/ProfilePage';
import ActivityFeed from './components/activity-feed/ActivityFeed';

const App = () => {
  return (
    <>
      <Router history = {history}>
        <Switch>
          <Route path = "/profile" component = {ProfilePage} />
          <Route path = "/login" component = {LoginPage} />
          <Route path = "/registration" component = {UserRegistration}/>
          <Route path = "/activity-feed" component = {ActivityFeed}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
