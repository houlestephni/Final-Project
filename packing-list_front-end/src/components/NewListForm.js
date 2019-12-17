import React, { Component } from "react";
import Main from "./Main";
import axios from "axios";

class NewListForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      destination: "",
      category: "",
      season: "",
      items: [],
      listCreated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   // console.log(this.state);
  //   this.setState({
  //     list: {},
  //     allLists: [...this.state.allLists, this.state.list],
  //     listCreated: true
  //   });
  //   console.log(this.state.allLists);
  // }
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      listCreated: true
    });
    const list = {
      name: this.state.name,
      destination: this.state.destination,
      category: this.state.category
    };
    await axios.post("./lists", list);
    // console.log(list);
  }

  render() {
    return (
      <div>
        {this.state.listCreated ? (
          <Main />
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
export default NewListForm;
