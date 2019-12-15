import React, { Component } from "react";
import axios from "axios";
// import NewItem from "./NewItem";
import List from "./List";

class AllLists extends Component {
  constructor() {
    super();
    this.state = {
      allLists: [],
      selectedList: false,
      list: null
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
    // console.log(data);
    this.setState({
      allLists: data
    });
  }
  selectList(list) {
    this.setState({
      selectedList: true,
      list: list
    });
  }

  render() {
    const { allLists, list } = this.state;
    return (
      <div>
        {this.state.selectedList ? (
          <List allLists={allLists} list={list} />
        ) : (
          <div>
            <h1>All Lists</h1>
            {allLists.map(list => (
              <div
                onClick={() => this.selectList(list)}
                id={list.id}
                key={list.id}
              >
                {list.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AllLists;
