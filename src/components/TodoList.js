import React, { Component } from "react";
import Todoitem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    // Destructuring Props to look for the item
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-scapitalize text-center">Todo list</h3>
        {
          // Display the item
          // Create a map method to loop through the item and grap the id and item
          items.map((item) => {
            return (
              <Todoitem
                key={item.id}
                title={item.title}
                // Trying to get the ID by running the arrow function to return  this referece thehandleDelete(item.id)
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })
        }

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
