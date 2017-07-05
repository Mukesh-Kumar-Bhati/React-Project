import React, { Component } from 'react';
import './App.css';




export default class TodoList extends Component {
     constructor(props) {
    super(props);
    this.state = {sr : 1};
  }

AddTask1 =() => {
    //alert('Hi');
return (
    <div>
      <table>
        <tr>
          <td>
            <input type='text' name="fname" />
          </td>
        </tr>
      </table>
    </div>
  );
}


render() {
    return (
      <div className = "TodoListBlock"> 
        

        
        <table> <tr> <td>
        <img src = "http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/blue-jelly-icons-alphanumeric/069597-blue-jelly-icon-alphanumeric-plus-sign-solid.png"  alt ="ADD BUTTON"  width="20" height="20" /> 
        </td>
        <td> <button onClick ={this.AddTask1} className = "AddButton"> Add Task </button> </td> 
        </tr>
        </table>
     </div>
    );
  } 
}   


// TodoList;