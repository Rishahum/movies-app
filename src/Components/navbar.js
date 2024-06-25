import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <>
      <div style={{display: "flex", background:"lightgrey", }}>
      <h1 className='coralbutton' style={{padding: "25px", margin: "10px"}}>MOVIES</h1>
      <h1 className='coralbutton' style={{padding: "25px", margin: "10px"}}>FAVOURITES</h1>
      </div>
      </>
    )
  }
}
