import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
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
        <Route
          exact
          path="/"
          render={props => <Friends {...props} friends={this.state.friends} />}
        />
        <Route
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              addFriend={this.addFriend}
              friends={this.state.friends}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
