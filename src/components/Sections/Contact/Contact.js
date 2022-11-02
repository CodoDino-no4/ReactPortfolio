import React, { useState } from 'react';
import './Contact.scss';

function Contact() {
  const [contactInput, setContactInput] = useState({
    name: '',
    email: '',
    company: '',
    location: '',
    message: ''
  });

  const handleChange = (event) => {
    setContactInput({
      ...contactInput,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInput);
  };

  return (
    <section className="contact">
      <h1>CONTACT</h1>
      <div className="contact-container">
        <div className="headings">
          <h2>Lets connect...</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="contactColumn no1">
            <div className="row">
              <input
                type="text"
                value={contactInput.name}
                onChange={handleChange}
                required
              />
              <span>
                <p>Name</p>
              </span>
            </div>
            <div className="row">
              <input
                type="text"
                value={contactInput.email}
                onChange={handleChange}
                required
              />
              <span>
                <p>Email</p>
              </span>
            </div>
            <div className="row">
              <input
                type="text"
                value={contactInput.company}
                onChange={handleChange}
                required
              />
              <span>
                <p>Company</p>
              </span>
            </div>
            <div className="row">
              <input
                type="text"
                value={contactInput.location}
                onChange={handleChange}
                required
              />
              <span>
                <p>Location</p>
              </span>
            </div>
          </div>
          <div className="contactColumn no2">
            <div className="row">
              <textarea
                value={contactInput.message}
                onChange={handleChange}
                required
              ></textarea>
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

export default Contact;
