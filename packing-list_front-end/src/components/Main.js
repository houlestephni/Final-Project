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
    this.handleAddList = this.handleAddList.bind(this);
  }
  componentDidMount() {
    this.getLists();
  }
  async getLists() {
    const response = await axios("/lists");
    const data = response.data;
    // console.log(data);
    this.setState({
      allLists: data
    });
    console.log(this.state.allLists);
  }
  handleAddList(event, list) {
    event.preventDefault();
    // await axios.post("/lists", newList);

    console.log(this.state.list);
  }

  render() {
    const { allLists } = this.state;
    return (
      <div>
        <AddList handleSubmit={this.handleAddList} />
        <AllLists getLists={this.getLists} allLists={allLists} />
      </div>
    );
  }
}
export default Main;
