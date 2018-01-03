import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    if (this.props.formType === 'signup') {
      // Sign Up
      return (
        <div className="login-form-container">
          <form className="login-form-box" onSubmit={this.handleSubmit}>
            <p>Have an account? <Link to="/login">Log in</Link></p>
            <h2>Sign Up</h2>
            <div className="login-form">
              <label>Username:
                <input className="signup-input"
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')} />
              </label>
              <br />
              <label>Email:
                <input className="signup-input"
                  type="text"
                  onChange={this.update('email')} />
              </label>
              <br />
              <label>Password:
                <input className="signup-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')} />
              </label>
              <br />
              <input className="submit-button"
                type="submit"
                value="Create Account" />
              {this.renderErrors()}
            </div>
          </form>
        </div>
      );
    } else {
      // Log in
      return (
        <div className="login-form-container">
          <form className="login-form-box" onSubmit={this.handleSubmit}>
            <h2>Log in</h2>
            <div className="login-form">
              <label>Username:
                <input className="login-input"
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')} />
              </label>
              <br/>
              <label>Password:
                <input className="login-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')} />
              </label>
              <br />
              <input className="submit-button"
                type="submit"
                value="Log Me In!" />
              {this.renderErrors()}
              <div className="form-footer">
                New to The Rubbing Lamp? <Link to='/signup'>Sign up!</Link>
              </div>
            </div>
          </form>
        </div>
      );
    }

  }
}

export default withRouter(SessionForm);
