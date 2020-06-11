import React, { Component } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";

class App extends Component {
  state = {
    items: [],
    // uuid generate a unique id for each item
    id: uuid(),
    item: "",
    editItem: false,
  };

  // chamge the value of item(string) to what the value the user typed
  handlechange = (e) => {
    //The e looks for the event
    this.setState({
      item: e.target.value,
      // Each time we type something in the input, the value preserv what we type in the state item
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Grap the values that is been passed on by the user and place it in he new item
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    // console.log(newItem);

    // update newItem to items in state
    // the spread operator split the content of items into individual value
    const updatedItems = [...this.state.items, newItem];
    // we need to change the values in updatedItems
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  clearList = () => {
    // changingig the state of items in updartedItems to an empty array
    // Pass the clearList as a prop
    this.setState({
      items: [],
    });
  };

  //To delete each item rarher than using clear list
  handleDelete = (id) => {
    // Filter the items and look for the id we are clicking on
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  // To edit item in the todo list
  // The id used to access a specific item that we have clicked on and filter the item
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    // we are loooking for s specific item, so the find method is used
    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10.mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              shy billionaire input app
            </h3>

            <Todoinput // Passing props to todo input
              item={this.state.item}
              handlechange={this.handlechange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />

            <TodoList // To pass a props to display the captured item
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

// function App() {
//   // Add a state to cummunicate with todo input and list component
//   return (
// state={
//   items:[],
//   id:0,
//   item:'',
//   editItem:false
// },

// handleChange = (e)=>{
//   this.setState({
//     item:e.target.value
//   })
// },
//     <div className="container">
//       <div className="row">
//         <div className="col-10.mx-auto col-md-8 mt-4">
//           <h3 className="text-capitalize text-center">
//             shy billionaire todo input
//           </h3>
//           <Todoinput item={this.state.item} handleChange={this.handleChange}/>
//           <TodoList />
//         </div>
//       </div>
//     </div>
//   );
// }

//
