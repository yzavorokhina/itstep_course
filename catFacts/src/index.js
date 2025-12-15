import $ from 'jquery';

let conn = new XMLHttpRequest();

conn.onerror = function(){
    console.log(`Не могу соединиться с целевым сервером`);
}

conn.onload = function(){
    if(this.status !== 200) {
        console.log(`Получен статус ответа ${this.status}. Ошибка!`);
        return;
    }
    console.log(this.response);
    renderCatsFacts(this.response);
}

setInterval( () => {
    conn.open('GET', 'https://catfact.ninja/fact');
    conn.responseType = 'json';
    conn.send();
    // changeRandomBackground();
    //changeCatsFacts();
}, 5000);

// let response = fetch ('https://catfact.ninja/fact');
// console.log(response);

function renderCatsFacts(randomCatsFacts){
    console.log(randomCatsFacts);

    const catsFactsCard = $(".cats-facts");
    const { fact } = randomCatsFacts;

    let facts_html = `<div>
                        <p>${randomCatsFacts.fact}<p>
                    </div>`;
    catsFactsCard.html(facts_html); 
}

// const factsString = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

//let jsonString = '[{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]';
//let javascriptArray = JSON.parse(jsonString);

//console.log(javascriptArray);
// Вывод: [{name: "Alice", age: 30}, {name: "Bob", age: 25}]

//console.log(javascriptArray[0].name); // "Alice"


// function changeCatsFacts(){

//     const rand = () => {
//         return Math.floor(Math.random() * (factsString.length - 1));
//     }

//     // console.log(rand());

//     $('[cats-facts]').each(function(){
//         $(this).css('backgroundColor', factsString[rand()]);

//     });
// }
// setInterval(changeCatsFacts,3000);


// async function fetchData(url) {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Fetch error:", error.message);
//     }
//   }
//   fetchData('https://');