import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryId: 17,
      title: '',
      shortBlurb: '',
      deadline: '',
      fundingGoal: '',
      description: '',
      fundingRaised: 0,
      authorId: props.currentUser.id,
      imageFile: '',
      imageUrl: '',
      errored: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
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

  render() {
    const submitText = this.props.formType === 'new' ? "Make a wish" : "Rethink your wish";
    const headerText = this.props.formType === 'new' ? "Rub the Lamp" : "Edit your wish";
    // debugger
    const categories = this.props.categories.map( category => {
      return <option key={category.id} value={category.id}>{category.name}</option>;
    });
    return (
      <div className="new-project-container">
        <form className="new-project-form">
          <h1 className="new-project-header">{headerText}</h1>
          <ul className="input-list">
            <li>
              <div className="list-number">1.</div>
              <div className="input-container">
                <label>Choose a category:</label>
                <select className="category-dropdown"
                  value={this.state.categoryId}
                  onChange={this.update('categoryId')} >
                  {categories}
                </select>
              </div>
            </li>
            <li>
              <div className="list-number">2.</div>
              <div className="input-container">
                <label>Give your wish a title:</label>
                <input className="form-input-field"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="title..." />
              </div>
            </li>
            <li>
              <div className="list-number">3.</div>
              <div className="input-container">
                <label>Give your wish a short blurb:</label>
                <input className="form-input-field"
                  value={this.state.shortBlurb}
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
                    value={this.state.fundingGoal}
                    onChange={this.update('fundingGoal')}
                    placeholder="1000" />
                </div>
              </div>
            </li>
            <li>
              <div className="list-number">6.</div>
              <div className="input-container">
                <label>Tell your story:</label>
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

                <div className="upload-image-container">
                  <label className="upload-label">Conjure an image</label>
                  <img className="upload-image"
                    style={{display: (this.state.errored ? "none" : "")}}
                    onError={this.handleImageError}
                    src={this.state.imageUrl} />
                  <input className="upload-image-button"
                    type="file"
                    onChange={this.updateFile} />
                </div>
              </div>
            </li>
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
