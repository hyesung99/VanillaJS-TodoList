import Component from "./Component.js";

export default class TodoList extends Component{

  render(){
    this.$target.innerHTML =
    `
      <ul>
        ${this.state.map((todo) => 
          todo.isCompleted ? 
          `
          <li id="${todo.id}" class="todo" style="text-decoration: line-through;">
            ${todo.text}
          </li>
          <button id="${todo.id}" class="toggleButton">삭제</button>
          `
          :
          `
          <li id="${todo.id}" class="todo">
            ${todo.text}
          </li>
          <button id="${todo.id}" class="toggleButton">삭제</button>
          `).join('')}
      </ul>
    `
  }

  addEvent(){
    const toggleButtons = this.$target.querySelectorAll(".toggleButton");
    const {toggleButton} = this.props;
    console.log(toggleButtons);
    toggleButtons.forEach((button) => {
      button.addEventListener('click', (e) =>{
        
        toggleButton(e);
      })
    });

    const {deleteTodo} = this.props;
    const toggleTodo = this.$target.querySelectorAll(".todo")
    console.log(toggleTodo);
    toggleTodo.forEach((todo) => {
      todo.addEventListener('click', (e) => {
        deleteTodo(e)
      })
    })
  }
}