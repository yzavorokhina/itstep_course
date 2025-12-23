class Light {
  constructor(color, left, height) {
    this.color = color;
    this.left = left;
    this.height = height;
    this.element = null;
  }

  draw() {

    let code = `<div class="light" style="left:${this.left}px">
                        <div class="wire" style="height: ${this.height}px"></div>
                        <div class="socket"></div>
                        <div class="lamp" style="background-color:rgb(${this.color.red},
                                                                   ${this.color.green},
                                                                   ${this.color.blue});
                          box-shadow:0px 0px 24px 11px rgba(${this.color.red},
                                                            ${this.color.green},
                                                            ${this.color.blue},0.75)">
                        </div>
                    </div>`;

    const template = document.createElement('template');

    template.innerHTML = code;

    const fragment = template.content;

    this.element = fragment.firstElementChild;

    document.body.append(this.element);

    this.element = this.element.children[2];

  }


  setColor(color) {

    this.color = color;

    this.element.style.backgroundColor = `rgb(${this.color.red}, ${this.color.green}, ${this.color.blue})`;

    this.element.style.boxShadow = `0px 0px 24px 11px rgba(${this.color.red}, ${this.color.green}, ${this.color.blue},0.75)`;

    return this;
  }
}

export default Light;