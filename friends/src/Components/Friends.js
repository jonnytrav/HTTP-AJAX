import React from "react";

const Friends = props => {
  return (
    <div>
      {props.friends.map((friend, i) => {
        // console.log(friend);
        return <div key={i}>{friend.name}</div>;
      })}
    </div>
  );
};

export default Friends;
