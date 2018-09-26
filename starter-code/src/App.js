import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ContactsList from './ContactsList.js'


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