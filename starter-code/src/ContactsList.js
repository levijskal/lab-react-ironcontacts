import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


class ContactsList extends Component {
  constructor(props){
      super(props)
      this.state = {
        contacts: contacts.slice(0,5),

      }
  
    }

    addRandom(){
      var randomContact = contacts[Math.floor(Math.random() * contacts.length + 5)];
      let newStateContacts = [...this.state.contacts]
      newStateContacts.push(randomContact);
      this.setState({ 
        contacts: newStateContacts,
      });
    }
  
  render() {
    
    const result = this.state.contacts.map((contact)=>{
      return <tr>
                <td>
                  <img src={contact.pictureUrl} width="100px" />
                </td>
                <td>
                  <h1>{contact.name}</h1>
                </td>
                <td>
                  <h4>{contact.popularity}</h4>
                </td>
                <h1></h1>
              </tr>
              
    })



  return (
    <div className="App">
          <h1>IronContacts</h1>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>

              {result}

          </table>
          <div className="App">
            <button onClick = {()=> this.addRandom()} >Add Random</button>
          </div>
      </div>
    );
  }
}

export default ContactsList;