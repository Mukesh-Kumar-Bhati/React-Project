import React, { Component } from 'react';
import SignUpComponent from '../SignUp/SignUpComponent';
import LogInComponent from '../LogIn/LogInComponent';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';



    export default class NavigationBar extends Component{
      constructor(props) {
         super(props);
        this.state ={signup : true, login : false , aboutUs : false , contactUs : false};

          //this.state = {date: new Date()};
       }



      handleClick(e){
            const value = e.target.innerText;
            console.log( e.target.innerText);
            if(e.target.innerText === "Sign Up"){
                 this.setState({signup : true})
                 this.setState({login : false})
                 this.setState({aboutUs : false})
                 this.setState({contactUs : false})
            }
             else if(e.target.innerText === "Log in"){
                 this.setState({login : true})
                  this.setState({signup : false})
                  this.setState({aboutUs : false})
                 this.setState({contactUs : false})
            }
             else  if(e.target.innerText === "About Us"){
                  this.setState({aboutUs : true})
                  this.setState({login : false})
                  this.setState({signup : false})
                  this.setState({contactUs : false})
            }
            else if(e.target.innerText === "Contact Us"){

                  this.setState({contactUs : true})
                  this.setState({signup : false})
                  this.setState({aboutUs : false})
                  this.setState({login : false})
            }
           else {}
      }


      render() {
      return (
        <div>
               <center>
             <div className="nav" >
             <ul>
                 <li   ><a href="#" onClick ={this.handleClick.bind(this)} value = "jkh">Sign Up</a></li>
                 <li ><a href="#" onClick ={this.handleClick.bind(this)}>Log in</a></li>
                 <li ><a href="#"  onClick ={this.handleClick.bind(this)}>About Us</a></li>
                 <li ><a href="#"  onClick ={this.handleClick.bind(this)}>Contact Us</a></li>
             </ul>
             </div>
              </center>     


              {this.state.signup && <SignUpComponent />}  
              {this.state.login && <LogInComponent />}
              {this.state.aboutUs && <AboutUs />}
              {this.state.contactUs && <ContactUs />}
         </div>
      );

      }
 
}