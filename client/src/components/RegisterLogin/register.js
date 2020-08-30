import React, { Component } from "react";
import { registerUser } from "../../actions/user_action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export class Register extends Component {
  state = {
    lastname: "",
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  displayErrors = (errors) => errors.map((error, i) => <p key={i}>{error}</p>);

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ error: errors.concat(error) });
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is Invalid" };
      this.setState({ errors: errors.concat(error) });
    } else {
      return true;
    }
  };
  //CHecking the password and passwordConformation
  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ lastname, name, email, password, passwordConfirmation }) => {
    return (
      !name.length ||
      !lastname.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {
      email: this.state.email,
      name: this.state.name,
      lastname: this.state.lastname,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
    };

    if (this.isFormValid()) {
      this.setState({ errors: [] });
      this.props.dispatch(registerUser(dataToSubmit))
          .then((response) => {
            if (response.payload.success) {
            this.props.history.push("/login");
            } else {
            this.setState({
                errors: this.state.errors.concat(
                "Your attempt to send data to MongoDB was failed"
                ),
            })
          .catch(err => {
              this.setState({ 
                  errors: this.state.errors.concat(err)
              });
          })
            
        }
      });
    } else {
        console.error("Form is not valid");
    }
  };

  render() {
    return (
      <div className="container">
        <h4>Sing Up</h4>
        <div className="row">
          <form
            className="col s12"
            onSubmit={(event) => this.submitForm(event)}
          >
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  name="lastname"
                  value={this.state.lastname}
                  onChange={(e) => this.handleChange(e)}
                  id="lastname"
                  type="text"
                  className="validate"
                />
                <label className="active" htmlFor="icon_prefix">
                  Last Name
                </label>
                <span
                  className="helper-text"
                  data-error="Type a right type Last Name"
                  data-success="right"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">person</i>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.handleChange(e)}
                  id="name"
                  type="text"
                  className="validate"
                />
                <label className="active" htmlFor="name">
                  Name
                </label>
                <span
                  className="helper-text"
                  data-error="Wrong Name"
                  data-success="right"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mail</i>
                <input
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                  id="email"
                  type="email"
                  className="validate"
                />
                <label className="active" htmlFor="email">
                  Email
                </label>
                <span
                  className="helper-text"
                  data-error="Wrong Name"
                  data-success="right"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                  id="password"
                  type="password"
                  className="validate"
                />
                <label className="active" htmlFor="password">
                  Pasword
                </label>
                <span
                  className="helper-text"
                  data-error="Wrong Name"
                  data-success="right"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">lock_outline</i>
                <input
                  name="passwordConfirmation"
                  value={this.state.passwordConfirmation}
                  onChange={(e) => this.handleChange(e)}
                  id="passwordConfirmation"
                  type="password"
                  className="validate"
                />
                <label className="active" htmlFor="passwordConfirmation">
                  Password Confirmation
                </label>
                <span
                  className="helper-text"
                  data-error="Wrong Name"
                  data-success="right"
                />
              </div>
            </div>

            {this.state.errors.length > 0 && (
              <div>{this.displayErrors(this.state.errors)}</div>
            )}

            <div className="row">
              <div className="col s12 ">
                <button
                  className="btn waves-effect black lighten-2"
                  type="submit"
                  name="action"
                  onClick={this.submitForm}
                >
                  Sing Up <i className="material-icons right">create</i>
                </button>
                <button
                  style={{ margin: "5px", color: "white" }}
                  className="btn waves-effect black lighten-2"
                >
                  <Link to="/home" style={{ color: "white" }}>
                    Home
                  </Link>
                  <i className="material-icons right">home</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(Register));
