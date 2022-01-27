import React from 'react';
import Swagger from './Swagger.js';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://openshift.com"><h2 className="nav-header">Helix Blueprints</h2></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#"><p className="nav-link-text">Home</p></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Swagger/></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header;
