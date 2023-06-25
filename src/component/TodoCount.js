import Component from "./Component.js";

export default class TodoCount extends Component{
  render(){
    const wholeCount = this.state.length;
    const completedCount = this.state.filter((todo) => todo.isCompleted === true).length
    this.$target.innerHTML = `
      전체:${wholeCount}
      완료:${completedCount}
    `
  }
}