import React, { Component } from 'react';
import ShowList from './showList';


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
         this.state ={name : '' , Mobile :'' , email :'' , address : '' , pin : '', state1 : 'Panjab' , isChecked : false , male : false, dataList : '', isShowlist :false, };
       }
        componentDidMount() {
        	fetch('https://node-app-11.herokuapp.com/getData',{ 
				 	headers: {   'Content-Type':'application/json',
				 					'Accept-Content':'application/json',
				 				'Access-Control-Allow-Origin':'*' 
				 			},
 				 method: 'GET'
 					})
				    .then(response => {
				    console.log('#############')	
				      
					  console.log(response);
 					   if (response.ok) {

 					   		return response.json();					  
  					 }
							}).then(res => {
							console.log(res);
							// const data = JSON.parse(res)
 					   	    this.setState({dataList:res});
 					   	    console.log('Data in DidMountFunction()');
 					   	    //console.log(data);
							}).catch(error => {
					 console.log(error);
				 })	

    		
	    }





	inputTextElement = (LabelName, stateval ) => {
		let val = this.state[stateval];
		console.log(stateval)
		return(
	 		<label>
         		 {LabelName}:
         		 <input type="text" value={val}  onChange={(e) => this.handleChange(e, stateval, 'input')} />
     		</label> 
		);
 
 	}
 	pickListElement = () => {
 		return(
 			<label>
          		Select your State:
          			<select data-arg1 = 'state1' name = 'pickList' value={this.state.state1} onChange={(e) => this.handleChange(e, 'state1', 'pickList')}>
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
            			onChange={this.handleChange.bind(this)} 
           			 />
        	</label>    
        );

 	}
	
 	handleSubmil = () => {

 			var data =  {
 						 name : this.state.name,
 			 			 mobilenumber : this.state.Mobile, 
 			 			 state : this.state.state1,
 			 			 email : this.state.email, 
 			 			 address : this.state.address,
 			 			 pin : this.state.pin, 
 			 			 isChecked : this.state.isChecked
 			 			}
 			console.log(data);
 			console.log(JSON.stringify(data));
				 fetch('https://node-app-11.herokuapp.com/uploadData', {
				 	headers: {'Content-Type':'application/json',
				 				'Accept-Content':'application/json',
				 				'Access-Control-Allow-Origin':'*'},
 				 method: 'POST',
 	 			 body: JSON.stringify(data)

				})
				.then(response => {
					console.log(response);
 					if (response.ok) {
  					  return response;
						  }
						}).catch(error => {
							console.log(error);
							})


     //alert(this.state.name +"/// " +this.state.Mobile + " ////"+ this.state.state1 );

 	}

 	handleChange = (e, key, elementType) => {
		console.log(e);
		
		console.log(elementType)


		if(elementType == 'input'){
			console.log('7777777777777')
			console.log(key)
			console.log(e.target.value)
			//let data = {${key: e.target.value};
			this.setState({[key]: e.target.value});
			console.log(this.state[key]);
		}

 		/*let element = e.target.getAttribute('name');  // check the type of element ex: checkBox, inputText
 		let arg1 = e.target.('data-arg1'); // get the state name from element

 		if(element === 'inputText') {
 		
		this.setState({ [arg1] :  e.target.value });
 		}

 		else if( element ==='pickList'){
 		this.setState({ [arg1] : e.target.value });

 		}
 		else if( element ==='checkBox') {
 		
 		this.setState({ [arg1] : e.target.checked});
 		
 		}
    	*/
   	}

   	getList =() => { 
   		 


   		console.log('Hi I am in getList Box: ');
   		console.log(" showlist" + this.state.isShowlist);
   			this.setState({isShowlist : true });
   			

   		//console.log(this.state.dataList[5].name);	
   			
   	}
   	
	render() {
		console.log(this.state.isShowlist);
		return(
	<center id = 'pad'>
		<div>


			<img src ='https://www.jcount.com/wp-content/uploads/2015/04/appirio.png' />
			<h1>  Buddy, Appirio Welcomes you !!!</h1>
			<div >
			 <fieldset>
                <legend>Candidate Form</legend>

				<form  style = {{background: 'blue' }} id = 'border' >
					{this.inputTextElement('First Name','name')} <br/><br/>
					{this.inputTextElement('Mobile No','Mobile')} <br/><br/>
					{this.inputTextElement('Email','email')} <br/><br/>
					{this.inputTextElement('Address','address')} <br/><br/>
					{this.inputTextElement('PIN','pin')} <br/><br/>
					{/*{this.pickListElement} <br/><br/>
					{this.ckeckBoxElement('Fresher','isChecked')} <br/><br/>*/}
					{ /* {this.ckeckBoxElement('Male' , 'male' )} <br/><br/>  */}

					
					{ /*{ButtonElement('Sign Up')}	*/}
					<button type = "button" onClick = {this.handleSubmil}>Sign Up</button>

					 {ButtonElement('Cancel')}  <br/><br/>
					<br/> <br/>
					<button type = "button" onClick = {this.getList}>Show Data List</button>

					

				</form>
		
		{this.state.isShowlist && <ShowList data={this.state.dataList}/>}
			  </fieldset>
	
			</div>
		</div>

	</center>

			)
	}
}
 //AppComponent;
