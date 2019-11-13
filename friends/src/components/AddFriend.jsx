import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const AddFriend = props => {
  const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: "",
    age: 0,
    email: ""
  });

  const axiosWithAuth = () => {
    return axios.create({
      headers: {
        authorization: sessionStorage.getItem("token")
      }
    });
  };

  const handleChanges = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => {
        console.log(res.data);
        props.history.push("/friendslist");
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name
          <input
            name="name"
            type="text"
            value={newFriend.name}
            onChange={handleChanges}
          />
        </label>
        <label>
          {" "}
          age
          <input
            name="age"
            type="number"
            value={newFriend.age}
            onChange={handleChanges}
          />
        </label>
        <label>
          {" "}
          email
          <input
            name="email"
            type="email"
            value={newFriend.email}
            onChange={handleChanges}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default withRouter(AddFriend);
