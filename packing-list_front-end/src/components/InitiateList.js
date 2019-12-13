import React, { Component } from "react";
import AllLists from "./AllLists";

class InitiateList extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      destination: "",
      category: "",
      listCreated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    this.setState({
      listCreated: true
    });
    const formData = {
      name: this.state.name,
      destination: this.state.destination,
      category: this.state.category
    };
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  }

  render() {
    return (
      <div>
        {this.state.listCreated ? (
          <AllLists name={this.state.name} />
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
