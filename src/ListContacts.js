import React, {Component} from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (value) => {
    this.setState({query: value.trim()})
  }

  render() {
    let showingContacts;
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i'); // 'i' means Case Insensitive
      showingContacts = this.props.contacts.filter((contact) => match.test(contact.name));
    } else {
      showingContacts = this.props.contacts;
    }
    showingContacts.sort(sortBy('name'));
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contact"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className="contact-list">
          {showingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}>
              </div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => this.props.onRemoveContact(contact)} className="contact-remove"></button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts;
