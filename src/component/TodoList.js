import Component from "./Component.js";

export default class TodoList extends Component{

  render(){
    console.log(this.state)
    this.$target.innerHTML =
    `
      <ul>
        ${this.state ? this.state.map((todo) => `<li>${todo}</li>`).join('') : ''}
      </ul>
    `
  }
}