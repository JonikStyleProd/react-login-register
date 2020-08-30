import React from "react";

const RegisterLogin  = () => {
        return (
      <div className="container">
        <h2>Login</h2>
        <div className="row">
          <form
            className="col s12"
            //onSubmit={(event) => this.submitForm(event)}
          >
            <div className="row">
              <div className="input-field col s12">
              <label htmlFor="email">Email </label>
                <input
                  name="email"
                 // value={this.state.email}
                  //onChange={(e) => this.handleChange}
                  id="email"
                  type="email"
                  className="validate"
                />

                <span
                  className="helper-text"
                  data-error="Type a right type email"
                  data-success="right"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <label htmlFor="email">Password </label>
              <input
                  name="password"
                 // value={this.state.password}
                  //onChange={(e) => this.handleChange}
                  id="password"
                  type="password"
                  className="validate"
                />
                
                <span
                  className="helper-text"
                  data-error="Wrong Password"
                  data-success="right"
                />
              </div>
            </div>
            <div className="row">
                <div className="col 12">
                    <button 
                            className="btn waves-effect blue lighten-2"
                            type="submit"
                            name="action"
                            //onClick={this.submitForm}
                    >
                        Login
                    </button>

                </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
export default RegisterLogin;
