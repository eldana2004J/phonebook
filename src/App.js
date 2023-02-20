import Searchbar from "./components/Searchbar/Searchbar";
import React, { Component } from "react";
import "./App.css";
import shortid from "shortid";
import ContactsList from "./components/contacts/ContactsList";
export default class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    let contacts = localStorage.getItem("contacts");
    let parsedContact = JSON.parse(contacts);

    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleSumbit = (data) => {
    let isExist = false;

    this.state.contacts.map((contact) => {
      if (contact.name == data.name && contact.number == contact.number) {
        alert(`This contact ${contact.name} already exists`);

        isExist = true;
      }
    });

    let newContact = {
      ...data,
      id: shortid.generate(),
    };

    !isExist &&
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
  };

  onClickDelete = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    return (
      <div className="box">
        <Searchbar onSubmit={this.handleSumbit} />
        <ContactsList
          data={this.state.contacts}
          onClickDelete={this.onClickDelete}
        />
      </div>
    );
  }
}
