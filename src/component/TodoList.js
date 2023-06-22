import Component from "./Component.js";

export default class TodoList extends Component{

  render(){
    this.$target.innerHTML =
    `
      <ul>
        ${this.state ? this.state.map((todo) => `<li>${todo}</li>`).join('') : ''}
      </ul>
    `
  }

}