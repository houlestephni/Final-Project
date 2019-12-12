import React, { Component } from "react";

class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      listItems: []
    };
  }
  render() {
    return (
      <div>
        <button>Add an Item</button>
      </div>
    );
  }
}

export default NewItem;
