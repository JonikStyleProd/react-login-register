import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './about/index';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">

        <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Redirect to="/" />
        </Switch>


    </div>
  );
}

export default App;
