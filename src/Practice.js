import React, { Component } from 'react';

export default class Practice extends Component{
		 constructor(props) {
   			 super(props);
   			this.name = 'Mukesh';

    			//this.state = {date: new Date()};
 			 }



	render() {

		return(
				<div>
					<h1>Hi {this.name} </h1> 

				</div>

			);
	}
} 
 //Practice;