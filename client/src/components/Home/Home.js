import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/jslogo.png';

function Home() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
      <div>This is Home Page</div>
      <div>
        <button>
            <Link to="/about">About</Link>
        </button>
        <button>
            <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
