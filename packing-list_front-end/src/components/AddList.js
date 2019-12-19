import React, { Component } from "react";
import NewListForm from "./NewListForm";

class AddList extends Component {
  constructor() {
    super();
    this.state = {
      createList: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      createList: true
    });
  }

  render() {
    return (
      <div>
        {this.state.createList ? (
          <NewListForm
            allLists={this.props.allLists}
            getLists={this.getLists}
          />
        ) : (
          <button
            className="button is-danger is-outlined is-large"
            onClick={this.onSubmit}
          >
            Create New List
          </button>
        )}
      </div>
    );
  }
}
export default AddList;
