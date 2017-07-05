import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



function myFunction(name) {
		if(name) {
		return name;
					}
		return 'Welcome';
	}


	function inputElement(Name){
   

   return( <label>
             {Name}:
            <input type='text' value=''  />
             </label>
		);	
	}


	

class AppComponent extends Component {
	



	render() {
		return(
		<div>


			<img src ='https://www.jcount.com/wp-content/uploads/2015/04/appirio.png' />
			<h1>  {myFunction() }  Buddy, Appirio Welcomes you !!!</h1>
			<div >
				<form  id = 'border'>
					{inputElement('First Name')}  <br/><br/>
					{inputElement('Mobile No ')}  <br/><br/>
					{inputElement('Email ')} 	  <br/><br/>
					{inputElement('Address')}     <br/><br/>
					{inputElement('PIN')} 		  <br/><br/>
				</form>
			</div>
		</div>
			

			)
	}
}
export default AppComponent;
