import React from "react";
import { Link } from "react-router-dom";

import "./Components.css";
import Friend from "./Friend";

const Friends = props => {
  return (
    <div className="home-page">
      <Link to="friend-form" className="new-friend-btn">
        New Friend
      </Link>
      <div className="friends">
        {props.friends.map((friend, i) => {
          // console.log(friend);
          return (
            <div key={i}>
              <Friend updateFriend={props.updateFriend} friend={friend} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
