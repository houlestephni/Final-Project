import React, { Component } from "react";
import AllLists from "./AllLists";

class InitiateList extends Component {
  constructor() {
    super();
    this.state = {
      list: {
        name: "",
        destination: "",
        category: ""
      },
      allLists: [],
      listCreated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      list: {
        ...this.state.list,
        [event.currentTarget.name]: event.currentTarget.value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    this.setState({
      list: {},
      allLists: [...this.state.allLists, this.state.list],
      listCreated: true
    });
    console.log(this.state.allLists);
  }

  render() {
    return (
      <div>
        {this.state.listCreated ? (
          <AllLists allLists={this.state.allLists} />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="List Name"
            ></input>
            <input
              type="text"
              id="destination"
              name="destination"
              value={this.state.destination}
              onChange={this.handleChange}
              placeholder="Destination"
            ></input>
            <input
              type="text"
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              placeholder="Category"
            ></input>
            <input type="submit" value="Enter"></input>
          </form>
        )}
      </div>
    );
  }
}
export default InitiateList;
