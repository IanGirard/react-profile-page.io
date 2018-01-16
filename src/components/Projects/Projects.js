import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="projects-main">
                <div className="projects-top-container">
                    <div><Navbar/></div>
                    <div className="projects-main-container">
                      <div className="project-row-1">
                        <div className="row-1-left"></div>
                        <div className="row-1-right"></div>
                      </div>
                      <div className="project-row-2">
                        <div className="row-2-left"></div>
                        <div className="row-2-right"></div>
                      </div>
                      <div className="project-row-3">
                        <div className="row-3-left"></div>
                        <div className="row-3-right"></div>
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