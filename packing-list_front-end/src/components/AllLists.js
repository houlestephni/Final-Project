import React, { Component } from "react";
import NewItem from "./NewItem";

class AllLists extends Component {
  constructor() {
    super();
    this.state = {
      allLists: [],
      selectedList: false
    };
    this.selectList = this.selectList.bind(this);
  }

  selectList(event) {
    event.preventDefault();
    this.setState({
      selectedList: true
    });
    console.log("clicked");
  }
  //make axios call to get all lists
  // render the lists names

  render() {
    return (
      <div>
        {this.state.selectedList ? (
          <NewItem allLists={this.props.allLists} />
        ) : (
          <div>
            <h1>All Lists</h1>
            {this.props.allLists.map((allLists, index) => (
              <div onClick={this.selectList} key={index}>
                {allLists.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AllLists;
