import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="contactHeader">
          <h1 className="contact">CONTACT</h1>
          <h3 className="contactName">BRADLEY CRAVENS</h3>
        </div>
        <div className="contactInfo">
          <span className="mobile"> M: 910.547.8997 </span>
          <span className="email"> E: bradleycravens@gmail.com </span>
        </div>
      </div>
    )
  }
}

export default Contact
