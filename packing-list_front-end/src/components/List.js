import React, { Component } from "react";
import NewItem from "./NewItem";

class List extends Component {
  constructor() {
    super();
    this.state = {
      term: " ",
      listItems: []
    };
  }

  render() {
    return (
      <div>
        <h1>List</h1>
        {this.props.listItems.map((listItems, index) => {
          return <li key={index}>{listItems}</li>;
        })}
      </div>
    );
  }
}

export default List;
