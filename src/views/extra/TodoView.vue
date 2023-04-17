<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  components: {},
})
export default class TodoView extends Vue {
//   // объявляем переменные, прописываем константы, обрабатываем даты
//   const lang = navigator.language;
//   const d = new Date();
//   let month = d.toLocaleString(lang, {month: 'long'})
//   let year = d.getFullYear();
//   let daynumber = d.getDate();
//   let dayname = d.toLocaleString(lang,{weekday: 'long'});
//
//   document.querySelector('.month').innerHTML = month + ', ' + year;
//   document.querySelector('.data').innerHTML = dayname + ', ' + daynumber;
//
//   const taskinput = document.querySelector('.task-input');
//   const taskaddbtn = document.querySelector('.add-task-btn');
//   let filter = document.querySelectorAll('.task-menu-container span');
//   const todos = JSON.parse(localStorage.getItem("todo-list") || "[]");
//   let UpdateId;
//   let isUpdate = false;
//
// // делаем рабочим меню выбора тасков: All, Pending, Completed
//   filter.forEach(btn=>{
//   btn.addEventListener('click',()=>{
//   document.querySelector('span.active').classList.remove('active');
//   btn.classList.add('active');
//   showTodos(btn.id);
// })
// })
//
// // отображаем ВСЕ таски
// function showTodos(filter){
//   document.querySelectorAll(".task-list").forEach(todo => todo.remove());
//   let liTag = '';
//   todos.forEach((todo,id)=>{
//     let isCompleted = todo.status === 'completed'? 'checked': '';
//     if (filter === todo.status || filter === 'all'){
//       liTag += `<div class="task-list">
//                 <label for="${id}">
//                     <input onclick="taskcomplete(this)" type="checkbox" id="${id}" class="checkbox" onclick="taskcomplete(this)" ${isCompleted}>
//                     <h3 class="task ${isCompleted}">${todo.name}</h3>
//                 </label>
//                 <span onclick="editTask(${id},'${todo.name}')" class="edit-btn"> Edit</span>
//                 <span onclick="deleteTask(${id})" class="delete-btn"> Delete</span>
//             </div>`;
//     }
//   });
//   document.querySelector('.task-list-container').innerHTML = liTag || `
//         <span><i class="fa-clipboard-list"></i></span>
//         <span class='no-task-message'>No task here yet</span>`;
// }
// showTodos('all');
//
// // указываем что делать, когда таска введена и нажата кнопочка "+"
// taskaddbtn.addEventListener('click',e=>{
//   if(taskinput.value !== ''){
//     let userTask = taskinput.value;
//     if(!isUpdate){
//       let taskinfo = {name:userTask,status:'pending'};
//       todos.push(taskinfo);
//     }else{
//       isUpdate = false;
//       todos[UpdateId].name = userTask;
//     }
//     localStorage.setItem("todo-list",JSON.stringify(todos));
//     taskinput.value = '';
//     showTodos('all');
//   }
//   let divlist = document.querySelectorAll('.task-list').length;
//   document.querySelector('.number-of-tasks').innerHTML = divlist + ' Tasks';
// });
//
// // при установки галочки возле таски (что таска выполнена) => активируем перечеркивание таски и отображение в Completed
// function taskcomplete(elem){
//   if(elem.checked){
//     elem.nextElementSibling.classList.add('checked');
//     todos[elem.id].status = 'completed';
//   }else{
//     elem.nextElementSibling.classList.remove('checked');
//     todos[elem.id].status = 'pending';
//   }
//   localStorage.setItem("todo-list",JSON.stringify(todos));
// }
//
// // настраиваем кнопочку Delete для таска
// function deleteTask(deleteId){
//   todos.splice(deleteId, 1);
//   localStorage.setItem("todo-list", JSON.stringify(todos));
//   showTodos('all');
//   let divlist = document.querySelectorAll('.task-list').length;
//   document.querySelector('.number-of-tasks').innerHTML=divlist + ' Tasks';
// }
//
// // настраиваем кнопочку Edit для таска
// function editTask(taskId,taskName){
//   isUpdate = true;
//   UpdateId = taskId;
//   taskinput.value = taskName;
//   taskinput.focus();
// }
//
// // настраиваем кнопочку Clear all для всех тасков
// document.querySelector('.clear-all-btn').addEventListener('click',()=>{
//   todos.splice(0,todos.length);
//   localStorage.setItem("todo-list", JSON.stringify(todos));
//   showTodos('all');
//   let divlist = document.querySelectorAll('.task-list').length;
//   document.querySelector('.number-of-tasks').innerHTML = divlist + ' Tasks';
// });
//
// // пересчитываем количество тасков
// let divlist = document.querySelectorAll('.task-list').length;
// document.querySelector('.number-of-tasks').innerHTML = divlist + ' Tasks';
//
}
</script>

