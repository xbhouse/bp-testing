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
      <a className="navbar-brand" href="https://openshift.com"><h2 className="nav-header page-title">Helix Blueprints</h2></a>
        <ul className="navbar-nav mr-auto">
          {renderHeader}
        </ul>
    </div>
  </nav>
  )
}

export default Header;
