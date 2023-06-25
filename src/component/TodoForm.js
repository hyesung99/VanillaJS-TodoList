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
    const {onSubmit} = this.props;
    this.$target.addEventListener('submit',e => {
      e.preventDefault();
      const $todo = this.$target.todoForm;
      const text = $todo.value;

      if(text.length > 1){
        $todo.value = '';
        onSubmit(text);
      }
    })
  }

}