import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router'
import '../NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">

        <Link to="/">
          <Button
          label="Home"
          />
        </Link>

        <Link to="/about">
          <Button
          label="About"
          />
        </Link>

        <Link to="/works">
          <Button
          label="Works"
          />
        </Link>

        <Link to="/contact">
          <Button
          label="Contact"
          />
        </Link>
        
      </div>
    )
  }
}

export default NavBar
