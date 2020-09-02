import React from "react";

class MarksComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToAdd: "",
      passwordToAdd: "",
      allergies: "",
      foodPrefs: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <p>Sorry, Mark's testing this!</p>
        <div className="alert alert-info">
          <h4>Testing Input</h4>
          <p>Username: {this.state.userToAdd}</p>
          <p>Password: {this.state.passwordToAdd}</p>
          <p>Allergies: {this.state.allergies}</p>
          <p>Food Prefs: {this.state.foodPrefs}</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="userToAdd"
            value={this.state.userToAdd}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="passwordToAdd"
            value={this.state.passwordToAdd}
            onChange={this.handleChange}
          />
          <label>Allergies:</label>
          <input
            type="text"
            name="allergies"
            value={this.state.allergies}
            onChange={this.handleChange}
          />
          <label>Food Preferences:</label>
          <input
            type="text"
            value={this.state.foodPrefs}
            name="foodPrefs"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default MarksComponent;
