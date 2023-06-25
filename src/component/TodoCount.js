import Component from "./Component.js";

export default class TodoCount extends Component{
  render(){
    const { totalTodos,completedTodos } = this.state;
    this.$target.innerHTML = `
      전체:${totalTodos}
      완료:${completedTodos}
    `
  }
}