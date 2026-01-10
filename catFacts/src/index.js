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
}, 5000);

function renderCatsFacts(randomCatsFacts){
    console.log(randomCatsFacts);

    const catsFactsCard = $(".cats-facts-info");
    const { fact } = randomCatsFacts;

    let facts_html = `<div>
                        <p>${randomCatsFacts.fact}<p>
                    </div>`;
    catsFactsCard.html(facts_html); 
}

// MY_TODO: сhange the images along with the facts
// MY_TODO: display a message indicating how long the fact will be displayed
// MY_TODO: make the display time depend on the length of the text