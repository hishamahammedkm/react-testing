import React, { Component } from "react";

import  HOC  from "./HOC";

const Comment = (props) => {
  return (
    <div>
      <h1>Commets {props.count}</h1>
      <button onClick={props.fuc}>Add Like</button>
    </div>
  );
};
export default HOC(Comment, 9);
