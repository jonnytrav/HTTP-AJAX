import React from "react";
import axios from "axios";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.friend);
  };
  addFriend = friend => {
    axios.post("http://localhost:5000/friends", friend).then(res => {
      this.setState({ friends: res.data });
    });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <div className="friend-form">
        <form>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            value={this.state.name}
          />
          <input
            type="number"
            name="age"
            onChange={this.handleChange}
            placeholder="Age"
            value={this.state.age}
          />
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            value={this.state.email}
          />
        </form>
        <button onClick={() => this.addFriend(this.state)}>Add!</button>
      </div>
    );
  }
}

export default FriendForm;
