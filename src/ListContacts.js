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
    this.setState({query: value.trim()});
  }

  cleanQuery = () => {
    // this.setState({query: ''});
    this.updateQuery('');
  }

  render() {
    const {contacts, onRemoveContact} = this.props;
    const {query} = this.state;

    let showingContacts;
    if(query) {
      const match = new RegExp(escapeRegExp(query), 'i'); // 'i' means Case Insensitive
      showingContacts = contacts.filter((contact) => match.test(contact.name));
    } else {
      showingContacts = contacts;
    }

    showingContacts.sort(sortBy('name'));

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contact"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>

        {(showingContacts.length !== contacts.length) && (
          <div className="showing-contacts">
            <span>Now show {showingContacts.length} of {contacts.length} total</span>
            <button onClick={this.cleanQuery}>show all</button>
          </div>
        )}
        
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
              <button onClick={() => onRemoveContact(contact)} className="contact-remove"></button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts;
