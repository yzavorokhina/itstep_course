// TODO:
// Counter
// Описание: Счётчик с кнопками увеличения и уменьшения.
// Требования: - хранит значение в state - кнопки "+" и "−" - значение не может быть меньше 0
// (опционально)
// Ожидаемые навыки: - useState - обновление состояния
/*********************************************************************************************/

import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  let className = "btn-counter";

  const style = {
    buttonStylesPlus: {
      color: 'white',
      backgroundColor: 'orange',
      borderRadius: '5px'
    },
    buttonStylesMinus: {
      color: 'white',
      backgroundColor: 'turquoise',
      borderRadius: '5px'
    }
  }

  return(
    <>
      <div className="counter">
          <Button className={"btn-counter"} label="-" myStyle={style.buttonStylesMinus} handleClick={() => handleClick("-")} />
          <input type="text" value={count} readOnly={true}/>
          <Button className={"btn-counter"} label="+" myStyle={style.buttonStylesPlus} handleClick={() => handleClick("+")} />
      </div>
    </>
  )

  function handleClick(action) {
    if (action === "+") {
      setCount(count + 1);
    } else if (action === "-" && count > 0) {
      setCount(count - 1);
    }
  }
}
