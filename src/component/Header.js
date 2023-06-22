import Component from "./Component.js";

export default class Header extends Component{
  
  render(){
    const {headerText} = this.props;
    this.$target.textContent = headerText;
  }
}