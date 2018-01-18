import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-main">
                <ul className="navbar-list">
                    <li className="about-link"><a href="https://iangirard.github.io/react-profile-page.io/">HOME</a></li>
                    <li className="projects-link"><a href="https://iangirard.github.io/react-profile-page.io/projects">PROJECTS</a></li>
                    <li className="contact-link"><a href="https://iangirard.github.io/react-profile-page.io/contact">CONTACT</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;