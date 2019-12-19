import React, { Component } from "react";
import List from "./List";
import axios from "axios";
import AddList from "./AddList";

class AllLists extends Component {
  constructor() {
    super();
    this.state = {
      selectedList: false,
      list: null,
      allLists: []
      // allLists: [this.props.allLists]
    };
    this.getLists = this.getLists.bind(this);
    this.selectList = this.selectList.bind(this);
  }
  componentDidMount() {
    this.getLists();
  }
  async getLists() {
    const response = await axios("/lists");
    const data = response.data;
    this.setState({
      allLists: data
    });
    // console.log(this.state.allLists);
  }
  selectList(list) {
    this.setState({
      selectedList: true,
      list: list
    });
  }

  render() {
    const { allLists, list } = this.state;
    // const { list } = this.state;
    return (
      <div>
        {this.state.selectedList ? (
          <List allLists={allLists} list={list} />
        ) : (
          <div>
            <div>
              <AddList />
            </div>
            {allLists.map(list => (
              <div
                className="listDiv"
                onClick={() => this.selectList(list)}
                id={list.id}
                key={list.id}
              >
                <h3 className="listName">{list.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AllLists;
