import React from 'react';
import merge from 'lodash/merge';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryId: 89,
      title: '',
      shortBlurb: '',
      deadline: '',
      fundingGoal: '',
      description: '',
      fundingRaised: 0,
      authorId: props.currentUser.id,
      imageFile: '',
      imageUrl: '',
      errored: false,
      rewards: [{
        title: '',
        description: '',
        amount: 0,
        delivery_date: ''
      }]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
    this.rewards = this.rewards.bind(this);
    this.addReward = this.addReward.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
    if (this.props.match.params.projectId) {
      this.props.fetchProject(this.props.match.params.projectId)
    }
  }

  componentWillMount() {
    this.props.clearProjectErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project) {
      this.setState(nextProps.project)
    }
    if (this.props.project !== nextProps.project) {
      let rewards = nextProps.project.rewards.map(reward => {
        return {
          title: reward.title,
          description: reward.description,
          amount: reward.amount,
          delivery_date: reward.delivery_date
        };
      });

      let newState = merge({}, this.state);
      newState.categoryId = nextProps.project.categoryId;
      newState.title = nextProps.project.title;
      newState.shortBlurb = nextProps.project.shortBlurb;
      newState.deadline = nextProps.project.deadline;
      newState.fundingGoal = nextProps.project.fundingGoal;
      newState.description = nextProps.project.description;
      newState.fundingRaised = nextProps.project.fundingRaised;
      newState.imageUrl = nextProps.project.imageUrl;
      newState.errored = nextProps.project.errored;
      newState.rewards = rewards;

      this.setState(newState);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const file = this.state.imageFile;

    const formData = new FormData();

    formData.append("project[image]", file)

    formData.append("project[category_id]", this.state.categoryId)
    formData.append("project[title]", this.state.title)
    formData.append("project[short_blurb]", this.state.shortBlurb)
    formData.append("project[deadline]", this.state.deadline)
    formData.append("project[funding_goal]", parseInt(this.state.fundingGoal))
    formData.append("project[description]", this.state.description)
    formData.append("project[funding_raised]", this.state.fundingRaised)
    formData.append("project[author_id]", this.state.authorId)
    formData.append("project[rewards_attributes]", JSON.stringify(this.state.rewards));

    if (this.props.formType === 'new') {
      this.props.createProject(formData).then( (project) => {
        return this.props.history.push(`/projects/${project.id}`);
      });
    } else {
      formData.append("project[id]", this.state.id)
      this.props.updateProject(formData).then( (project) => {
        return this.props.history.push(`/projects/${project.id}`);
      });
    }

  }

  update(field) {
    return e => {
      if (field === "categoryId") {
        this.setState({ [field]: parseInt(e.target.value) })
      } else {
        this.setState({ [field]: e.target.value })
      }

    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
          imageFile: file,
          imageUrl: fileReader.result,
          errored: false
      });
    }

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({
          imageUrl: "",
          imageFile: null
      });
    }

  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="project-errors">
          {this.props.errors.map((error, idx) => (
            <li key={idx}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  handleImageError() {
    if (this.state.errored === false) {
      this.setState({
        errored: true
      })
    }
  }

  setTitle(idx, e) {
    this.state.rewards[idx].title = e.target.value;
  }

  setAmount(idx, e) {
    this.state.rewards[idx].amount = e.target.value;
  }

  setDescription(idx, e) {
    this.state.rewards[idx].description = e.target.value;
  }

  setDate(idx, e) {
    this.state.rewards[idx].delivery_date = e.target.value;
  }

  addReward(e) {
    e.preventDefault();
    e.stopPropagation();

    let rewards = this.state.rewards;
    rewards.push({
      title: '',
      description: '',
      amount: 0,
      delivery_date: ''
    });

    this.setState({rewards: rewards});
  }

  rewards() {
    return (
      this.state.rewards.map((rewards, idx) => {
        return (
          <div className="reward-box" key={idx}>
            <h3 className="reward-left">Reward #{idx + 1}</h3>
            <ul className="reward-right">
              <li className="reward-box-item">
                <label>Title</label>
                <div className="reward-input-cont">
                  <input type="text"
                    onChange={this.setTitle.bind(this, idx)}
                    placeholder={rewards.title} />
                </div>
              </li>
              <li className="reward-box-item">
                <label>Amount</label>
                <div className="reward-input-cont">
                  <span className="reward-span">$</span>
                  <input type="number"
                    onChange={this.setAmount.bind(this, idx)}
                    placeholder={rewards.amount} />
                </div>
              </li>
              <li className="reward-box-item">
                <label>Description</label>
                <div className="reward-input-cont">
                  <textarea type="text"
                    onChange={this.setDescription.bind(this, idx)}
                    placeholder={rewards.description}>
                  </textarea>
                </div>
              </li>
              <li className="reward-box-item">
                <label>Estimated delivery</label>
                <div className="reward-input-cont">
                  <input type="date"
                    onChange={this.setDate.bind(this, idx)}
                    placeholder={rewards.delivery_date} />
                </div>
              </li>
            </ul>
          </div>
        );
      })
    );
  }


  render() {
    const submitText = this.props.formType === 'new' ? "Make a wish" : "Rethink your wish";
    const headerText = this.props.formType === 'new' ? "Rub the Lamp" : "Edit your wish";

    const categories = this.props.categories.map( category => {
      return <option key={category.id} value={category.id}>{category.name}</option>;
    });
    return (
      <div className="new-project-container">
        <form className="new-project-form">
          <div className="new-project-header">
            <h1>Rub the Lamp</h1>
            <p>
              Make a great first impression with your wish's title
              and image, and set your funding goal, campaign duration,
              and wish category.
            </p>
          </div>
          <ul className="input-list">
            <li className="new-project-item">
              <div className="input-label">Image</div>
              <div className="input-container">
                <div className="upload-image-container">
                  <label className="upload-label">
                    <span className="upload-text1">Conjure an image from your computer</span>
                    <span className="upload-text2">This is the main image associated with your wish. Make it wow them!</span>
                  </label>
                  <img className="upload-image"
                    style={{display: (this.state.errored ? "none" : "")}}
                    onError={this.handleImageError}
                    src={this.state.imageUrl} />
                  <input className="upload-image-button"
                    type="file"
                    onChange={this.updateFile} />
                </div>
                <p className="input-footer">
                  This is the first thing that people will see when they
                  come across your wish. Choose an image that’s crisp and text-free.
                </p>
              </div>
            </li>
            <li className="new-project-item">
              <div className="input-label">Title</div>
              <div className="input-container">
                <input className="form-input-field"
                  value={this.state.title}
                  onChange={this.update('title')} />
                <p className="input-footer">
                  Make your title unique and stand out.
                </p>
              </div>
            </li>
            <li className="new-project-item">
              <div className="input-label">Short blurb</div>
              <div className="input-container">
                <input className="form-input-field"
                  value={this.state.shortBlurb}
                  onChange={this.update('shortBlurb')} />
                <p className="input-footer">
                  Give people a sense of what you’re doing.
                  Skip “Help me” and focus on what you’re making.
                </p>
              </div>
            </li>
            <li className="new-project-item">
              <div className="input-label">Category</div>
              <div className="input-container">
                <select className="category-dropdown"
                  value={this.state.categoryId}
                  onChange={this.update('categoryId')} >
                  {categories}
                </select>
              </div>
            </li>
            <li className="new-project-item">
              <div className="input-label">Funding duration</div>
              <div className="input-container">
                <input className="form-input-field"
                  type="date"
                  value={this.state.deadline}
                  onChange={this.update('deadline')} />
                <p className="input-footer">
                  Wishes with shorter durations have higher success
                  rates. You won’t be able to adjust your duration after
                  you channel your wish.
                </p>
              </div>
            </li>
            <li className="new-project-item">
              <div className="input-label">Funding goal</div>
              <div className="input-container">
                <input className="form-input-field"
                  min="100"
                  type="number"
                  value={this.state.fundingGoal}
                  onChange={this.update('fundingGoal')}
                  placeholder="$" />
                <p className="input-footer">
                  Funding on The Rubbing Lamp is all-or-nothing. It’s okay
                  to raise more than your goal, but if your goal isn’t
                  met, no money will be collected. Your goal should
                  reflect the minimum amount of funds you need to
                  grant your wish and send out rewards, and include
                  a buffer for payments processing fees.
                </p>
              </div>
            </li>
            <li className="new-project-item">
              <div className="input-label">Description</div>
              <div className="input-container">
                <textarea
                  value={this.state.description}
                  onChange={this.update('description')} >
                </textarea>
                <p className="input-footer">
                  Use your wish description to share more about what
                  you’re raising funds to do and how you plan to pull it
                  off. It’s up to you to make the case for your wish.
                </p>
              </div>
            </li>
            {this.rewards()}
            <button className="add-reward-button" onClick={this.addReward}>
              <i class="fa fa-plus" aria-hidden="true"></i>
              Add a new reward
            </button>
          </ul>
          {this.renderErrors()}
          <button className="project-submit-button" onClick={this.handleSubmit}>
            {submitText}
          </button>
        </form>
      </div>
    );
  }

}

export default ProjectForm;
