import React, { Component } from 'react';

class showList extends React.Component { 

	render() {
		console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
		console.log(this.props.data)
		//const data = this.props.data;
		
       // let datalist = '';

		// data.forEach((value) => {

		// console.log('*****************************');


		// datalist += <li> (value.name) </li>;
 	// 	console.log(value.name);
		// });

         return(
         	 <ul>
         	 {this.props.data.map(function(listValue){
             return <li>{listValue.mobilenumber}</li>;
          })}
        </ul>
         );
		//return( <div><ul> hi </ul> </div> );
	}	
}

export default showList;