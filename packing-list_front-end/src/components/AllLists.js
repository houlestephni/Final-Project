import React, { Component } from "react";
import axios from "axios";
import NewItem from "./NewItem";

class AllLists extends Component {
  constructor() {
    super();
    this.state = {
      allLists: [],
      selectedList: false
    };
    this.selectList = this.selectList.bind(this);
    this.getLists = this.getLists.bind(this);
  }
  componentDidMount() {
    this.getLists();
  }
  async getLists() {
    const response = await axios("/lists");
    const data = response.data;
    console.log(data);
    this.setState({
      allLists: data
    });
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
