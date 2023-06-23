import Component from "./Component.js";
import { getTodosFromStorage } from "../actions/todoAction.js";

export default class TodoForm extends Component{
  render(){
    const wholeCount = this.state.length;
    const completedCount = this.state.filter((todo) => todo.isCompleted === true).length
    this.$target.innerHTML = `
      전체:${wholeCount}
      완료:${completedCount}
    `
  }
}