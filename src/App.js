import React, { Component, useState } from 'react'
import Likes from './HOC/Likes'
import Comments from './HOC/Comment'
const App=()=> {

  
    return (
      <div>
        <Likes />
        <br />
        <Comments />
      </div>
    )
  
}
export default App