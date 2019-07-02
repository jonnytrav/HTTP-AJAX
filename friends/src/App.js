import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";

import FriendForm from "./Components/FriendForm";
import Friends from "./Components/Friends";
import UpdateFriend from "./Components/UpdateFriend";

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
  addFriend = friend => {
    axios.post("http://localhost:5000/friends", friend).then(res => {
      this.setState({ friends: res.data });
    });
    // this.props.history.push("/");
  };
  updateFriend = (friend, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.error(err));
    // axios.put(`http://localhost:5000/friends/${friend.id}`);
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <Friends
              {...props}
              friends={this.state.friends}
              updateFriend={this.updateFriend}
            />
          )}
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
        <Route
          path="/update-friend/:id"
          render={props => (
            <UpdateFriend {...props} updateFriend={this.updateFriend} />
          )}
        />
        <Route path="/friend/:id" />
      </div>
    );
  }
}

export default App;
