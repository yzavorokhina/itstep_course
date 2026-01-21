import '../scss/index.scss';
import { createRoot } from 'react-dom/client';
import App from './components/App.js'

let element = document.querySelector(".todo");

let rootElement = createRoot(element);
rootElement.render(<App />);


// import $ from 'jquery';
// import { v4 as uuidv4 } from 'uuid';
// import Task from './components/Task.js';


// let tasks = JSON.parse(window.localStorage.getItem('tasks'));
// if(!tasks){
//     tasks = [];
// }

// function renderList(){
//     const list = $(".tasks");
//     list.html(null);

//     tasks.forEach(function(item){
//         addTaskToList(item);   
//     });
// }

// function addTaskToList(task){
//     const list = $(".tasks");
//     const li = $(`<li class="${task.status}">${task.name}</li>`);
//     const doneButton = $('<button>Выполнить</button>');
//     doneButton.click(() => {
//         tasks.forEach((item, index, tasks) => {
//             if(item.id == task.id){

//                 tasks[index].status = 'done';
//             }
//         });
//         window.localStorage.setItem('tasks', JSON.stringify(tasks));
//         renderList();
//     });

//     const removeButton = $('<button>Удалить</button>');
//     removeButton.click(() =>{

//         if(confirm('Вы действительно хотите удалить задачу?')){
//             tasks.forEach((item, index, tasks) => {
//                 if(item.id == task.id){
//                     tasks.splice(index, 1);
//                 }
//             });
//             window.localStorage.setItem('tasks', JSON.stringify(tasks));
//             renderList();
//         }
//     })

//     li.append(doneButton);
//     li.append(removeButton);
//     list.append(li);  
// }

// $("#add-task").click(function(){
//     let text = $("#task").val();
//     $("#task").val(null);
//     if(!text){
//         alert('Введите название задачи');
//         return;
//     }
//     const task = new Task(uuidv4(), text, 'in-progress');
//     tasks.push(task);
//     addTaskToList(task);
//     window.localStorage.setItem('tasks', JSON.stringify(tasks));
// });

// renderList();