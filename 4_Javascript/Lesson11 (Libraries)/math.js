// let num1 = 1200;
// let num2 =34;

// console.log(calc.div(num1,num2));

// let block = $(".block");

// let w = 300;
// let h = 200;

// if(block){
//     //block.style.width = "300px";
//     block.style.width = w + "px";
//     block.style.height = h + "px";
//     block.style.backgroundColor = "red";
// }

// let div = document.querySelector(".block");
// if(div){
//     div.innerHTML = '<h1> Я добавлен при помощи Jquery!! </h1>';
// }

// console.log($("#block"));

//передавать window / document без кавычек как объект:
// $(window).on("load", function () {
//   alert("Вся страница загрузилась");
// });

$(document).ready(function () {
  // ищет элемент/коллекцию заворачивает в объект своего формата и возвращает объект с содержащимися функциями
  $("#block").html("<h1>Я добавлен при помощи Jquery!!</h1>").css({
    width: "300px",
    height: "200px",
    backgroundColor: "red",
  });
  //   .fadeOut("slow", function () {
  //     console.log("Блок исчез!!");
  //   });

  $("#hide").click(function () {
    $("#block").slideToggle(1000, () => {
      if ($(this).html() == "Скрыть блок") {
        $(this).html("Открыть блок");
      } else {
        $(this).html("Скрыть блок");
      }
    });
  });

  //создание нового элемента:
  let a = $("<a href='https://google.com'></a>");
  //console.log (a);

  a.html("Link");
  a.text("Linkkk");

  $("body").append(a);

//   a.remove();
//   $("body").remove();
//   $("#block").remove();
//   $("div").remove("#block");

});
