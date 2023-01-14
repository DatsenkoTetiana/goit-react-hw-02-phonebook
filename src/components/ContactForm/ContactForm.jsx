import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../ContactForm/ContactForm.module.css'
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
      handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
      };
     handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
render() {
    const { name, number } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
                                <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
                    <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
