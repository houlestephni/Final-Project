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
    this.setState({
      item: ""
    });
    this.props.getItems();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="field has-addons has-addons-centered">
            <div className="control">
              <input
                className="input"
                value={this.state.item}
                onChange={this.handleChange}
                placeholder="Add An Item"
              />
            </div>

            <div className="control">
              <button className="button is-danger is-info">+</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewItem;
