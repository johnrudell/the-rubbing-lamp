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
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
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
        <div className="row content session-form-container">
          <form className="session-form-box" onSubmit={this.handleSubmit}>
            <div className="session-form-addon session-form-header">
              Have an account? <Link className="link" to="/login">Log in</Link>
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
                type="text"
                onChange={this.update('email')} />
              <input className="session-input"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')} />
              <input className="session-input submit-button"
                type="submit"
                value="Create account" />
              <p className="small-text">
                By signing up, you agree to our <a className="link">terms of use</a>,&nbsp;
                <a className="link">privacy policy</a>, and &nbsp;
                <a className="link">cookie policy</a>.
              </p>
              <div className="separator">
                <div className="line"></div>
                <div className="text">or</div>
              </div>
              <input className="session-input submit-button demo-button"
                type="submit"
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
          <form className="session-form-box" onSubmit={this.handleSubmit}>
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
                value="Log me in!" />
              <div className="separator">
                <div className="line"></div>
                <div className="text">or</div>
              </div>
              <input className="session-input submit-button demo-button"
                type="submit"
                value="Demo log in" />
              <p className="small-text">Log in immediately and experience the wonders of being a genie.</p>
            </div>
            <div className="session-form-addon session-form-footer">
              New to The Rubbing Lamp? <Link className="link" to='/signup'>Sign up!</Link>
            </div>
          </form>
        </div>
      );
    }

  }
}

export default withRouter(SessionForm);
