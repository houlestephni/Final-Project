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
    // this.selectItem = this.selectItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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

  // selectItem(item) {
  //   this.setState({
  //     selectedItem: true,
  //     item: item
  //   });
  //   console.log(this.state.item);
  // }

  async deleteItem(id) {
    await axios.delete(`${base_url}/items/${id}`);
    const filteredItems = this.state.allItems.filter(item => {
      return item.id !== id;
    });
    this.setState({
      allItems: filteredItems
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
        <h3 className="oneListCategory">Category: {list.category}</h3>
        <NewItem allItems={allItems} list={list} getItems={this.getItems} />
        <div className="listWrapper">
          <ul className="itemList">
            {allItems.map(item => {
              return (
                <li
                  className="item"
                  // style={style}
                  // onClick={() => this.selectItem(item)}
                  key={item.id}
                  id={item.id}
                >
                  <input className="itemCheckbox" type="checkbox" />
                  <label className="itemLabel">{item.name}</label>
                  <span
                    className="deleteItemBtn"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
