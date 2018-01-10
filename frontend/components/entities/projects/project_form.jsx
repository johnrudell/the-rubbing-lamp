import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      category_id: '0',
      title: '',
      short_blurb: '',
      deadline: '',
      funding_goal: '',
      description: '',
      img_url: '',
      funding_raised: 0,
      author_id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.match.params.projectId){
      this.props.fetchProject(this.props.match.params.projectId)
    }
  }

  componentWillMount() {
    this.props.clearProjectErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state)
    // debugger
    project['category_id'] = parseInt(project['category_id']);
    project['funding_goal'] = parseInt(project['funding_goal']);
    project['author_id'] = this.props.currentUser.id;

    if (this.props.formType === 'new') {
      this.props.createProject(project).then( () => {
        return this.props.history.push(`/projects/${this.props.project.id}`);
      });
    } else {
      this.props.updateProject(project).then( () => {
        return this.props.history.push(`/projects/${this.props.project.id}`);
      });
    }

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
    // debugger

    const text = this.props.formType === 'new' ? "Make a wish" : "Rethink your wish";

    return (
      <div className="new-project-container">
        <form className="new-project-form">
          <h1 className="new-project-header">Rub the lamp</h1>
          <ul className="input-list">
            <li>
              <div className="list-number">1.</div>
              <div className="input-container">
                <label>Choose a category:</label>
                <select className="category-dropdown"
                  value={this.state.category_id}
                  onChange={this.update('category_id')} >
                  <option disabled value="0">Select a category</option>
                  <option value="1">Arts</option>
                  <option value="2">Music</option>
                  <option value="3">Games</option>
                  <option value="4">Design & Tech</option>
                  <option value="5">Food & Craft</option>
                  <option value="6">Publishing</option>
                  <option value="7">Film</option>
                  <option value="8">Comics & Illustration</option>
                </select>
              </div>
            </li>
            <li>
              <div className="list-number">2.</div>
              <div className="input-container">
                <label>Give your project a title:</label>
                <input className="form-input-field"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="title..." />
              </div>
            </li>
            <li>
              <div className="list-number">3.</div>
              <div className="input-container">
                <label>Give your project a short blurb:</label>
                <input className="form-input-field"
                  value={this.state.short_blurb}
                  onChange={this.update('short_blurb')}
                  placeholder="short blurb..." />
              </div>
            </li>
            <li>
              <div className="list-number">4.</div>
              <div className="input-container">
                <label>When will your funding end?</label>
                <input className="form-input-field"
                  type="date"
                  value={this.state.deadline}
                  onChange={this.update('deadline')} />
              </div>
            </li>
            <li>
              <div className="list-number">5.</div>
              <div className="input-container">
                <label>How much do you hope to raise?</label>
                <div className="pretext-input">
                  <span>$ </span>
                  <input className="form-input-field"
                    type="number"
                    value={this.state.funding_goal}
                    onChange={this.update('funding_goal')}
                    placeholder="1000" />
                </div>
              </div>
            </li>
            <li>
              <div className="list-number">6.</div>
              <div className="input-container">
                <label>Describe your project:</label>
                <textarea rows="6" cols="40"
                  placeholder="..."
                  value={this.state.description}
                  onChange={this.update('description')} >
                </textarea>
              </div>
            </li>
            <li>
              <div className="list-number">7.</div>
              <div className="input-container">
                <label>Choose an image:</label>
                <input className="form-input-field"
                  value={this.state.img_url}
                  onChange={this.update('img_url')}
                  placeholder="..." />
              </div>
            </li>
          </ul>
          <button className="project-submit-button" onClick={this.handleSubmit}>
            {text}
          </button>
          {this.renderErrors()}
        </form>
      </div>
    );
  }

}

export default ProjectForm;
