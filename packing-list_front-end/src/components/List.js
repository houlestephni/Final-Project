import React, { Component } from "react";
import NewItem from "./NewItem";
import axios from "axios";

class List extends Component {
  constructor() {
    super();
    this.state = {
      allItems: [],
      item: null,
      selectedItem: false
    };
    this.getItems = this.getItems.bind(this);
    this.selectItem = this.selectItem.bind(this);
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

  selectItem(item) {
    this.setState({
      selectedItem: true,
      item: item
    });
    console.log(this.state.item);
    // this.handleDone(item.id);
  }

  // handleDone() {
  //  if(item.id)
  //   this.setState({
  //     isDone: !this.state.isDone
  //   });
  // }
  toogleDone() {
    this.setState({
      item: this.state.item
    });
  }

  render() {
    const { list } = this.props;
    const { allItems } = this.state;
    // let style = {
    //   textDecoration: this.state.isDone ? "line-through" : "none"
    // };
    return (
      <div>
        <h1>List Name: {list.name}</h1>
        <h4>Destination: {list.destination}</h4>
        <h4>Category: {list.category}</h4>
        <NewItem allItems={allItems} list={list} getItems={this.getItems} />
        {allItems.map(item => {
          return (
            <div
              // style={style}
              onClick={() => this.selectItem(item)}
              key={item.id}
              id={item.id}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
