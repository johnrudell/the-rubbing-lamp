import React from 'react';
import { Link } from 'react-router-dom';
import BackingFormContainer from './backing_form_container';

class BackingIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId)
  }

  render() {
    const { project, currentUser } = this.props;

    if (!project) return null;

    const rewards = project.rewards.map(reward => {
      return (
        <BackingFormContainer
          key={reward.id}
          reward={reward}
          project={project} />
      );
    });

    return (
      <div className="backing-index">
        <header className="b-index-header">
          <h1 className="b-index-title">
            <Link className="decolor-link" to={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </h1>
          <h4 className="b-index-author">by {currentUser.username}</h4>
        </header>

        <section className="b-index-content">
          <div className="b-index-left">
            <h2>Support this project</h2>
            {rewards}
          </div>

          <div className="b-index-right">
            <h5>The Rubbing Lamp is not a store.</h5>
            <h6>It's a way to make wishes come true.</h6>
            <p>The Rubbing Lamp does not guarantee wishes or investigate a creator's
              ability to complete their wish. It is the responsibility of the
              wish creator to complete their wish as promised, and the
              claims of this wish are theirs alone.</p>
          </div>
        </section>

      </div>
    );
  }

}

export default BackingIndex;
