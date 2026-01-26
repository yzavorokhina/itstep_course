// function Button({startCount, btnClass, step}) {
//   const [count, setCount] = useState(startCount);
//   let buttonClass = "btn-danger";

//   function handleClick() {
//     setCount(count + step);
//   }

//   return (
//     <button className={btnClass} onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// export default Button;

import React from "react";

const style = {
  buttonStyles: {
    color: 'white',
    backgroundColor: 'green'
  }
}

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return <button onClick={this.props.handleClick} style={{color:'red'}}>{this.props.label}</button>;
    return <button onClick={this.props.handleClick} style={style.buttonStyles}>{this.props.label}</button>;
  }
}
