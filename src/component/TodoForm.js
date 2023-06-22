import Component from "./Component.js";

export default class TodoForm extends Component{

  render(){
    this.$target.innerHTML = 
    `
      <input type="text" name="todoForm"/>
      <button>추가</button>
    `
  }

  addEvent(){
    const {onsubmit} = this.props
    this.$target.addEventListener('submit',e => {
      e.preventDefault();
      const $todo = this.$target.querySelector('input[name=todoForm]');
      const text = $todo.value;

      if(text.length > 1){
        $todo.value = '';
        onsubmit(text);
      }
    })
  }

}