import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './about/index';
import Home from './Home/Home';
import Login from './RegisterLogin/index';
import Register from './RegisterLogin/register';

function App() {
  return (
    <div className="App">

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Redirect to="/home" />
        </Switch>


    </div>
  );
}

export default App;
