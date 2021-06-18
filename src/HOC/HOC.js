import React, { Component, useState } from "react";

const Hig = (Component, data) => {
  return(
      function NewComp(){
        const [count, setCount] = useState(data);
        const add = ()=>{
            setCount(count +1)
        }

          return(
            <Component count={count} fuc={add} />
          )
      }
  )
};
export default Hig;
