import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
      <h2 className="nav-header">Helix Blueprints</h2>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/about"><p className="nav-link-text">About</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="http://localhost:5000/api/swagger"><p className="nav-link-text">Swagger</p></a>
        </li>
      </ul>
      </div>
  </nav>
  )
}

export default Header;
