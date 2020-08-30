import React, { Component } from 'react'


export class Register extends Component {

    state = {
        lastname: "",
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: []
    }




    render() {
        return (
            <div className="container">
            <h5>Sing Up</h5>
            <div className="row">
              <form
                className="col s12"
                onSubmit={(event) => this.submitForm(event)}
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="lastname"
                      value={this.state.lastname}
                      onChange={(e) => this.handleChange(e)}
                      id="lastname"
                      type="text"
                      className="validate"
                      placeholder="Last Name"
                    />
                    <span
                      className="helper-text"
                      data-error="Type a right type Last Name"
                      data-success="right"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                  <input
                      name="name"
                      value={this.state.name}
                      onChange={(e) => this.handleChange(e)}
                      id="name"
                      type="text"
                      className="validate"
                      placeholder="Name"
                    />
                   
                    <span
                      className="helper-text"
                      data-error="Wrong Name"
                      data-success="right"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                  <input
                      name="email"
                      value={this.state.email}
                      onChange={(e) => this.handleChange(e)}
                      id="email"
                      type="email"
                      className="validate"
                      placeholder="Email"
                    />
                   
                    <span
                      className="helper-text"
                      data-error="Wrong Name"
                      data-success="right"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                  <input
                      name="password"
                      value={this.state.password}
                      onChange={(e) => this.handleChange(e)}
                      id="password"
                      type="password"
                      className="validate"
                      placeholder="Password"
                    />
                    <span
                      className="helper-text"
                      data-error="Wrong Name"
                      data-success="right"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                  <input
                      name="passwordConfirmation"
                      value={this.state.passwordConfirmation}
                      onChange={(e) => this.handleChange(e)}
                      id="passwordConfirmation"
                      type="password"
                      className="validate"
                      placeholder="Password Confirmation"
                    />
                   
                    <span
                      className="helper-text"
                      data-error="Wrong Name"
                      data-success="right"
                    />
                  </div>
                </div>

                {this.state.errors.length > 0 && (
                    <div>
                        {this.displayErrors(this.state.errors)}
                    </div>
                )}
    
                <div className="row">
                    <div className="col s12 ">
                        <button 
                                className="btn waves-effect black lighten-2"
                                type="submit"
                                name="action"
                                onClick={this.submitForm}
                        >
                            Sing Up <i class="material-icons right">create</i>
                        </button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        )
    }
};

export default Register;
