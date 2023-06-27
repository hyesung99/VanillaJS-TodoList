import Component from "./component/Component.js";
import { Header, TodoForm, TodoList, TodoCount } from './component/index.js';
import { TodoItemsHandler, TodoCountItemHandler } from "./service/index.js";
// import todoStorage from "./storage/todoStorage.js";
// import TodoCountItem from "./domain/todoCountItem.js";

export default class App extends Component{
  
  render(){
    const todoItemsHandler = new TodoItemsHandler()
    const todoCountItemsHandler = new TodoCountItemHandler()
    console.log(todoCountItemsHandler)
    this.$target.innerHTML = 
    `
      <h1 class="header"></h1>
      <form class="todoForm"></form>
      <div class="todoList"></div>
      <div class="todoCount"></div>
    `
    
    const $header = this.$target.querySelector('.header');
    const $todoForm = this.$target.querySelector('.todoForm');
    const $todoList = this.$target.querySelector('.todoList');
    const $todoCount = this.$target.querySelector('.todoCount');

    new Header({ 
      $target : $header, 
      initialState : "Simple Todo",
    });

    new TodoForm({
      $target : $todoForm, 
      props : {
        onSubmit : (text) => {
          todoItemsHandler.addTodo({text})
          todoCountItemsHandler.updateTodoCount()
          this.todoList.setState(todoItemsHandler.todoItems)
          this.todoCount.setState(todoCountItemsHandler.todoCount)
        }
      }
    });
    
    
    this.todoList = new TodoList({
      $target :$todoList, 
      initialState: todoItemsHandler.todoItems,
      props:{
        toggleTodo : (targetId) => {
          todoItemsHandler.toggleTodo({targetId})
          todoCountItemsHandler.updateTodoCount()
          this.todoList.setState(todoItemsHandler.todoItems)
          this.todoCount.setState(todoCountItemsHandler.todoCount)
        },
        deleteTodo : (targetId) => {
          todoItemsHandler.deleteTodo({targetId})
          todoCountItemsHandler.updateTodoCount()
          this.todoList.setState(todoItemsHandler.todoItems)
          this.todoCount.setState(todoCountItemsHandler.todoCount)
        },
    }});

    this.todoCount = new TodoCount({
      $target : $todoCount, 
      initialState : todoCountItemsHandler.todoCount,
    })
  }
}