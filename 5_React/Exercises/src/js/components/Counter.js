import React from "react";
import { useState } from "react";
import Button from "./Button";


export default function Counter() {

    return(
        <div>
            <Button label="-" />
            <input type="text"></input>
            <Button label="+" />
        </div>
    )



  const [count, setCount] = useState(startCount);
  let buttonClass = "btn-counter";

  function handleClick() {
    setCount(count + step);
  }

  return (
    <button className={btnClass} onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
