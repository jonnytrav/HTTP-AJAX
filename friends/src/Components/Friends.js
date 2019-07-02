import React from "react";
import { Link } from "react-router-dom";

import "./Components.css";
import Friend from "./Friend";

const Friends = props => {
  return (
    <div>
      <Link to="friend-form">New Friend</Link>
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
