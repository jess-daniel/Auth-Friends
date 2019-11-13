import React from "react";

const friend = props => {
  return (
    <>
      <h4>{props.friend.name}</h4>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </>
  );
};

export default friend;
