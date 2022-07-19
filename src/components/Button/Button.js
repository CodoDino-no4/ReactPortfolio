import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="icon">
        <Link to="/blog">
          <div className={`icon-${this.props.name}`}></div>
        </Link>
      </div>
    );
  }
}

Button.propTypes = {
  name: propTypes.string.isRequired
};

export default Button;
