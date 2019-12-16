import React, { Component } from "react";
import List from "./List";

class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      term: " ",
      listItems: [],
      allLists: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ term: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      term: "",
      listItems: [...this.state.listItems, this.state.term]
    });
    // console.log("submitted");
    // console.log(this.state.listItems);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.handleChange} />
          <button>Add New Item</button>
        </form>
        {/* <List allLists={this.props.allLists} listItems={this.state.listItems} /> */}
      </div>
    );
  }
}

export default NewItem;
