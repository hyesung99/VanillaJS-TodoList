import Component from "./component/Component.js";
import Header from "./component/Header.js";
import TodoList from "./component/TodoList.js";
import TodoForm from "./component/TodoForm.js"
import { setTodosToStorage,getTodosFromStorage } from "./actions/todoAction.js";

export default class App extends Component{
  
  render(){
    const {onsubmit, handleStorageChange} = this;
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
      
    });

    this.todoList = todoList;
  }

  addTodo(text){
    const newTodoList = ([...getTodosFromStorage(),text]);
    setTodosToStorage(newTodoList);
    this.todoList.setState(newTodoList);
  }
}