import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand">MERN</div>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to= "/create" className="nav-link active" aria-current="page">Create</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">All posts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default nav
