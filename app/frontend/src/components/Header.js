import React from 'react';
import Swagger from './Swagger.js';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://openshift.com"><h2 className="nav-header">Helix Blueprints</h2></a>
      <div class="collapse navbar-collapse" id="nav-bar-id">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="/about"><p className="nav-link-text">About</p></a>
          </li>
          <li class="nav-item">
            <p class="nav-link"><Swagger/></p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header;