<template>
  <div class="todo">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.todo') }}
    </h1>
    <line></line>
    <h1>{{ $t('login.h1') }}</h1>
    <div class="container">
      <div class="data-container">
        <h1 class="data">Friday, 30th</h1>
        <h5 class="month">April</h5>
        <h1 class="number-of-tasks">0 Tasks</h1>
      </div>
      <!--    Вставлять Задачи (Таски) будем в этот див-->
      <div class="task-list-container"></div>
      <div class="task-menu-container">
        <span id="all" class="active">All</span>
        <span id="pending">Pending</span>
        <span id="completed">Completed</span>
        <button class="clear-all-btn">Clear all</button>
      </div>
      <div class="input-div">
        <input type="text" class="task-input" placeholder="Enter Your Task" autofocus>
        <button class="add-task-btn">+</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo {
  flex: 1 0 auto;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
  .container{
    height: 450px;
    width: 320px;
    background: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    display: flex;
    position: relative;
    margin: 1rem auto;
    overflow: hidden;
    box-shadow: 3px 3px 4px 0 lightgrey;
    .data-container{
      height: 60px;
      width: 100%;
      background: rgba(211, 211, 211, 0.2);
      border-bottom: 1px solid #c5c7d4;
      position: absolute;
      .data{
        color: darkviolet;
        font-size: 18px;
        margin-top: 10px;
        margin-left: 20px;
        font-weight: 300;
      }
      .data:first-letter{
        text-transform: uppercase;
      }
      .month{
        font-size: 12px;
        margin-top: 5px;
        margin-left: 20px;
        color: black;
        font-weight: 300;
      }
      .month:first-letter{
        text-transform: uppercase;
      }
      .number-of-tasks{
        font-size: 13px;
        position: absolute;
        top: 17px;
        right: 15px;
        color: lightseagreen;
        font-weight: 300;
      }
    }
  }
  .task-list-container{
    height: 290px;
    width: 100%;
    position: absolute;
    top: 100px;
    overflow: hidden;
    overflow-y: scroll;
  }
  .input-div{
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    background: rgba(211, 211, 211, 0.2);
    border-top: 1px solid #c5c7d4;
    .task-input{
      all: unset;
      height: 38px;
      width: 225px;
      background: white;
      border-radius: 25px;
      position: absolute;
      top: 50%;
      left: 42%;
      transform: translate(-50%,-50%);
      padding-left: 15px;
      caret-color: lightskyblue;
      border: 1px solid #c5c7d4;
      color: grey;
    }
    .add-task-btn{
      all: unset;
      position: absolute;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      width: 20px;
      border-radius: 100%;
      background: tomato;
      top: 50%;
      right: -5px;
      transform: translate(-50%,-50%);
      color: white;
      font-size: 25px;
      cursor: pointer;
    }
    .add-task-btn:hover{
      box-shadow: 2px 2px 2px 0 lightgrey;
    }
  }
  .task-menu-container{
    border-bottom: 1px solid #c5c7d4;
    height: 40px;
    width: 100%;
    position: absolute;
    top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(211, 211, 211, 0.2);
    .clear-all-btn{
      all: unset;
      position: relative;
      left: 37px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: white;
      background: lightskyblue;
      padding: 5px;
      border-radius: 3px;
      cursor: pointer;
    }
    .clear-all-btn:hover{
      box-shadow: 2px 2px 2px 0 lightgrey;
      background: maroon;
    }
  }
  .task-menu-container > span{
    color: grey;
    font-size: 13px;
    margin-left: 13px;
    position: relative;
    left: -50px;
    cursor: pointer;
  }
  .task-menu-container > span:hover{
    color: black;
  }
  .task-list{
    height: 50px;
    width: 100%;
    position: relative;
    top: 30px;
    left: 50%;
    transform: translate(-50%,-50%);
    background: white;
    border-bottom: 1px solid #c5c7d4;
  }
  .checkbox{
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(-50%,-50%);
  }
  .task{
    color: rgba(128, 128, 128, 0.9);
    font-size: 12px;
    position: relative;
    top: 50%;
    margin-left: 145px;
    transform: translate(-50%,-50%);
    width: 220px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 300;
  }
  ::placeholder{
    /*color: rgba(75, 210, 202, 0.8);*/
    color: rgba(128, 128, 128, 0.5);
    font-size: 15px;
  }
  .fa-ellipsis{
    color: rgba(128, 128, 128, 0.9);
    float: right;
    margin-right: 15px;
    font-size: 13px;
  }
  .checked{
    text-decoration: line-through;
  }
  .edit-btn,.delete-btn{
    left: 84%;
    font-size: 12px;
    word-spacing: 3px;
    cursor: pointer;
    position: relative;
  }
  .edit-btn{
    position: absolute;
    margin-top: 3px;
    top: 3px;
    right: 25px;
    color: rgba(128, 128, 128, 0.5);
  }
  .edit-btn:hover{
    color: green;
    font-weight: bold;
  }
  .delete-btn{
    position: absolute;
    margin-top: 5px;
    top: 19px;
    right: 15px;
    color: rgba(128, 128, 128, 0.5);
  }
  .delete-btn:hover{
    color: red;
    font-weight: bold;
  }
  .active{
    text-decoration: underline;
  }
  .no-task-message{
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: rgba(128, 128, 128, 0.5);
    white-space: nowrap;
    font-size: 11px;
  }
  .fa-clipboard-list{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: rgba(128, 128, 128, 0.3);
    font-size: 50px;
  }
}
</style>