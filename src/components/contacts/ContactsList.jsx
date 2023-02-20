import ContactsItem from "./ContactsItem";
import Filter from "../Filter/Filter";

import React, { Component } from "react";

export default class ContactsList extends Component {
  state = {
    filter: "",
  };
  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  filtredContacts = (data, filter) => {
    return data.filter((info) =>
      info.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { data, onClickDelete } = this.props;
    const { filter } = this.state;
    const filtredContacts = this.filtredContacts(data, filter);
    return (
      <div>
        <ul className="list">
          {filtredContacts.map((item) => (
            <ContactsItem
              key={item.id}
              {...item}
              onClickDelete={onClickDelete}
            />
          ))}
        </ul>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
      </div>
    );
  }
}
