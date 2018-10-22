import React, { Component } from "react";
import Item from "./item";
import axios from "axios";
import _ from "lodash";

class Items extends Component {
  state = {
    items: [],
    sortColumn: { orderBy: "title", order: "asc" }
  };

  async componentDidMount() {
    const response = await axios.get("https://api.myjson.com/bins/1b64l4");
    const items = response.data.offers;
    this.setState({ items });
  }

  handleSorting = path => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.orderBy === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.orderBy = path;
    }
    this.setState({ sortColumn });
  };

  sorting = () => {
    const { items, sortColumn } = this.state;
    return _.orderBy(items, [sortColumn.orderBy], [sortColumn.order]);
  };

  sortingIcon = column => {
    const { orderBy, order } = this.state.sortColumn;
    if (orderBy === "title" || column !== orderBy) return null;
    return order === "asc" ? (
      <i className="fa fa-sort-asc" />
    ) : (
      <i className="fa fa-sort-desc" />
    );
  };

  render() {
    const sortedItems = this.sorting();

    return (
      <table className="table">
        <thead>
          <tr>
            <th />
            <th
              onClick={() => this.handleSorting("name")}
              className="clickable"
            >
              Name {this.sortingIcon("name")}
            </th>
            <th
              onClick={() => this.handleSorting("cash_back")}
              className="clickable"
            >
              Coupon Value {this.sortingIcon("cash_back")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map(item => (
            <Item key={item.offer_id} details={item} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Items;
