import React from "react";
import "./Components.css";

const Friends = props => {
  return (
    <div>
      {props.friends.map((friend, i) => {
        // console.log(friend);
        return (
          <div className="friend">
            <h3 key={i}>
              {friend.name}, {friend.age}
            </h3>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
