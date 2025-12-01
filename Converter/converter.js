let currencyList = document.querySelector(".currency-list");

let div = document.createElement('div');
div.classList.add('currency-input');
div.alt = 'currency';

let span = document.createElement('span');
span.classList.add('loaderMessage');
span.innerText = "USD";

currencyList.append(div);
currencyList.append(span);

let myHeaders = new Headers();
myHeaders.append("apikey", "zzWFU0fTvMU39qWWBGbt9pvoY0ILBOlo");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

fetch("https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,RUB,BYN", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result));


async function load(){
    try {
        let inputs = [...document.querySelectorAll(".currency-value input")];
        let response = await fetch ('https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,RUB,BYN');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const { quotes } = data;

        let courses = {
            "quotes" : {
                "USDBYN" : 2.901379,
                "USDEUR" : 0.86013,
                "USDRUB" : 77.723991
            },
            "name" :
            // ...
        }
        
        console.log({ data });
    
        return `<input style='height:400px; width:auto; class="currency">${quotes}</input>`;
        
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

setTimeout(async () => {
    try {
        const сurrency_html = await load();
        message.innerHTML = сurrency_html;

    } catch (error) {

        message.innerText = error.message;

    } finally {
        currencyList.append(message);
        document.querySelector(".currency").remove();
        document.querySelector(".currencyMessage").remove();
    }
}, 1000);


let currency = JSON.parse(window.localStorage.getItem('quotes'));
console.log(quotes);
if(!quotes){
    quotes = [];
}

function renderList(){
    const list = $(".currency-input");
    list.html(null);

    quotes.forEach(function(item){
        addCurrencyToInput(item);   
    });
}

function addCurrencyToInput(currency){
    const input = $(".currency-input");
    const li = $(`<li class="${currency.name}">${currency.quotes}</li>`);

currencyList.append(li);  