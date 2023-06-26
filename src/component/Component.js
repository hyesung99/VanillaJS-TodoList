export default class Component{
  $target; 
  state;
  props;

  constructor({$target, initialState=[] ,props={}}){
    this.$target = $target;
    this.props = props;
    this.state = initialState;
    this.render();
    this.addEvent();
  }

  render(){
    
  }

  addEvent(){

  }

  setState(newState, stateType){
    this.state = newState;
    this.render();
  }

  addEventDelegation(action, tag, callback){
    this.$target.addEventListener(action, (event) => {
      if(event.target.closest(`${tag}`)){
        callback(event)
      }
    })
  }
}