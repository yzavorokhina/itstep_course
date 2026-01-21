import { useState } from "react";

function Button({startCount, btnClass, step}) {
  const [count, setCount] = useState(startCount);
  let buttonClass = "btn-danger";

  function handleClick() {
    // alert("You clicked me!");
    setCount(count + step);
  }

  return (
    <button className={btnClass} onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default Button;
