import $ from 'jquery';
import '../scss/custom.scss';

let conn = new XMLHttpRequest();

//XPathResult.open(method, URL) - инициализация
//conn.open('GET', 'https://punkapi.online/v3/beers/random');

//xhr.send([body]) for POST
// conn.send();
//xhr.getResponseHeader

//получение ответа:
//load/error/progress

conn.onerror = function(){
    console.log(`Не могу соединиться с целевым сервером`);
}

conn.onload = function(){
    // console.log(this);
        if(this.status !== 200) {
            console.log(`Получен статус ответа ${this.status}. Ошибка!`);
            return;
        }
    //console.log(this.response);
    //let beer = JSON.parse(this.response);
    renderBeerCard(this.response);
}

setInterval( () => {
    conn.open('GET', 'https://punkapi.online/v3/beers/random');
    conn.responseType = 'json';
    conn.send();
}, 5000);

function renderBeerCard(beer){
    console.log(beer);
   //Image.src= `https://punkapi.online/v3/images/${beer.image}`;
document.body.innerHTML = `img style="width:100px" src="https://punkapi.online/v3/images/${beer.image}" alt"${beer.name}" />`;

}

const catalog = JSON.parse(beer);

// const beer_list = $("#catalog");

// window.add_to_cart = function(beer_id){
//     console.log(beer_id);
// };

catalog.forEach((beer) => {
    let beer_html = `<div class="col-4">
                            <div class="card mb-3">
                                <img src="${beer.image}" class="card-img-top" alt="foto">
                                <div class="card-body">
                                    <h5 class="card-title">${beer.name}</h5>
                                    <p class="card-text">${beer.description}</p>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-primary">Подробнее</button>
                                        <button type="button" class="btn btn-success" onclick="add_to_cart(${product.id})">В корзину</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;

    beer_list.append(beer_html);
});

// let cart = window.localStorage.getItem('cart');

// if(!cart) {
//     cart = [];
// }

// $("#cart-count").html(cart.length);