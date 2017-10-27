import React, { Component } from 'react';


class ContactsList extends React.Component {
  render() {
    const people = this.props.contacts;

    return <ol>
      {people.map(people => (
        <li key = {people.name}>{people.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsList contacts={[
          {name: 'jack'},
          {name: 'rose'},
          {name: 'andMe'}        
        ]}/>
        <ContactsList contacts={[
          {name: 'xuchen'},
          {name: 'mingliang'},
          {name: 'tanshi'}
        ]}/>
      </div>
    );
  }
}

export default App;
