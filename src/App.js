import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponent from './first-component';
import TodoList from './TodoList';
//import  {element} from './SystemLocalTime';
// import SystemLocalTime from './SystemLocalTime';
import  Clock from './SystemLocalTime';



// <AppComponent />
class App extends Component {
   
  render() {
    return (
      <div className="App">


          <Clock />
          <AppComponent/>
        
        <p className="App-intro">
        
        </p>
     
         <TodoList/>

      </div>
    );
  }
}

//setInterval( <App />, 1000);

export default App;
