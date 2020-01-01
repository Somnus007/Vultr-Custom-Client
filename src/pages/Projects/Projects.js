import React from 'react';
import './Projects.scss';
// import service from '../../services';
// import { AccountUrl } from '../../constants/Url';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // async componentDidMount() {
  //   const res = await service.get(AccountUrl.AUTH_INFO);
  //   console.log(res);
  // }

  render() {
    return (
      <div className="projects-container">
        <h3>Projects Page</h3>
      </div>
    );
  }
}

export default Projects;
