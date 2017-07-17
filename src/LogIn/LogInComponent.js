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
	constructor(props) {
         super(props);
         this.state ={email: '' , Password :'' , isValidate : null};
    }


	// Check Email Password are valid or Not
	validateLogin = () => {
		var data = {
						userEmail :this.state.email,
						password  : this.state.Password

					}
		console.log(data);
 		console.log(JSON.stringify(data));
		//fetch('https://node-app-11.herokuapp.com/validateLogIn', {
		fetch('https://node-app-11.herokuapp.com/validateLogIn', {
		headers: {'Content-Type':'application/json',
				 				'Accept-Content':'application/json',
				 				'Access-Control-Allow-Origin':'*'},
 				 method: 'POST',
 	 			 body: JSON.stringify(data)

				}).then(response => {
					console.log(response);
					console.log();
 					if (response.ok) {
  					  return response.json();
						  }
				   }).then(res => {
				   			console.log('##################')
							console.log(res.result);
							this.setState({isValidate : res.result})
							console.log(this.state.isValidate);
							
							}).catch(error => {
							console.log(error);
					   })

	}


	// handle the input text change value

	handleChange =(e,key) => {
		 var type =	e.target.type;
		 //console.log("##################");
		 //console.log([key]);
		if(type =="text" || "Password"){
			this.setState({[key]: e.target.value});
		
		}	

		//alert(this.state[key]);
	}


	render() {

		return(
		<div id = 'pad'>

		<center>
			<img src ='https://www.jcount.com/wp-content/uploads/2015/04/appirio.png' />
			
			<div id = 'pad'>
				<form  id = 'border'>
				<label>
         			 User Email :
         		 	<input type="text"  value= {this.state.email}  onChange={(e) => this.handleChange(e,'email')} />
     		 	</label> 
     		 	<br/> <br/>
     		 	<label>
         			Password :
         		 	<input type="Password"  value= {this.state.Password}  onChange={(e) => this.handleChange(e, 'Password')} />
     		 	</label> 
     		 	<br/> <br/>
     		 	<button type = "button" onClick = {this.validateLogin}>Log In</button>

     				{/*
					{inputElement(' User Name')}  <br/><br/>
					{inputElement('Password')}  <br/><br/>
					<button type = "button" onClick = ''>Log In</button>
					*/}
					{this.state.isValidate && alert('Successfully Loged In')}
						
					
				</form>
			</div>
			</center>
		</div>
		);
	}
}