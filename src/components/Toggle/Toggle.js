import React, { Component } from 'react';
import './Toggle.scss';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

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
          />
          <div className={`icon-${this.props.name}`} onClick={this.setActive} />
        </label>
      </div>
    );
  }
}

export default Toggle;

// const App = () => {
//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//   };

//   return (
//     <div>
//       <Checkbox
//         label="My Value"
//         value={checked}
//         onChange={handleChange}
//       />

//       <p>Is "My Value" checked? {checked.toString()}</p>
//     </div>
//   );
// };

// const Checkbox = ({ label, value, onChange }) => {
//   return (
//     <label>
//       <input type="checkbox" checked={value} onChange={onChange} />
//       {label}
//     </label>
//   );
// };

// export default App;
