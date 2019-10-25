import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import '../App.css';

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/protected'));
  };

  render() {
    return (
      <div className="loginbg">
        <div className="loginform">
          <form onSubmit={this.handleLogin}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <input
              type="text"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <button>
              {this.props.isLoggingIn ? (
                <img
                  src="https://ya-webdesign.com/images/minimalist-transparent-loading-gif-11.gif"
                  alt=""
                  loadDots
                />
              ) : (
                'Login'
              )}
            </button>
            {this.props.error && <p className="error">{this.props.error}</p>}
            <p>Forgot your Password?</p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ error, isLoggingIn }) => ({
  error,
  isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
