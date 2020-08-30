import React, { Component } from "react";
import { connect } from 'react-redux';
import {loginUser} from '../../actions/user_action'
import { withRouter } from "react-router-dom";


class Login extends Component {
     state = {
        email: "",
        password: "",
        errors: []
    }
    //Error Function
    displayErrors = errors =>
        errors.map((errors, i) => <p key={i}>{errors}</p>)

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = {
            email: this.state.email,
            password: this.state.password
        };
        
        //Check Valid or Not
        if(this.isFormvalid(this.state)){
            this.setState({errors: [] })
                this.props.dispatch(loginUser(dataToSubmit))
                .then(responce => { 
                    if(responce.payload.loginSuccess) {
                        this.props.history.push('/home')
                    }else{
                        this.setState({ 
                            errors: this.state.errors.concat(
                                "Failed to Log in, you can check your Email and Password. And try again!"
                            )
                        })
                    }
                })

        }else {
            this.setState({ 
                errors: this.state.errors.concat('Form is not valid!')
            })
        }
    }
    isFormvalid = ({ email, password }) => email && password;

        render(){
        return (
      <div className="container">
        <h2>Login</h2>
        <div className="row">
          <form
            className="col s12"
            onSubmit={(event) => this.submitForm(event)}
          >
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
                  data-error="Type a right type email"
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
                  data-error="Wrong Password"
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
                <div className="col 12 ">
                    <button 
                            className="btn waves-effect black lighten-2"
                            type="submit"
                            name="action"
                            onClick={this.submitForm}
                    >
                        Login <i class="material-icons right">send</i>
                    </button>

                </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(Login));
