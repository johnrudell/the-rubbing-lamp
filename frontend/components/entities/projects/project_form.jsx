import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      category_id: 0,
      title: '',
      short_blurb: '',
      deadline: '',
      funding_goal: 1,
      description: '',
      img_url: '',
      funding_raised: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    this.props.clearProjectErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state)
    this.props.createProject(project);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    return (
      <ul className="project-errors">
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {

    return (
      <div className="new-project-container">
        <form className="new-project-form">
          <h1 className="new-project-header">Get started</h1>
          <ul className="input-list">
            <li>
              <div className="list-number">1.</div>
              <div className="new-project-category">
                <label>Choose a category:</label>
                <select className="category-dropdown" value={this.state.category_id} onChange={this.update('category_id')}>
                  <option value="arts">Arts</option>
                  <option value="comics">Comics</option>
                  <option value="film">Film & Video</option>
                  <option value="food">Food</option>
                  <option value="games">Games</option>
                  <option value="music">Music</option>
                  <option value="photography">Photography</option>
                  <option value="publishing">Publishing</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
            </li>
            <li>
              <div className="list-number">2.</div>
              <div className="new-project-title">
                <label>Give your project a title:</label>
                <input className="form-input-field"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="title..." />
              </div>
            </li>
            <li>
              <div className="list-number">3.</div>
              <div className="new-project-blurb">
                <label>Give your project a short blurb:</label>
                <input className="form-input-field"
                  value={this.state.short_blurb}
                  onChange={this.update('short_blurb')}
                  placeholder="short blurb..." />
              </div>
            </li>
            <li>
              <div className="list-number">4.</div>
              <div className="new-project-deadline">
                <label>When will your funding end?</label>
                <input className="form-input-field"
                  value={this.state.deadline}
                  onChange={this.update('deadline')}
                  placeholder="01/01/2018" />
              </div>
            </li>
            <li>
              <div className="list-number">5.</div>
              <div className="new-project-goal">
                <label>How much do you hope to raise?</label>
                <input className="form-input-field"
                  value={this.state.funding_goal}
                  onChange={this.update('funding_goal')}
                  placeholder="$1000" />
              </div>
            </li>
            <li>
              <div className="list-number">6.</div>
              <div className="new-project-description">
                <label>Describe your project:</label>
                <input className="form-input-field"
                  value={this.state.description}
                  onChange={this.update('description')}
                  placeholder="..." />
              </div>
            </li>
            <li>
              <div className="list-number">7.</div>
              <div className="new-project-img">
                <label>Choose an image:</label>
                <input className="form-input-field"
                  value={this.state.img_url}
                  onChange={this.update('img_url')}
                  placeholder="..." />
              </div>
            </li>
          </ul>
          <button className="project-submit-button" onClick={this.handleSubmit}>
            Create Project
          </button>
          {this.renderErrors()}
        </form>
      </div>
    );
  }

}

export default ProjectForm;
