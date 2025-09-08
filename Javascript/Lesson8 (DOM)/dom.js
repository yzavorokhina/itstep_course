// console.log(window);

// alert('jufvfu');

// function my_super_func(){
//     console.log(`Версия браузера ${window.navigator.appVersion}`);
//     for (let plugin of window.navigator.plugins){
//         console.log(`Плагин ${plugin.name}`);
//     }
// }

// my_super_func();
// let url = prompt ("Введите URL");
// if (confirm(`Вы действительно хотите перейти по адресу ${url}?`)){
//     window.location.href = url;
// }
// let reload = function(){location.reload()};
// setInterval(reload, 5000);

// console.log(window.window.window);

//console.log(document);
// console.dir(document);
// document.body.style.backgroundColor = "green";
// console.log(document.title);

// let html = document.children[0]; // html
// let body = html.children[1]; // body
// let h1 = body.children[0]; //

// let text = document.children[0].children[1].children[0].innerText;

// console.log(text);

// let html = document.children[0]; // html
// let body = html.children[1]; // body
// let a = body.children[1];
// let aHref = a.href;

// let aHref = document.children[0].children[1].children[1].href;

// console.log(aHref);
// console.dir(a);

// let url = a.href;
// let url = document.children[0].children[1].children[1].href;

// location.replace(url);

/**
<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
*/

// console.dir(document);
// let html = document.children[0]; // html
// let body = html.children[1]; // body
// let div = body.children[1];
// let ul = body.children[1];

// document.body.children[0];
// console.log(document.body.children[0]);


// //let h1 = document.body.children[0] = 'h2';
// document.body.children[0] = 'h2';

//console.dir(document.body.children[2].tBodies[0]);
//console.dir(document.body.children[2].rows);


// console.dir(document.body.children[2]);
// let table = document.body.children[2];

// for(let row of table.rows){
//     console.log(row.cells[0].innerText);
// }

let table = document.body.children[2];

// console.dir(table);

for(let i = 0; i < table.rows.length; i++){

    // console.log(table.rows[i]);
    let row = table.rows[i];
    
// if( i == 0) {
//     table.rows[i].style.backgroundColor = "yellow";
// }

    for(let j = 0; j < row.cells.length; j++){


        // table.rows[0].cells[j].style.backgroundColor = "green";
        if(j == i){
            table.rows[i].cells[j].style.backgroundColor = "red";
            table.rows[i].cells[j].style.color = "white";
            table.rows[i].cells[j].style.fontSize = "20px";
            table.rows[i].cells[j].innerText = "X";
            table.rows[i].cells[j].TextContent = "Y";
            table.rows[i].cells[j].hidden = "true";
        }
    }
};

table.rows[0].style.backgroundColor = "yellow";

