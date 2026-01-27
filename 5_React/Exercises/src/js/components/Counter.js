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
  let buttonClass = "btn-counter";

  return(
      <div className="counter">
          <Button label="-" onClick={handleClick} />
          <input type="text" value={count} />
          <Button label="+" onClick={handleClick} />
      </div>
  )

  function handleClick() {
    setCount(count + 1);
  }
}
