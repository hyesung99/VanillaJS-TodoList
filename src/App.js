import Component from "./component/Component.js";
import Header from "./component/Header.js";
import TodoList from "./component/TodoList.js";
import TodoForm from "./component/TodoForm.js"
import { setTodosToStorage,getTodosFromStorage } from "./actions/todoAction.js";
import generateUniqueId from "./static/generateId.js";

export default class App extends Component{
  
  render(){
    const {onsubmit, handleStorageChange, toggleButton, deleteTodo} = this;
    this.$target.innerHTML = 
    `
      <h1 class="header"></h1>
      <form class="todoForm"></form>
      <div class="todoList"></div>
    `
    
    const $header = this.$target.querySelector('.header');
    const $todoForm = this.$target.querySelector('.todoForm');
    const $todoList = this.$target.querySelector('.todoList');

    new Header( $header, null, {
      headerText : 'Simple todos'
    });
    
    new TodoForm($todoForm, null, {
      onsubmit : this.addTodo.bind(this),
    });

    const todoList = new TodoList($todoList, getTodosFromStorage(), {
      toggleButton : toggleButton.bind(this),
      deleteTodo : deleteTodo.bind(this),
    });

    this.todoList = todoList;
  }

  addTodo(text){
    const newTodoList = [...this.todoList.state, {text, isCompleted:false, id:generateUniqueId()}];
    console.log(newTodoList);
    setTodosToStorage(newTodoList);
    this.todoList.setState(newTodoList);
  }

  deleteTodo(e){
    const targetTodo = this.todoList.state.find(todo => todo.id === e.target.id)
    if (targetTodo) {
      targetTodo.isCompleted = !targetTodo.isCompleted 
      console.log(this.todoList.state);
    }
    setTodosToStorage(this.todoList.state);
    this.todoList.setState(this.todoList.state);
    console.log("here");
  }

  toggleButton(e){
    console.log(this.todoList.state);
    const targetIndex = this.todoList.state.findIndex(todo => todo.id === e.target.id);
    if (targetIndex !== -1) {
      this.todoList.state.splice(targetIndex, 1);
      console.log(this.todoList.state);
    }
    setTodosToStorage(this.todoList.state);
    this.todoList.setState(this.todoList.state);
  }

}