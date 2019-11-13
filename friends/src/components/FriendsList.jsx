import React, { useState, useEffect } from "react";
import axios from "axios";

import Friend from "./Friend";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const axiosWithAuth = () => {
    return axios.create({
      headers: {
        authorization: sessionStorage.getItem("token")
      }
    });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  return (
    <>
      <h3>Friends List</h3>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </>
  );
};

export default FriendsList;
