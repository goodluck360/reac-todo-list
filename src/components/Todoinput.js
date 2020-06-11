import React, { Component } from "react";

export default class Todoinput extends Component {
  render() {
    // Destructuring props to look for it element
    const { item, handlechange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-black">
                <i className="fa fa-book"></i>
              </div>
            </div>

            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              handlechange={"handlechange"}
              onChange={handlechange}
            ></input>
          </div>
          <button
            type="submit"
            // Changing the color of add item when edit item is true
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
