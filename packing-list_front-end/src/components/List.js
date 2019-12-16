import React, { Component } from "react";
import NewItem from "./NewItem";

class List extends Component {
  constructor() {
    super();
    this.state = {
      // term: " ",
      listItems: []
    };
  }

  render() {
    const { allLists, list } = this.props;
    return (
      <div>
        <h1>List Name: {list.name}</h1>
        <h4>Destination:{list.destination}</h4>
        <h4>Season:{list.season}</h4>
        {list.items.map((listItems, index) => {
          return <div key={index}>{listItems}</div>;
        })}
        <NewItem list={list} />
      </div>
    );
  }
}

export default List;
