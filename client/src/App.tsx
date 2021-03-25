import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BasicUserInformation } from 'api/types';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import Landing from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useLogin } from 'hooks';

function App() {
  const [userData] = useLogin();

  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={(props) => <Landing {...props} />} />
        <ProtectedRoute
          exact
          path="/dashboard"
          isLogged={userData.data}
          component={Dashboard}
        />
        <Route exact path="/unauthorized" component={<div />} />
      </Router>
    </div>
  );
}

export default App;
