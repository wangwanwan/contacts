import React, { Component } from 'react';


class ContactsList extends React.Component {
  render() {
    const people = [
      {name: 'jack'},
      {name: 'rose'},
      {name: 'andMe'}
    ];

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
        <ContactsList/>
      </div>
    );
  }
}

export default App;
