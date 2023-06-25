import Component from "./Component.js";

export default class Header extends Component{
  
  render(){
    this.$target.textContent = this.state;
  }
}