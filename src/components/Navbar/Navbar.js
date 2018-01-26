import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-main">
                <ul className="navbar-list">
                    <li className="about-link"><a href="http://localhost:3000/#/">HOME</a></li>
                    <li className="projects-link"><a href="http://localhost:3000/#/projects">PROJECTS</a></li>
                    <li className="contact-link"><a href="http://localhost:3000/#/contact">CONTACT</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;