import Component from "./component/Component.js";
import { Header, TodoForm, TodoList, TodoCount } from './component/index.js';
import todoStorage from "./storage/todoStorage.js";
import TodoItem from "./domain/todoItem.js";
import TodoCountItem from "./domain/todoCountItem.js";
export default class App extends Component{

  addTodo(text){
    const newTodo = new TodoItem({text: text,isCompleted : false})
    const newTodoList = [...this.todoList.state, newTodo];
    this.setTodosToStorage(newTodoList);
    this.todoList.setState(newTodoList);
    this.updateTodoCount();
  }

  toggleTodo(id){
    const targetTodo = this.todoList.state.find(todo => "todo-item-"+todo.id === id)
    if (targetTodo) {
      targetTodo.isCompleted = !targetTodo.isCompleted 
    }
    this.setTodosToStorage(this.todoList.state);
    this.todoList.setState(this.todoList.state);
    this.updateTodoCount();
  }
  
  deleteTodo(targetId){
    const newState = this.todoList.state.filter((todo) => "todo-item-"+todo.id !== targetId);
    if(newState.length !== this.todoList.state){
      this.setTodosToStorage(newState);
      this.todoList.setState(newState);
      this.updateTodoCount();
    }
  
  }
  
  updateTodoCount(){
    this.todoCount.setState(this.getTodoCount(), TodoCountItem);
  }
  
  getTodoCount(){
    const todoData = todoStorage.getItem();
    const newTodoCount = new TodoCountItem({
      totalTodoCount : todoData.length,
      completedTodoCount: todoData.filter((todo) => todo.isCompleted === true).length
    })
    return newTodoCount
  }
  
  getTodosFromStorage(){
    try{
      return todoStorage.getItem();
    } 
    catch(e) {
      alert(`${e.message}\n local storage에서 todo를 가져오는데 실패했습니다.`)
    }
  }

  
  setTodosToStorage(value){
    try{
      return todoStorage.setItem(JSON.stringify(value));
    } catch {
      alert(`${e.message}\n local storage에 todo를 저장하는데 실패했습니다.`)
    }
  }

  render(){
    const {toggleTodo, deleteTodo, getTodosFromStorage, getTodoCount, addTodo} = this;
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
        onSubmit : addTodo.bind(this),
      }
    });

    this.todoList = new TodoList({
      $target :$todoList, 
      initialState: getTodosFromStorage(), 
      props:{
        toggleTodo : toggleTodo.bind(this),
        deleteTodo : deleteTodo.bind(this),
    }});

    this.todoCount = new TodoCount({
      $target : $todoCount, 
      initialState : getTodoCount(),
    })
  }
}