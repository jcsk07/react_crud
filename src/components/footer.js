import React,{Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <div>
        <h1>Bye</h1>
        <h3>{this.props.myobj.s}</h3>
      </div>
    );
  }
}

class Ending extends Component{
	render(){
		return( 
			<div>
				<p>Hello this is the ending of the footer app </p>
				<h2>Now the time is {new Date().toLocaleTimeString()} </h2>
			</div>
		);
	}
}

class Hello extends Component{
	
}
export  {Footer,Ending};