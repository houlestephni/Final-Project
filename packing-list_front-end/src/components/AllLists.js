import React, { Component } from "react";
import List from "./List";

class AllLists extends Component {
  constructor() {
    super();
    this.state = {
      selectedList: false,
      list: null
    };
    this.selectList = this.selectList.bind(this);
  }
  selectList(list) {
    this.setState({
      selectedList: true,
      list: list
    });
  }

  render() {
    const { allLists } = this.props;
    const { list } = this.state;
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
