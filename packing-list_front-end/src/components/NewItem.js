import React, { Component } from "react";
import List from "./List";
import axios from "axios";

class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ item: event.target.value });
  }
  // async handleSubmit(event) {
  //   event.preventDefault();
  //   const item = [...this.props.list.items, this.state.item];
  //   // await axios.put(`/lists/${this.props.list.id}`);
  //   this.setState({
  //     // item: "",
  //     item: [...this.props.list.items, this.props.list.items]
  //   });

  //   console.log("submitted");
  //   console.log(item);
  //   console.log(this.state.item);
  // }
  async handleSubmit(event) {
    event.preventDefault();
    // console.log(this.props.list.items);
    const newItem = this.state.item;
    this.setState({
      list: {
        name: this.props.list.name,
        destination: this.props.list.destination,
        category: this.props.list.category,
        season: this.props.list.season,
        items: this.props.list.items.concat(newItem)
      }
    });
    await axios.put(`/lists/${this.props.list.id}`, this.state.list);
    console.log(newItem);
    console.log(this.state.items);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.handleChange} />
          <button>Add New Item</button>
        </form>
        {/* <List /> */}
      </div>
    );
  }
}

export default NewItem;
