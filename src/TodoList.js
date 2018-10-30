import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);// call the super class constructor and pass in the props parameter
        this.state = {
            items: []
          };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
      addItem(e) { // the class method is responsible for adding item the user enter into the textbox
        if (this._inputElement.value !== "") { // if the input value is not empty
          var newItem = { // add this items
            text: this._inputElement.value, // the text value and the key
            key: Date.now() // this key is required by react
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) // update the state with the newItem object value
            };
          });
         
          this._inputElement.value = ""; // clear the text field after adding the items
        }
        
     
        e.preventDefault();// overide the default form behaviour
    }
    deleteItem(key) { // this method is used to remove the item that user added
      var filteredItems = this.state.items.filter(function (item) { 
        return (item.key !== key);
      });
     
      this.setState({
        items: filteredItems
      });
    }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>
        <input ref={(a) => this._inputElement = a} 
                 placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList;
   // setState() is the only legitimate way to update state after the initial state setup