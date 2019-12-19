import React, { Component } from "react";
import NewItem from "./NewItem";
import axios from "axios";

class List extends Component {
  constructor() {
    super();
    this.state = {
      allItems: []
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }
  async getItems() {
    const response = await axios(`/lists/${this.props.list.id}`);
    const data = response.data.items;
    this.setState({
      allItems: data
    });
    // console.log(this.state.allItems);
  }

  render() {
    const { list } = this.props;
    const { allItems } = this.state;
    return (
      <div>
        <h1>List Name: {list.name}</h1>
        <h4>Destination: {list.destination}</h4>
        <h4>Category: {list.category}</h4>
        {allItems.map(item => {
          return <div key={item.id}>{item.name}</div>;
        })}
        <NewItem allItems={allItems} list={list} getItems={this.getItems} />
      </div>
    );
  }
}

export default List;
