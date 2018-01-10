import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryId: "1",
      title: '',
      shortBlurb: '',
      deadline: '',
      fundingGoal: '',
      description: '',
      fundingRaised: 0,
      authorId: props.currentUser.id,
      imageFile: null,
      imageUrl: null,
    };
    // debugger
    // this.state = props.project;
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount(){
    if (this.props.match.params.projectId) {
      this.props.fetchProject(this.props.match.params.projectId)
    }
  }

  componentWillMount() {
    this.props.clearProjectErrors();
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.project && !this.props.project) {
      this.setState(nextProps.project)
    }
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const file = this.state.imageFile;

    const formData = new FormData();

    // remove unnecessary img_url column on backend db
    formData.append("project[image]", file)
    formData.append("project[img_url]", file)

    // formData.append("project[]", (this.state.categoryId))

    formData.append("project[category_id]", parseInt(this.state.categoryId))
    formData.append("project[title]", this.state.title)
    formData.append("project[short_blurb]", this.state.shortBlurb)
    formData.append("project[deadline]", this.state.deadline)
    formData.append("project[funding_goal]", parseInt(this.state.fundingGoal))
    formData.append("project[description]", this.state.description)
    formData.append("project[funding_raised]", this.state.fundingRaised)
    formData.append("project[author_id]", this.state.authorId)
    // formData.append("project[image_file]", this.state.imageFile)

    debugger

    if (this.props.formType === 'new') {
      this.props.createProject(formData).then( (project) => {
        return this.props.history.push(`/projects/${project.id}`);
      });
    } else {
      this.props.updateProject(formData).then( (project) => {
        return this.props.history.push(`/projects/${project.id}`);
      });
    }

  }

  update(field) {
    // debugger
    return e => {
      // debugger
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
          imageUrl: fileReader.result
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
                  onChange={this.update('categoryId')} >
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
                  onChange={this.update('shortBlurb')}
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
                    onChange={this.update('fundingGoal')}
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
                <div>
                  <img className="upload-image"
                    src={this.state.imageUrl} />
                </div>
                <input
                  type="file"
                  onChange={this.updateFile} />
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

  // <input className="form-input-field"
  //   value={this.state.img_url}
  //   onChange={this.update('img_url')}
  //   placeholder="..." />
}

export default ProjectForm;
