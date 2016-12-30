import React, { Component } from 'react'
import '../Welcome.css'

class Welcome extends Component {
  // componentDidMount(){
  //   document.body.style.backgroundColor = "red"// Set the style
  //   // document.body.className="body-component-a" // Or set the class
  // }
  render() {
    return (
      <div className="welcomeContent">
        <div className="name">
          <h1 className="bradley">BRADLEY</h1>
          <h1 className="cravens">CRAVENS</h1>
        </div>
      <h2 className="title">WEB DEVELOPER</h2>
      </div>
    )
  }
}

export default Welcome
