import React from "react";
import { Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignUp} />
      <PrivateRoute exact path="/friendslist">
        <FriendsList />
      </PrivateRoute>
    </div>
  );
}

export default App;
