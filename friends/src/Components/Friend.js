import React from "react";
import { Link } from "react-router-dom";

const Friend = props => {
  //   console.log("props: ", props);
  return (
    <div className="friend">
      <div className="friend-info">
        <h3>{props.friend.name}</h3>
        <div>Age: {props.friend.age}</div>
        <div>Email: {props.friend.email}</div>
      </div>
      <div>
        <Link to={`/update-friend/${props.friend.id}`}>edit</Link>
      </div>
    </div>
  );
};

export default Friend;
