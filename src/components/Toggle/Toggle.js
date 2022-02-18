import React, { Component } from 'react';
import './Toggle.scss'

class Toggle extends Component {
  constructor() {
    super()
    this.state = {
    toggle: false
    }
  }
  
  toggleSwitch() { 
    this.setState({
    toggle: !this.state.toggle
    })
    
  }
  render() {
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={this.props.name}
          id={this.props.name}
          onClick={() => {this.toggleSwitch()}}
        />
        <label className="toggle-switch-label" htmlFor={this.props.name}>
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  }
}

export default Toggle;