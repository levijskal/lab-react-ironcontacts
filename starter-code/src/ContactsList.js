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

    deleteContact(index){
      const delContact = [...this.state.contacts];
      delContact.splice(index, 1)
      this.setState({
        contacts: delContact
      })
    }

    sortByName(){
      let sortContacts = this.state.contacts.slice();
      sortContacts.sort((a,b) => a.name.localeCompare(b.name));
  
      this.setState({
          contacts: sortContacts
      })
    }

    sortByPopularity(){
      let sortContacts = this.state.contacts.slice();
      sortContacts.sort((a, b) => a.popularity - b.popularity);
  
      this.setState({
          contacts: sortContacts
      })
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
              </tr>
              
    })



  return (
    <div>
          <h1>IronContacts</h1>

          <table>
          
            <tr>
              <th>Picture</th>
              <th>Name<button onClick={()=>this.sortByName()}>Sort by name</button></th>
              
              <th>Popularity<button onClick={()=>this.sortByPopularity()}>Sort by popularity</button></th>
            </tr>

              {result}

          </table>
          <div>
          </div>
            <button onClick = {()=> this.addRandom()} >Add one random</button>
            <button onClick={()=>this.deleteContact()} >Delete one</button>
      </div>
    );
  }
}

export default ContactsList;