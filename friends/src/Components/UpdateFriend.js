import React from "react";
import { Link } from "react-router-dom";

import "./Components.css";

class UpdateFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };
  render() {
    console.log("this.props: ", this.props);
    return (
      <div>
        <Link to="/">Back to Friends</Link>
        <form>
          <input
            placeholder="Update Name..."
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Update Age..."
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            placeholder="Update Email..."
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </form>
        <button
          onClick={() => {
            this.props.updateFriend(this.state, this.props.match.params.id);
          }}
        >
          Update Friend!
        </button>
      </div>
    );
  }
}

export default UpdateFriend;
