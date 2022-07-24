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
        <div className="contact-container">
          <div className="headings">
            <h2>Lets connect...</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="contactColumn no1">
              <div className="row">
                <input type="text" required />
                <span>
                  <p>Name</p>
                </span>
              </div>
              <div className="row">
                <input type="text" required />
                <span>
                  <p>Email</p>
                </span>
              </div>
              <div className="row">
                <input type="text" required />
                <span>
                  <p>Company</p>
                </span>
              </div>
              <div className="row">
                <input type="text" required />
                <span>
                  <p>Location</p>
                </span>
              </div>
            </div>
            <div className="contactColumn no2">
              <div className="row">
                <textarea required></textarea>
                <span>
                  <p>Write your message here...</p>
                </span>
              </div>
              <div className="textAreaRow"></div>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </section>
    );
  }
}
