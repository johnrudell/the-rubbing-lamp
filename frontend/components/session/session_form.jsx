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
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(e) {
    e.preventDefault();

    this.setState = {
      username: 'demoUser',
      email: 'demoUser@demo.com',
      password: 'password'
    };
    const demoSession = Object.assign({}, this.setState);

    this.props.login(demoSession);
  }

  render() {

    if (this.props.formType === 'signup') {
      // Sign Up
      return (
        <div className="row content session-form-container">
          <form className="session-form-box">
            <div className="session-form-addon session-form-header">
              Have an account?&nbsp;
              <Link onClick={this.props.clearSessionErrors} className="link" to="/login">
                Log in
              </Link>
            </div>
            <h2>Sign up</h2>
            {this.renderErrors()}
            <div className="session-form">
              <input className="session-input"
                placeholder="Name"
                type="text"
                value={this.state.username}
                onChange={this.update('username')} />
              <input className="session-input"
                placeholder="Email"
                type="email"
                onChange={this.update('email')} />
              <input className="session-input"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')} />
              <input className="session-input submit-button"
                type="submit"
                onClick={this.handleSubmit}
                value="Create account" />
              <p className="small-text">
                By signing up, you agree to become a genie.
              </p>
              <div className="separator">
                <div className="line"></div>
                <div className="text">or</div>
              </div>
              <input className="session-input submit-button demo-button"
                type="submit"
                onClick={this.demoLogin}
                value="Demo log in" />
              <p className="small-text">Log in immediately and experience the wonders of being a genie.</p>
            </div>
          </form>
        </div>
      );
    } else {
      // Log in
      return (
        <div className="row content session-form-container">
          <form className="session-form-box">
            <h2>Log in</h2>
            {this.renderErrors()}
            <div className="session-form">
              <input className="session-input"
                placeholder="Name"
                type="text"
                value={this.state.username}
                onChange={this.update('username')} />
              <input className="session-input"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')} />
              <input className="session-input submit-button"
                type="submit"
                onClick={this.handleSubmit}
                value="Log me in!" />
              <div className="separator">
                <div className="line"></div>
                <div className="text">or</div>
              </div>
              <input className="session-input submit-button demo-button"
                type="submit"
                onClick={this.demoLogin}
                value="Demo log in" />
              <p className="small-text">Log in immediately and experience the wonders of being a genie.</p>
            </div>
            <div className="session-form-addon session-form-footer">
              New to The Rubbing Lamp?&nbsp;
              <Link onClick={this.props.clearSessionErrors} className="link" to='/signup'>
                Sign up!
              </Link>
            </div>
          </form>
        </div>
      );
    }

  }
}

export default withRouter(SessionForm);
