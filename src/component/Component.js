// 컴포넌트는 state를 가져야함
// state가 변경되면 render되어야 함 

export default class Component{
  $target; 
  state;
  props;

  constructor($target, initialState ,props){
    this.$target = $target;
    this.props = props;
    if (initialState === undefined) {
      throw new Error('초기 상태(initialState)는 반드시 정의되어야 합니다.(null가능)');
    }
    this.state = initialState;
    this.render();
    this.addEvent();
  }

  render(){
    
  }

  addEvent(){

  }

  setState(newState){
    if(typeof this.state === newState){
      throw new Error('변경할 state는 이전의 state와 type이 같아야합니다.')
    }
    this.state = newState;
    this.render();
  }
}