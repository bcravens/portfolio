import React, { Component } from 'react'
import '../Welcome.css'

class Welcome extends Component {
  componentDidMount(){
    document.body.style.backgroundColor = "red"// Set the style
    // document.body.className="body-component-a" // Or set the class
  }
  render() {
    return (
      <h1>welcome</h1>
    )
  }
}

export default Welcome
