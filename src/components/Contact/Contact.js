import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-main">
                <div className="contact-top-container">
                    <div><Navbar/></div>
                    <div className="contact-form-container">

                      <div className="form-headline">
                        <h1>CONTACT ME</h1>
                      </div>
                      
                      <div className="input-container">
                        <div className="input-left">
                        <input type="text" id="input-name" placeholder="Name"/>
                        <input type="email" id="input-email" placeholder="Email address"/>
                        <input type="text" id="input-subject" placeholder="Subject"/>
                        </div>

                        <div className="input-right">
                        <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                        </div>
                      </div>
                      
                      <div className="submit-button"><h1>SUBMIT SOMETHING</h1></div>

                    </div>
                </div>
                </div>
                <div><Footer/></div>
            </div>
        );
    }
}

export default Contact;