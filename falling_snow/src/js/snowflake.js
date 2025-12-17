import options from "./options";
import rand from './rand';
import (snowflake)

class SnowFlake {
  constructor(size, left, top, snowflake) {
    this.size = size;
    this.left = left;
    this.top = top;
    this.snowflake = snowflake;

    this.maxLeft = this.left - options.limit;
    this.maxRight =this.left + options.limit;

    this.element = document.createElement("span");
    this.element.innerHTML = snowflake;
    this.element.classList.add("snowflake");
    this.element.style.fontSize = `${this.size}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }

  draw() {
    document.body.append(this.element);
    console.log(this.element);
   
  }

  move(speed) {
    let count = 0;
    let interval = setInterval(() => {
      if (this.top <= options.maxHeight) {
        this.top += speed;
        //console.log(this.top);
        this.element.style.top = `${this.top}px`;
        if (count == 10){
            this.left = rand( this.maxLeft, this.maxRight);
            this.element.style.left = `${this.left}px`;
        }
        
      } else {
        this.element.remove();
        clearInterval(interval);
      }
      count++;
    }, 500);
  }
}

export default SnowFlake;
