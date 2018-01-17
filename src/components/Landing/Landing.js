import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import backgroundImage from '../../assets/images/sebastien-gabriel-232358.jpg';
// import screenShotOne from '../../assets/project-images/screenShotOne.png';
// import screenShotTwo from '../../assets/project-images/screenShotTwo.png';
// import screenShotThree from '../../assets/project-images/screenShotThree.png';


class Landing extends Component {
    render() {
        return (
            <div>
              <div className="landing-main">
              <div className="landing-top-container">
                <div><Navbar/></div>
                <div className="landing-hero-container">
                    <div className="landing-hero-title">IAN KEINERT GIRARD</div>
                    <div className="landing-hero-subtitle">Full Stack Web Developer</div>
                    <div className="landing-hero-intro">Lorem ipsum dolor sit amet, at nec iuvaret neglegentur. Vim an iuvaret sententiae signiferumque, pro in blandit nominati sadipscing. Te eros inermis docendi nam. At lorem verear regione qui, per noster voluptatum ne, abhorreant percipitur assueverit vim ea. Dolorem blandit ea ius.</div>
                </div>
              </div>
              </div>
              {/* <div className="main-content-conatiner">
                <h1 className="main-content-title">Projects</h1>
                <div className="main-content-box-container">
                    <div className="main-content-box"><img src={screenShotOne} alt="screen-shot-one"/></div>
                    <div className="main-content-box"><img src={screenShotTwo} alt="screen-shot-two"/></div>
                    <div className="main-content-box"><img src={screenShotThree} alt="screen-shot-"/></div>
                </div>
              </div> */}
              <div><Footer/></div>            
            </div>
        );
    }
}

export default Landing;