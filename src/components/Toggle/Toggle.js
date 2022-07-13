import React, { Component } from 'react';
import './Toggle.scss';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  // Tells input if it is meant to be checked or not
  setActive = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <div className="icon">
        <label>
          <input
            className="check"
            checked={this.state.isActive}
            type="checkbox"
            onChange={this.setActive}
          />
          <div
            className={`icon-${this.props.name}`}
            onClick={this.props.clickHandler}
          >
            {this.state.isActive ? (
              <img src={this.props.dataOff} />
            ) : (
              <img src={this.props.dataOn} />
            )}
          </div>
        </label>
      </div>
    );
  }
}

export default Toggle;
