import Component from "./Component.js";

export default class TodoList extends Component{

  render(){
    this.$target.innerHTML =
    `
      <ul>
        ${this.state.map((todo) => 
           
          `
          <li id="todo-item-${todo.id}" class="todo">
            <span>${todo.isCompleted ? `<del>${todo.text}</del>`:`${todo.text}`}</span>
            <button  class="toggleButton">삭제</button>
          </li>
          `
          ).join('')}
      </ul>
    `
  }

  addEvent(){
    const {toggleTodo, deleteTodo} = this.props;

    this.addEventDelegation('click', 'span', ({target}) => toggleTodo(target.closest(".todo").getAttribute('id')));
    this.addEventDelegation('click', 'button', ({target}) => deleteTodo(target.closest(".todo").getAttribute('id')));
  }
}