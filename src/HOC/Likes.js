import React, { Component } from "react";
import  HOC  from "./HOC";
const Likes = (props) => {
  return (
    <div>
      <h1>Likes {props.count}</h1>
      <button onClick={props.fuc}>Add Like</button>
    </div>
  );
};
export default HOC(Likes, 4);
