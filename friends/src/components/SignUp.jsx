import React, { useState } from "react";
import axios from "axios";

const SignUp = props => {
  const [values, setValues] = useState({
    credentials: {
      username: "",
      password: ""
    },
    isLoggedIn: false
  });

  const handleChanges = e => {
    setValues({
      credentials: { ...values.credentials, [e.target.name]: e.target.value }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", values.credentials)
      .then(res => {
        console.log(res);
        const { data } = res;

        sessionStorage.setItem("token", data.payload);
        setValues({ ...values, isLoggedIn: true });
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
          Username
          <input
            name="username"
            type="text"
            value={values.username}
            onChange={handleChanges}
          />
        </label>
        <label>
          {" "}
          Password
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChanges}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default SignUp;
