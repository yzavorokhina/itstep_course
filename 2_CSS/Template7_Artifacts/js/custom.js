let  totalPages = 0;

let currentPageIndex = 1;

function setSliderPagination(){
    $("#slider-pagination").html(`${currentPageIndex} из ${totalPages}`);
}


let leftBtn = "<svg id=\"slider-left\" width=\"26\" height=\"16\" viewBox=\"0 0 26 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\>" +
        "<path d=\"M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z\" fill=\"#899D9D\"/>" +
        "</svg>";
    let rightBtn = "<svg id=\"slider-right\" width=\"26\" height=\"16\" viewBox=\"0 0 26 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">" +
        "<path d=\"M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z\" fill=\"#899D9D\"/>" +
        "</svg>"

$(document).ready(function(){
    let options = {
        items: 4,
        margin: 30,
        nav: false,
        dots: false,
        slideBy : 4,
        navContainer: '.slider-nav',
        navText: [ leftBtn, rightBtn ], 
    }

    // $(".owl-carousel").owlCarousel(options);
    let owl = $('.owl-carousel');
    
    //Мобильная ширина
    var mobileWidth = 320;
    //Текущая ширина браузера
    var brouserWidth = $(window).width();
        console.log({ brouserWidth });

    //TODO Отображать навигацию кружочками по 4 шт
    if(brouserWidth <= mobileWidth) {
        options.items = 1;
        options.slideBy = 1;
        options.dots = true;
        options.dotsEach = 1;
        options.navText = false;
        console.log({ options });
        owl.owlCarousel(options);
    } else {
        owl.owlCarousel(options);
    }

    $("#slider-left").click(function(){
        owl.trigger('prev.owl.carousel');

        if(currentPageIndex > 1) {
            currentPageIndex--;
        }
        setSliderPagination();
    });

    $("#slider-right").click(function(){
        owl.trigger('prev.owl.carousel');

        if(currentPageIndex < totalPages) {
            currentPageIndex++;
        }
        setSliderPagination();
    });

    let totalCards = $(".owl-item").length; 
    totalPages = Math.ceil(totalCards / options.items);
    setSliderPagination();

    // $("#form-login").validate();

    const loginForm = document.querySelector('#form-login');

    if(loginForm){
        loginForm.addEventListener('submit', function(event){
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            this.classList.add('was-validated')
        });
    }
  });

  function validate(){
  
    //   event.preventDefault();
    //   event.stopPropogation();
      let isValid = true;
      let form = document.forms[0];

      let name = form.elements[0];
      let email = form.elements[1];

    //   let str = "Hi! My name is Julie. I'm 1 5 7 3 3 years old."
    //   console.dir(document.forms);

        // let regex = /\sJulie/;
        // let regex = /\d{2,}/; 
        // let regex = /\d\s\d\s\d\s/; 
        // let regex = /[A-Za-zА-Яа-я]{2,20}/; 

        let name_regex = /^[A-Za-zА-Яа-я]{2,20}\s[A-Za-zА-Яа-я]{0,20}$/;
        // console.dir(regex);
        let email_regex = /^[a-z_\-0-9]+@[a-z_\-0-9]+\.[a-z]{2,3}$/;

        name.classList.remove('is-invalid');
        if(!name_regex.test(name.value)){
            name.classList.add('is-invalid');
            isValid = false;
        } 

        email.classList.remove('is-invalid');
        if(!email_regex.test(email.value)){
            email.classList.add('is-invalid');
            isValid = false;
        }

        // let result = regex.test(str);
        // // if(result){
        // //     console.log(result);
        // // }
        // console.dir(result);

      return isValid;
  }