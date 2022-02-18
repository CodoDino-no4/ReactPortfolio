import React, { Component } from 'react';
import './Toggle.scss';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  // toggleSwitch() {
  //   this.setState(
  //     {
  //       toggle: !this.state.toggle
  //     },
  //     () => {
  //       console.log(this.state.toggle);
  //     }
  //   );
  // }
  render() {
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={this.props.name}
          id={this.props.name}
        />
        <label className="toggle-switch-label" htmlFor={this.props.name}>
          <span
            className="toggle-switch-inner"
            data-on={this.props.on}
            data-off={this.props.off}
          />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  }
}

export default Toggle;
