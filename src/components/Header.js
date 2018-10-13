import React,{Component} from 'react';

class Header extends Component{
  render() {
    return(
      <div>
        <h3>{this.props.par}</h3>
        <h3>{this.props.x}</h3>
      </div>
    );
  }
}

export default Header;