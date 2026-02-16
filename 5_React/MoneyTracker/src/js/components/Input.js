import { useState } from "react";

function Input({startCount, btnClass, step}) {
  const [count, setCount] = useState(startCount);
  let buttonClass = "btn-danger";

  function handleClick() {
    // alert("You clicked me!");
    setCount(count + step);
  }

  return (
    <input className={btnClass}>
     Добавить
    </input>
  );
}

export default Input;
