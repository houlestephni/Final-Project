import React, { Component } from "react";
// import NewItem from "./NewItem";

class List extends Component {
  constructor() {
    super();
    this.state = {
      term: " ",
      listItems: []
    };
  }

  render() {
    return (
      <div>
        <h1>List: {this.props.allLists[0].name}</h1>
        {this.props.listItems.map((listItems, index) => {
          return <div key={index}>{listItems}</div>;
        })}
      </div>
    );
  }
}

export default List;
