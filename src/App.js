import Component from "./component/Component.js";
import { Header, TodoForm, TodoList, TodoCount } from './component/index.js';
import { setTodosToStorage,getTodosFromStorage } from "./actions/todoAction.js";
import generateUniqueId from "./utils/generateId.js";

export default class App extends Component{
  
  render(){
    const {toggleTodo, deleteTodo} = this;
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
        onsubmit : this.addTodo.bind(this),
      }
    });

    this.todoList = new TodoList({
      $target :$todoList, 
      initialState:getTodosFromStorage(), 
      props:{
        toggleTodo : toggleTodo.bind(this),
        deleteTodo : deleteTodo.bind(this),
    }});

    this.todoCount = new TodoCount({
      $target : $todoCount, 
      initialState : getTodosFromStorage(),
    })
  }
  addTodo(text){
    const newTodoList = [...this.todoList.state, {text, isCompleted:false, id:generateUniqueId()}];
    setTodosToStorage(newTodoList);
    this.todoList.setState(newTodoList);
    this.updateTodoCount();
  }

  toggleTodo(id){
    const targetTodo = this.todoList.state.find(todo => todo.id === id)
    if (targetTodo) {
      targetTodo.isCompleted = !targetTodo.isCompleted 
    }
    setTodosToStorage(this.todoList.state);
    this.todoList.setState(this.todoList.state);
    this.updateTodoCount();
  }
  
  updateTodoCount(){
    this.todoCount.setState(getTodosFromStorage());
  }
  deleteTodo(id){
    const targetIndex = this.todoList.state.findIndex(todo => todo.id === id);
    if (targetIndex !== -1) {
      this.todoList.state.splice(targetIndex, 1);
    }
    setTodosToStorage(this.todoList.state);
    this.todoList.setState(this.todoList.state);
    this.updateTodoCount();
  }

}