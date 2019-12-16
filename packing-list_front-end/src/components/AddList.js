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
        {/* <button onClick={this.onSubmit}>Create New List</button>
        {this.state.createList && <InitiateList />} */}

        {this.state.createList ? (
          <NewListForm
            handleSubmit={this.props.handleAddList}
            allLists={this.props.allLists}
          />
        ) : (
          <button onClick={this.onSubmit}>Create New List</button>
        )}
      </div>
    );
  }
}
export default AddList;
