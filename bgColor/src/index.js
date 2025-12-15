import $ from 'jquery';

const bgColors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

function changeBgColor(){

    const rand = () => {
        return Math.floor(Math.random() * (bgColors.length - 1));
    }

    // console.log(rand());

    $('[data-colored]').each(function(){
        $(this).css('backgroundColor', bgColors[rand()]);

    });
}

setInterval(changeBgColor,3000);