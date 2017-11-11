

class BirthdayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
        </label>
        <label>
          Budget:
          <input name="budget" type="text" value={this.state.budget} onChange={this.handleInputChange}/>
        </label>
        <label>
          Street Address:
          <textarea name="addressStreet" type="text" onChange={this.handleInputChange}>{this.state.addressStreet}</textarea>
        </label>
        <label>
          City:
          <input name="addressCity" type="text" value={this.state.addressCity} onChange={this.handleInputChange}/>
        </label>
        <label>
          Zip:
          <input name="addressZip" type="text" value={this.state.addressZip} onChange={this.handleInputChange}/>
        </label>
        <label>
          State:
          <input name="addressState" type="text" value={this.state.addressState} onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
