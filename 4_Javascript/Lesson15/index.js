/* Опциональная цепочка */

/* Например, есть какие-то несуществующие св-ва: */
// let user = {};

let users = [
  {
    address: {
      street: {
        name: "Ленина",
      },
    },
    isAdmin: function(){
        console.log("Я админ");
    }
  },
  {
    address: {},
  },
];

//console.log(user.address ? user.address.street? : null : null);
// если св-во Улица существует - то выведется
// console.log(user.address?.street?.name);

// let html = document.querySelector(".elem").innerHTML;

// let user = null; /* не объект */
// let str;
// console.log(str);

let addressName ="address";

for (let user of users) {
  //let street = user.address?.street?.name;
  //let street = user?.["address"]?.["street"]?.["name"];
  let street = user?.[addressName]?.["street"]?.["name"];

  if (street) {
    console.log(street);
  }
  /* без опциональной цепочки: */
  // if (user.address && user.address.street && user.address.street.name){
  //     console.log(user.address.street.name);
  // }

  user.isAdmin?.();

  user["address"]

}

/* Встроенный класс Дата и Время: */

function add(n1, n2 = 0) {
    return n1 + n2;
}
console.log(add(3,3));
console.log(add(3));

//let time = new Date(0);
let time = new Date("2026-02-17");
time = new Date(2026, 2, 17, 13, 29, 45);

let month = ["Январь", "Февраль", "Март", "Апрель"];

//console.log(time);
console.dir(time.getUTCFullYear());

console.dir(month[time.getMonth()]);

console.dir(time.setFullYear(2027));

console.log(time);

for (let i = 0; i < 10; i++){

   let day = time.getDate();
   day++;
   time.setDate(day);
   console.log(time);
}

console.log (Date.now());

