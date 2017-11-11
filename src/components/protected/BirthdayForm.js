import React, { Component } from 'react'
import { firebaseAuth } from '../../config/constants'
import { saveBirthday } from '../../helpers/birthday'


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
        saveBirthday(this.state, user.uid);
          // .catch(e => console.log(e));
        // console.log("user found");

      } else {
        // console.log("no user");

      }
    })

  }

  render() {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var states = [
      {abbrev:'AK',display:'Alaska'},
      {abbrev:'HI',display:'Hawaii'},
      {abbrev:'CA',display:'California'},
      {abbrev:'NV',display:'Nevada'},
      {abbrev:'OR',display:'Oregon'},
      {abbrev:'WA',display:'Washington'},
      {abbrev:'AZ',display:'Arizona'},
      {abbrev:'CO',display:'Colorada'},
      {abbrev:'ID',display:'Idaho'},
      {abbrev:'MT',display:'Montana'},
      {abbrev:'NE',display:'Nebraska'},
      {abbrev:'NM',display:'New Mexico'},
      {abbrev:'ND',display:'North Dakota'},
      {abbrev:'UT',display:'Utah'},
      {abbrev:'WY',display:'Wyoming'},
      {abbrev:'AL',display:'Alabama'},
      {abbrev:'AR',display:'Arkansas'},
      {abbrev:'IL',display:'Illinois'},
      {abbrev:'IA',display:'Iowa'},
      {abbrev:'KS',display:'Kansas'},
      {abbrev:'KY',display:'Kentucky'},
      {abbrev:'LA',display:'Louisiana'},
      {abbrev:'MN',display:'Minnesota'},
      {abbrev:'MS',display:'Mississippi'},
      {abbrev:'MO',display:'Missouri'},
      {abbrev:'OK',display:'Oklahoma'},
      {abbrev:'SD',display:'South Dakota'},
      {abbrev:'TX',display:'Texas'},
      {abbrev:'TN',display:'Tennessee'},
      {abbrev:'WI',display:'Wisconsin'},
      {abbrev:'CT',display:'Connecticut'},
      {abbrev:'DE',display:'Delaware'},
      {abbrev:'FL',display:'Florida'},
      {abbrev:'GA',display:'Georgia'},
      {abbrev:'IN',display:'Indiana'},
      {abbrev:'ME',display:'Maine'},
      {abbrev:'MD',display:'Maryland'},
      {abbrev:'MA',display:'Massachusetts'},
      {abbrev:'MI',display:'Michigan'},
      {abbrev:'NH',display:'New Hampshire'},
      {abbrev:'NJ',display:'New Jersey'},
      {abbrev:'NY',display:'New York'},
      {abbrev:'NC',display:'North Carolina'},
      {abbrev:'OH',display:'Ohio'},
      {abbrev:'PA',display:'Pennsylvania'},
      {abbrev:'RI',display:'Rhode Island'},
      {abbrev:'SC',display:'South Carolina'},
      {abbrev:'VT',display:'Vermont'},
      {abbrev:'VA',display:'Virginia'},
      {abbrev:'WV',display:'West Vrginia'},
    ];
    var days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            Name:
            <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange.bind(this)} />
          </label>
        </div>
        <br/>
        <div>
          <label>
            Budget:
            <input name="budget" type="text" value={this.state.budget} onChange={this.handleInputChange.bind(this)}/>
            </label>
        </div>
        <br/>
        <div>
          <label>
            Street Address:
            <textarea name="addressStreet" type="text" onChange={this.handleInputChange.bind(this)}>{this.state.addressStreet}</textarea>
            </label>
        </div>
        <br/>
        <div>
          <label>
            City:
            <input name="addressCity" type="text" value={this.state.addressCity} onChange={this.handleInputChange.bind(this)}/>
          </label>
        </div>
        <br/>
        <div>
          <label>
          State:
          <select name="addressStreet" onChange={this.handleInputChange.bind(this)} >
            {states.map(state => <option value={state.abbrev}>{state.display}</option> )}
          </select>
          </label>
        </div>
        <br/>
        <div>
          <label>
          Zip:
          <input name="addressZip" type="text" value={this.state.addressZip} onChange={this.handleInputChange.bind(this)}/>
        </label>
        </div>
        <br/>
        <div>
          <label>
          Birth Month:
          <select name="birthMonth" onChange={this.handleInputChange.bind(this)} >
            {months.map(month => <option value={months.indexOf(month)+1}>{month}</option> )}
          </select>
          </label>
        </div>
        <br/>
        <div>
          <label>
          Birth Day:
          <select name="birthDay" onChange={this.handleInputChange.bind(this)} >
            {days.map(day => <option value={day}>{day}</option> )}
          </select>
          </label>
        </div>
        <br/>
        <div>
          <label>
          Year:[optional]
          <input name="birthYear" type="number" value={this.state.birthYear} onChange={this.handleInputChange.bind(this)}/>
          </label>
        </div>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
