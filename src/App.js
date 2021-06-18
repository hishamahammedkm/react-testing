import React, { Component } from 'react'
import HOC from './Hoc'
class App extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.data}</h1>
      </div>
    )
  }
}
export default HOC(App)