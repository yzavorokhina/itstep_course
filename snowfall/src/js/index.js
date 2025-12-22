import options from "./options";
import SnowFlake from './snowflake';
import rand from './rand';
import "../scss/custom.scss";

setInterval(() => {

  let snowflake = new SnowFlake(
    options.fonts[rand(0, options.fonts.length)],
    rand(0, options.maxWidth - 100),
    rand(0, options.maxHeight - 20),
    options.snowflakes[rand(0, options.snowflakes.length)]
  );

  //console.log(snowflake);
  snowflake.draw();
  snowflake.move(options.speeds[rand(0, options.speeds.length)]);

}, 100);