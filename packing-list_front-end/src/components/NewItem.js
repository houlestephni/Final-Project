import React, { Component } from "react";
import List from "./List";

class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      term: " ",
      listItems: []
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ term: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      term: "",
      listItems: [...this.state.listItems, this.state.term]
    });
    console.log("submitted");
    console.log(this.state.listItems);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Add New Item</button>
        </form>
        <List listItems={this.state.listItems} />
      </div>
    );
  }
}

export default NewItem;
