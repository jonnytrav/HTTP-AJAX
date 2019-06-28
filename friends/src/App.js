import React from "react";
import axios from "axios";
import "./App.css";

import FriendForm from "./Components/FriendForm";
import Friends from "./Components/Friends";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      // .then(res => console.log(res))
      .catch(err => console.error(err));
    // console.log(this.state);
  }
  render() {
    return (
      <div>
        <FriendForm addFriend={this.addFriend} friends={this.state.friends} />
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
