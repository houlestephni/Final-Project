import React, { Component } from "react";
// import NewItem from "./NewItem";

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
        <h1>List: {list.name}</h1>
        <h4>Category:{list.category}</h4>
        <h4>Season:{list.season}</h4>
        {list.items.map((listItems, index) => {
          return <div key={index}>{listItems}</div>;
        })}
      </div>
    );
  }
}

export default List;
