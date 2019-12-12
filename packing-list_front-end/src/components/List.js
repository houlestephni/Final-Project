import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  render() {
    return (
      <div>
        <h1>List</h1>
      </div>
    );
  }
}

export default List;
