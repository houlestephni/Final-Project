import React, { Component } from "react";

class Item extends Component {
  constructor() {
    super();
    this.state = {
      isDone: false
    };
    this.handleDone = this.handleDone.bind(this);
  }

  handleDone() {
    this.setState({
      isDone: !this.state.isDone
    });
    // console.log("clicked", listItem);
  }

  render() {
    let style = {
      textDecoration: this.state.isDone ? "line-through" : "none"
    };

    return <div></div>;
  }
}
export default Item;
