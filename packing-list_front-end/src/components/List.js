import React, { Component } from "react";
import NewItem from "./NewItem";
import axios from "axios";

let base_url = "https://alpacabag.herokuapp.com";

if (process.env.NODE_ENV === "development") {
  base_url = "http://localhost:3000";
}

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
    const response = await axios(`${base_url}/lists/${this.props.list.id}`);
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
        <h1 className="oneListName">List Name: {list.name}</h1>
        <h3 className="oneListDestination">Destination: {list.destination}</h3>
        <h3 className="oneList">Category: {list.category}</h3>
        <NewItem allItems={allItems} list={list} getItems={this.getItems} />
        {allItems.map(item => {
          return (
            <div
              // style={style}
              onClick={() => this.selectItem(item)}
              key={item.id}
              id={item.id}
            >
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
