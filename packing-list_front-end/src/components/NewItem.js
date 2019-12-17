import React, { Component } from "react";
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
  async handleSubmit(event) {
    event.preventDefault();
    const item = {
      list_id: this.props.list.id,
      name: this.state.item
    };
    await axios.post(`./lists/${this.props.list.id}/items`, item);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.handleChange} />
          <button>Add New Item</button>
        </form>
      </div>
    );
  }
}

export default NewItem;
