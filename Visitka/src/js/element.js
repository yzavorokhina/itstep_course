class Element {
    constructor(elementName){
        this.name = elementName;
        this.id = '';
        this.classes = [];
        //this.classes = [1,2,3];
        this.children = [];
        this.css = [];
    }

    setId(id){
        this.id = id;
    }

    addClasses(...classes){  // ["class1", "class2"]
        // for (let classEl of classes){
        //     this.classes.push(classEl);
        // }
        this.classes = [...this.classes, ...classes];
        //this.classes = [1,2,3, ...classes];
    }

    removeClasses(...classes){
        for (let c of classes){
            let index = this.classes.indexOf(c);

            if(index != -1){
                this.classes.splice(index, 1);
            }
        }
    }

    // function summ(...params){
    //     let result = 0;
    //     for (let param of params){
    //         result += param;
    //     }

    //     return result;
    // }

    // console.log(summ(2,3));
    // console.log(summ(2,3,4));

    render(parentElement){
    let el = document.createElement(this.name);
    el.id = this.id;

    for (let c of this.classes){
        el.classList.add(c);
    }

    console.dir(el);
    parentElement.append(el);

    //parentElement.append(document.createElement(this.name));
    }

}

export default Element;

