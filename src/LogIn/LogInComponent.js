import React, { Component } from 'react';


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

export default class LogInComponent extends Component {
	



	render() {

		return(
		<div id = 'pad'>

		<center>
			<img src ='https://www.jcount.com/wp-content/uploads/2015/04/appirio.png' />
			
			<div id = 'pad'>
				<form  id = 'border'>
					{inputElement(' User Name')}  <br/><br/>
					{inputElement('Password')}  <br/><br/>
					
				</form>
			</div>
			</center>
		</div>
		);
	}
}