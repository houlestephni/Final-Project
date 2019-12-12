import React, { Component } from "react";
import NewItem from "./NewItem";

class List extends Component {
  constructor() {
    super();
    this.state = {
      listItems: []
    };
  }
  render() {
    return (
      <div>
        <h1>List</h1>
        <NewItem />
      </div>
    );
  }
}

export default List;
