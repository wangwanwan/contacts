import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (value) => {
    this.setState({query:value.trim()})
  }

  render() {
    return (
      <div className="list-contacts">
      {JSON.stringify(this.state)}
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
          {this.props.contacts.map(contact => (
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
