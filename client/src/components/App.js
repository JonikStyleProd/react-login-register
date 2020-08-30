import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './about/index';
import Home from './Home/Home';
import RegisterLogin from './RegisterLogin/index';

function App() {
  return (
    <div className="App">

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <RegisterLogin />
            </Route>
            <Redirect to="/" />
        </Switch>


    </div>
  );
}

export default App;
