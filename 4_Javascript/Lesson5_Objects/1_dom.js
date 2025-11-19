class HTMLElement {
  constructor(name) {
    this.name = name;
    this.id = null;
    this.style = {};
    this.classList = {
      //class="uv hxu uhu"
      classes: [],
      addValue: function (...classNames) {
        for (let className of classNames) {
          this.classes.push(className);
        }
      },
      deleteValue: function (...classNames) {
        //... - оператор расширения для
        //функций с переменным числом параметров, собирает их в массив

        for (let className of classNames) {
          let index = this.classes.indexOf(className);
          console.log(this.classes);

          if (index > -1) {
            this.classes.splice(index, 1);
          }
        }
      },
    };
  }
  addStyle(name, value) {
    this.style[name] = value;
  }

  getStyleList(){

    let styles = '';

    // Object.keys(this.style){   //Object встроенный класс с методом
        for(let key of Object.keys(this.style)){
            let styleName = key;
            let styleValue = this.style[key];
            let styleString = `${styleName}:${styleValue};`;
            styles += styleString;
        }
        return styles? ` style="${styles}"` : '';
    }

  getClassList() {
    //<div class="block"></div>
    //return ` class="${this.classList.classes.join(' ')}"`;
    return this.classList.classes.length > 0
      ? ` class="${this.classList.classes.join(" ")}"`
      : "";
  }

  renderHTML() {
    //<div class="block"></div>
    //if(this.classList.classes.length == 0){
    //return `<${this.name}> </${this.name}>`;
    //}
    return `<${this.name}${this.getClassList()}${this.getStyleList()}></${this.name}>`;
  }
  drawHTML(){
      document.body.insertAdjacentHTML('afterbegin', this.renderHTML());
  }
}
const div = new HTMLElement("div");
div.id = "block";
div.classList.addValue("container", "main-section", "colored");
console.log(div);
//div.classList.deleteValue("class1", "class2", "class3");
//div.classList.deleteValue("superclass");
div.classList.deleteValue("colored");
div.addStyle("height", "100vh");
div.addStyle("background-color", "red");
div.drawHTML();

class HTMLRefElement extends HTMLElement {
  // constructor(name){
  //     this.name = name;
  //     this.id = null;
  //     this.style = [];
  //     this.classList = {};
  //     this.href = '';
  // }

  constructor(href) {
    super("a");
    this.href = href;
  }
}
const a = new HTMLRefElement("https://google.com");
a.id = "external_link";
//console.log(a);
//console.log(a.renderHTML());

class Style {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}
