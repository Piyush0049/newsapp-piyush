import React, { Component } from 'react'
import loading from './grey.gif'
export class Spinner extends Component {
  render() {
    return (
      <div style={{ position: "absolute", left: "39%", bottom: "36%", height: "300px", width: "300px" }}>
        <img src={loading} alt='loading' style={{ height: "300px", width: "300px" }} />
      </div>
    )
  }
}

export default Spinner
