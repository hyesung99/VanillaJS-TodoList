import Component from "./Component.js";

export default class TodoCount extends Component{
  render(){
    this.$target.innerHTML = 
    `
      전체:${this.state.totalTodoCount}
      완료:${this.state.completedTodoCount}
    `
  }
}