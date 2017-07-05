import React, { Component } from 'react';
import AppComponent from '../first-component';


export default class Title extends Component{
		 constructor(props) {
   			 super(props);
   			this.state ={name :'Hello,', val : false,};

    			//this.state = {date: new Date()};
 			 }



	handelClick =(e) =>{
		

		this.setState({val :true});
	
	//	<AppComponent />
	//	alert( "Hello Bhai");
	}

	render() {
			//setTimeout(()=>  {this.setState({name: 'Hello Mukesh,'})}, 3000);
			//setTimeout(()=>  {this.props.changeName(this.setState({name: 'Hello, Mukesh Welcomes you!!!'}))}, 4000);


		return(
				<div>
					<h1> {this.state.name} </h1> 
					
					<button type="button" onClick= {this.handelClick.bind(this)}>Click Me!</button>

					{this.state.val && <button type="button" >Click Me11!</button> }

				</div>

			);
	}
}