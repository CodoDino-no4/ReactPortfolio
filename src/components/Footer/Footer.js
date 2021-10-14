import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="footer">
          <p>Copyright Alice Chambers</p>
        </div>
      </>
    );
  }
}
