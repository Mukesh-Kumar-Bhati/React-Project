import React, { Component } from 'react';
import Title from './Header/Title';
import NavigationBar from  './Header/NavigationBar';


export default class Layout extends Component{
		constructor() {
			super()
			this.state = {
				name : 'Hello,',
			};
		}

changeName(name){
			this.setState({name});
		}	

	render() {
		

		return(
				<div>
				<NavigationBar />
					<Title changeName = {this.changeName.bind(this)} name = {this.state.name}/>

				</div>

			);
	}
} 