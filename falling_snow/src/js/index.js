import '../scss/custom.scss';
import options from './options';
import SnowFlake from './snowflake';
import rand from './rand';

function rand(min, max){
    return Math.floor(Math.random() * (max - min) + min);

}

for(let i = 0; i < 100; i++){
    let snowflake = new SnowFlake(
        options.fonts[rand(0, options.fonts.length-1)],
        rand(0, options.maxWidth - 100), 
        rand(0, options.maxHeight),
        options.snowflakes[rand(0, options.snowflakes - 1)]);
    
    //console.log(snowflakes);
    snowflake.draw();
    snowflake.move();
}