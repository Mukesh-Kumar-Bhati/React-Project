import React, { Component } from 'react';


function myFunction(name) {
		if(name) {
		return name;
					}
		return 'Welcome';
	}





function ButtonElement(Name){

   

   return( <button type = "submit">{Name}</button>
		);	
	}


export default class SignUpComponent extends Component {
 constructor(props) {

         super(props);
         this.state ={"name" : "" , Mobile :"" , email :"" , address : "" , pin : "", state1 : 'Panjab' , isChecked : false , male : false};

         //this.state = {date: new Date()};
         
       }



	inputTextElement = (LabelName, stateval ) => {
		var val = this.state[stateval];
		
		return(
	 		<label>
         		 {LabelName}:
         		 <input type="text" value={val} name = 'inputText' data-arg1={stateval} onChange={this.handleChange.bind(this)} />
     		</label> 
		);
 
 	}
 	pickListElement = () => {
 		return(
 			<label>
          		Select your State:
          			<select data-arg1 = 'state1' name = 'pickList' value={this.state.state1} onChange={this.handleChange}>
           				 <option value="Rajasthan">Rajasthan</option>
           				 <option value="Panjab">Panjab</option>
           				 <option value="Dehli">Dehli</option>
            			 <option value="Maharastra">Maharastra</option>
          			</select>
       		 </label>
 		);
 	}

 	ckeckBoxElement = (name , stateval ) => {
 		return(
 			<label>
         		 {name}

 					<input
           				name='checkBox'
           				data-arg1 = {stateval}
           		 		type="checkbox"
            			checked={this.state[stateval]}
            			onChange={this.handleChange} 
           			 />
        	</label>    
        );

 	}
	
 	handleSubmil = () => {

     alert(this.state.name +"/// " +this.state.Mobile + " ////"+ this.state.state1 );

 	}

 	handleChange = (e) => {
 		let element = e.target.getAttribute('name');  // check the type of element ex: checkBox, inputText
 		let arg1 = e.target.getAttribute('data-arg1'); // get the state name from element

 		if(element === 'inputText') {
 		
		this.setState({ [arg1] :  e.target.value });
 		}

 		else if( element ==='pickList'){
 		this.setState({ [arg1] : e.target.value });

 		}
 		else if( element ==='checkBox') {
 		
 		this.setState({ [arg1] : e.target.checked});
 		
 		}
    	
   	}

   	test = () => {
   		
   		
   	}

	render() {
		return(
	<center id = 'pad'>
		<div>


			<img src ='https://www.jcount.com/wp-content/uploads/2015/04/appirio.png' />
			<h1>  {myFunction() }  Buddy, Appirio Welcomes you !!!</h1>
			<div >
			 <fieldset>
                <legend>Candidate Form</legend>

				<form  style = {{background: 'blue' }} id = 'border' onSubmit = {this.handleSubmil}>
					{this.inputTextElement('First Name','name')} <br/><br/>
					{this.inputTextElement('Mobile No','Mobile')} <br/><br/>
					{this.inputTextElement('Email','email')} <br/><br/>
					{this.inputTextElement('Address','address')} <br/><br/>
					{this.inputTextElement('PIN','pin')} <br/><br/>
					{this.pickListElement()} <br/><br/>
					{this.ckeckBoxElement('Fresher','isChecked')} <br/><br/>
					{ /* {this.ckeckBoxElement('Male' , 'male' )} <br/><br/>  */}
					{this.test()}

			
					{ButtonElement('Sign Up')}	 {ButtonElement('Cancel')}  <br/><br/>
				</form>
			  </fieldset>
			</div>
		</div>
	</center>

			)
	}
}
 //AppComponent;
