import React, {useState} from 'react';
const data = require('../data/data.json');

const Header = () => {
  const [username, setUsername] = useState("username");

  const renderHeader = (data.headerItems).map((item, index) => {
    return (
      <li key={index} className="nav-item">
        <a className="nav-link active" href={item.endpoint}><p className="header-text">{item.display}</p></a>
      </li>
    );
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
<<<<<<< HEAD
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
=======
      <a className="navbar-brand" href="https://openshift.com"><h2 className="nav-header page-title">Helix Blueprints</h2></a>
        <ul className="navbar-nav mr-auto">
          {renderHeader}
        </ul>
    </div>
>>>>>>> 59c43609ababd54a2f7dc8905f455ae9630a34e2
  </nav>
  )
}

export default Header;
