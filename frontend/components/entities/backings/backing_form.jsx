import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { formatDeliveryDate } from '../../../util/time_util';

class BackingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      backer_id: this.props.currentUser.id,
      reward_id: this.props.reward.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({['amount']: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;

    if (this.props.reward.amount > this.state.amount) {
      this.setState({amount: this.props.reward.amount});

      // set amount to minimum and send
      this.props.createBacking(this.state).then(backing => {
        return this.props.history.push(`/projects/${this.props.project.id}`);
      });
    } else {
      this.props.createBacking(this.state).then(backing => {
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
          <div className="b-reward-top">
            <h4 className="b-reward-amount">${reward.amount} or more</h4>
            <h4 className="b-reward-title">{reward.title}</h4>
            <p className="b-reward-description">{reward.description}</p>
          </div>
          <div className="b-reward-bottom">
            <div className="b-reward-del">
              <h5>Estimated delivery</h5>
              <p>{formatDeliveryDate(reward.delivery_date)}</p>
            </div>
            <div className="b-reward-ship">
              <h5>Ships to</h5>
              <p>Anywhere in the world</p>
            </div>
          </div>
        </div>

        <p className="pledge-subtext">Pledge amount</p>

        <form onSubmit={this.handleSubmit} className="b-reward-form">
          <div className="b-reward-input-cont">
            <span className="b-reward-span">$</span>
            <input className="b-reward-input"
              type="number"
              min={reward.amount}
              placeholder={reward.amount}
              onChange={this.update()}
               />
          </div>
          <button className="b-reward-submit">
            Grant this wish
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(BackingForm);
