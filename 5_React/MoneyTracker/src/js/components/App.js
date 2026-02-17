import { useState, useEffect } from "react";
import H1 from "./headers/H1";
import H2 from "./headers/H2";
import H3 from "./headers/H3";

function uid() {
  return `${Date.now}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const savedMoneyRecords = window.localStorage.getItem("moneyRecords");

  const [moneyRecords, setMoneyRecords] = useState(savedMoneyRecords ? JSON.parse(savedMoneyRecords) : []);

  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [moneyOut, setMoneyOut] = useState("");
  const [moneyIn, setMoneyIn] = useState("");

  const [totalMoneyOut, setTotalMoneyOut] = useState(0);
  const [totalMoneyIn, setTotalMoneyIn] = useState(0);
  const [totalMoneyLeft, setTotalMoneyLeft] = useState(0);

  function calculateTotalSum() {
    const totalMoneyOut = moneyRecords.reduce((sum, item) => { return +sum + +item.moneyOut }, 0);
    const totalMoneyIn = moneyRecords.reduce((sum, item) => { return +sum + +item.moneyIn }, 0);
    setTotalMoneyOut(totalMoneyOut);
    setTotalMoneyIn(totalMoneyIn);

    setTotalMoneyLeft(totalMoneyIn - totalMoneyOut);
  }

  function addNewMoneyRecord(event) {
    event.preventDefault();
    const newMoneyRecords = [...moneyRecords, { id: uid(), date: date, text: text, moneyOut: moneyOut, moneyIn: moneyIn, status: false }];
    setMoneyRecords(newMoneyRecords);
    console.log(moneyRecords);
    setText("");
    calculateTotalSum();
  }

  function deleteMoneyRecord(moneyRecordId) {
    if (confirm("Вы действительно хотите удалить эту запись?")) {
      const newMoneyRecords = moneyRecords.filter((moneyRecord) => {
        if (moneyRecord.id != moneyRecordId) {
          return moneyRecord.id != moneyRecordId;
        }
      });
      setMoneyRecords(newMoneyRecords);
    }
  }

  useEffect(() => {
    window.localStorage.setItem("moneyRecords", JSON.stringify(moneyRecords));
    calculateTotalSum();
  }, [moneyRecords]);

  return (
    <>
      <div className="blocks-wrapper">
        <div className="block1">
          <H1>Money Tracker</H1>
          <form action="" className="form" onSubmit={addNewMoneyRecord}>
            <input
              type="date"
              placeholder="Введите дату..."
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              id="description"
              maxLength="62"
              type="text"
              placeholder="Описание"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              id="sum"
              type="number"
              placeholder="Сумма расхода"
              value={moneyOut}
              onChange={(e) => setMoneyOut(e.target.value)}
            />
            <button type="submit" className="button">
              Добавить в расходы
            </button>

            <input
              id="incoming"
              type="number"
              placeholder="Сумма дохода"
              value={moneyIn}
              onChange={(e) => setMoneyIn(e.target.value)}
            />
            <button type="submit" className="button">
              Установить новую сумму
            </button>
          </form>
        </div>
        <div className="block2">
          <H2>Расходы:</H2>
          <ul className="list">
            <li className="item">
              <span style={{ width: '140px', textAlign: 'center', color: '#419e87' }}>Дата</span>
              <span style={{ width: '140px', textAlign: 'left', color: '#419e87' }}>Описание</span>
              <span style={{ width: '140px', textAlign: 'center', color: '#419e87' }}>Сумма расхода</span>
              <span style={{ width: '140px', textAlign: 'center', color: '#419e87' }}>Сумма дохода</span>
              <span style={{ width: '140px', textAlign: 'center', color: '#419e87' }}>Удалить</span>
            </li>
            {moneyRecords.length > 0 ? (
              <>
                {moneyRecords.map(function (moneyRecord) {
                  return (
                    <li className="item" key={moneyRecord.id}>
                      <span style={{ width: '140px', textAlign: 'center' }}>{moneyRecord.date}</span>
                      <span style={{ width: '140px', textAlign: 'left' }}>{moneyRecord.text}</span>
                      <span style={{ width: '140px', textAlign: 'center' }}>{moneyRecord.moneyOut}</span>
                      <span style={{ width: '140px', textAlign: 'center' }}>{moneyRecord.moneyIn}</span>
                      <button style={{ width: '140px', textAlign: 'center' }}
                        onClick={() => {
                          deleteMoneyRecord(moneyRecord.id);
                        }}
                      >
                        ❌
                      </button>
                    </li>
                  );
                })}

              </>
            ) : (
              <li className="item">
                <span>Список расходов пуст</span>
              </li>
            )}
            <li className="item">
              <span style={{ width: '140px', textAlign: 'center', color: '#419e87' }}>Итого: </span>
              <span style={{ width: '140px', textAlign: 'center' }}></span>
              <span style={{ width: '140px', textAlign: 'center' }}>{totalMoneyOut}</span>
              <span style={{ width: '140px', textAlign: 'center' }}>{totalMoneyIn}</span>
              <span style={{ width: '140px', textAlign: 'center' }}></span>
            </li>
            <li className="item">
              <span style={{ width: '140px', textAlign: 'center', color: '#419e87' }}>Остаток: </span>
              <span style={{ width: '140px', textAlign: 'center' }}></span>
              <span style={{ width: '140px', textAlign: 'center' }}></span>
              <span style={{ width: '140px', textAlign: 'center' }}>{totalMoneyLeft}</span>
              <span style={{ width: '140px', textAlign: 'center' }}></span>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
}
