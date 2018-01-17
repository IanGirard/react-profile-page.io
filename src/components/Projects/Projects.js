import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import screenShotOne from '../../assets/project-images/screenShotOne.png';
import screenShotTwo from '../../assets/project-images/screenShotTwo.png';
import screenShotThree from '../../assets/project-images/screenShotThree.png';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="projects-main">
                <div className="projects-top-container">
                    <div><Navbar/></div>
                    <div className="projects-main-container">
                      <div className="project-row-1">
                        <div className="row-1-left"><img src={screenShotThree} alt="screen-shot-three"/></div>
                        <div className="row-1-right"><h1>Title 1 Here</h1><p>Some text about the first project</p></div>
                      </div>
                      <div className="project-row-2">
                        <div className="row-2-left"><h1>Title 2 Here</h1><p>Some text about the second project</p></div>
                        <div className="row-2-right"><img src={screenShotOne} alt="screen-shot-one"/></div>
                      </div>
                      <div className="project-row-3">
                        <div className="row-3-left"><img src={screenShotTwo} alt="screen-shot-two"/></div>
                        <div className="row-3-right"><h1>Title 3 Here</h1><p>Some text about the first project</p></div>
                      </div>
                      </div>

                    </div>
                </div>
                <div><Footer/></div>
            </div>
        );
    }
}

export default Projects;