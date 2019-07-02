import React from "react";
import { Link } from "react-router-dom";

const Friend = props => {
  //   console.log("props: ", props);
  return (
    <div className="friend">
      <h3>
        {props.friend.name}, {props.friend.age}
        <span>
          {/* <Route
            path="/update-friend"
            render={props => (
              <UpdateFriend {...props} updateFriend={props.updateFriend} />
            )}
          /> */}
          <Link to="/update-friend" id={props.friend.id}>
            edit
          </Link>
        </span>
      </h3>
      <p>{props.friend.email}</p>
    </div>
  );
};

export default Friend;
