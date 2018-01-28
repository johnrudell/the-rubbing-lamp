import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BackingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      backer_id: this.props.currentUser.id,
      reward_id: this.props.reward.id
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({['amount']: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    // debugger
    if (this.props.reward.amount > this.state.amount) {
      this.setState({amount: this.props.reward.amount});
      // solve double click of button by putting the createBacking here as well
    } else {
      this.props.createBacking(this.state).then(backing => {
        // debugger
        return this.props.history.push(`/projects/${this.props.project.id}`);
      });
    }
  }

  render() {
    const { reward } = this.props;

    const backings = reward.backings.length === 1
      ? <span>backer</span>
      : <span>backers</span>;

    return (
      <div className="backing-reward">
        <div className="b-reward-info">
          <div className="b-reward-left">
            <h4 className="b-reward-amount">${reward.amount} or more</h4>
            <h4 className="b-reward-title">{reward.title}</h4>
            <p className="b-reward-description">{reward.description}</p>
            <p className="b-reward-backings">{reward.backings.length} {backings}</p>
          </div>
          <div className="b-reward-right">
            <h5>Ships to</h5>
            <p>Anywhere in the world</p>
          </div>
        </div>

        <form className="b-reward-form">
          <input className="b-reward-input"
            type="number"
            value={this.state.amount}
            onChange={this.update()} />
          <button className="b-reward-submit" onClick={this.handleSubmit}>
            Grant this wish
          </button>
        </form>
      </div>
    );
  }
}

export default BackingForm;
