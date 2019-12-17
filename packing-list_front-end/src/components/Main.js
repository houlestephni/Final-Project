import React, { Component } from "react";
import axios from "axios";
import AllLists from "./AllLists";
import AddList from "./AddList";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      allLists: []
    };
    this.getLists = this.getLists.bind(this);
    // this.handleAddList = this.handleAddList.bind(this);
  }

  async getLists() {
    const response = await axios("/lists");
    const data = response.data;
    this.setState({
      allLists: data
    });
    // console.log(this.state.allLists);
  }

  componentDidMount() {
    this.getLists();
  }

  render() {
    const { allLists } = this.state;
    return (
      <div>
        <AddList allLists={allLists} />
        <AllLists getLists={this.getLists} allLists={allLists} />
      </div>
    );
  }
}
export default Main;
