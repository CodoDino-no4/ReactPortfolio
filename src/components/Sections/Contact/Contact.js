import React, { Component } from 'react';
import './Contact.scss';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="contact">
        <h1>CONTACT</h1>
        <div className="container">
          <div className="contactForm">
            <div className="headings">
              <h2>Lets connect...</h2>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="contactColumn no1">
                <div className="row">
                  <input type="text" required />
                  <span>Name</span>
                </div>
                <div className="row">
                  <input type="text" required />
                  <span>Email</span>
                </div>
                <div className="row">
                  <input type="text" required />
                  <span>Company</span>
                </div>
                <div className="row">
                  <input type="text" required />
                  <span>Location</span>
                </div>
              </div>
              <div className="contactColumn no2">
                <div className="row">
                  <textarea required></textarea>
                  <span>Write your message here...</span>
                </div>
                <div className="row"></div>
              </div>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}
