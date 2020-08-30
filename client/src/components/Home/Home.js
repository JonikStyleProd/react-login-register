import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/jslogo.png';
import './Home.module.css';

function Home() {
  return(
    <div className="row">
            <div className="col s12">
        <img src={logo} className="App-logo" alt="logo" />
      <h2>This is HomePage!</h2>
      <div style={{ margin: "5px"}}>
        <button className="btn waves-effect black lighten-2">
            <Link to="/about">About</Link>
            <i class="material-icons right">visibility</i>
        </button>
        <button className="btn waves-effect black lighten-2" style={{ margin: "5px"}}>
            <Link to="/login">Login</Link>
            <i class="material-icons right">vpn_key</i>
        </button>
        <button className="btn waves-effect black lighten-2">
            <Link to="/register">Sing Up</Link>
            <i class="material-icons right">create</i>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Home;
