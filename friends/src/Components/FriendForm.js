import React from "react";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div className="friend-form">
        <Link to="/">Back to Friends</Link>
        <form className="form">
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
          <button onClick={() => this.props.addFriend(this.state)}>Add!</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
