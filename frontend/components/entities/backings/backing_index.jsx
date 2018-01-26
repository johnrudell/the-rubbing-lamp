import React from 'react';

class BackingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId)
  }
}

export default BackingIndex;
