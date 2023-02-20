import React, { Component } from "react";
const initialState = { name: "", value: "" };
export default class Searchbar extends Component {
  state = initialState;

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { props, state } = this;
    e.preventDefault();
    props.onSubmit(state);
  };

  render() {
    return (
      <div>
        <h1 className="title">Phonebook</h1>{" "}
        <form onSubmit={this.handleSubmit}>
          <input
            className="name"
            placeholder="Имя"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Номер"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />

          <button className="btn" type="submit">
            Добавить в контакт
          </button>
        </form>
      </div>
    );
  }
}
