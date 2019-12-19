import React, { Component } from "react";
import AllLists from "./AllLists";
import axios from "axios";

class NewListForm extends Component {
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
    const list = {
      name: this.state.name,
      destination: this.state.destination,
      category: this.state.category
    };
    await axios.post("./lists", list);
    // console.log(list);
    this.setState({
      listCreated: true,
      name: "",
      destination: "",
      category: ""
    });
    // this.props.getLists();
  }

  render() {
    return (
      <div>
        {this.state.listCreated ? (
          <AllLists />
        ) : (
          <div className="field is-grouped-center">
            <form onSubmit={this.handleSubmit}>
              <div className="field is-grouped-center">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name Your List"
                  ></input>
                </div>
              </div>
              <div className="field is-grouped-center">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    id="destination"
                    name="destination"
                    value={this.state.destination}
                    onChange={this.handleChange}
                    placeholder="Destination"
                  ></input>
                </div>
              </div>
              <div className="field is-grouped-center">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    id="category"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                    placeholder="Category"
                  ></input>
                </div>
              </div>
              <div className="field is-grouped-center">
                <div className="control">
                  <input
                    className="button is-danger is-medium"
                    type="submit"
                    value="Enter"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default NewListForm;
