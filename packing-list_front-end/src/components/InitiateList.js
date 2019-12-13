import React, { Component } from "react";

class InitiateList extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      destination: "",
      category: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    // console.log("form submitted");
    console.log(this.state);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
export default InitiateList;
