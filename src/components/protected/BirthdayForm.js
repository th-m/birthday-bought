import React, { Component } from 'react'
import { firebaseAuth } from '../../config/constants'
import { saveForm } from '../../helpers/auth'


export default class BirthdayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
    // console.log(this.state);
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    // console.log(this.state);
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user.uid);
        saveForm(this.state, user.uid);
          // .catch(e => console.log(e));
        // console.log("user found");
        
      } else {
        // console.log("no user");
      
      }
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange.bind(this)} />
        </label>
        <label>
          Budget:
          <input name="budget" type="text" value={this.state.budget} onChange={this.handleInputChange.bind(this)}/>
        </label>
        <label>
          Street Address:
          <textarea name="addressStreet" type="text" onChange={this.handleInputChange.bind(this)}>{this.state.addressStreet}</textarea>
        </label>
        <label>
          City:
          <input name="addressCity" type="text" value={this.state.addressCity} onChange={this.handleInputChange.bind(this)}/>
        </label>
        <label>
          Zip:
          <input name="addressZip" type="text" value={this.state.addressZip} onChange={this.handleInputChange.bind(this)}/>
        </label>
        <label>
          State:
          <input name="addressState" type="text" value={this.state.addressState} onChange={this.handleInputChange.bind(this)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
