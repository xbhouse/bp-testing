import React from 'react';
const data = require('../data/data.json');
console.log(data.headerItems[0])


const Header = () => {

  const renderHeader = (data.headerItems).map((item, index) => {
    return (
      <li key={index} className="nav-item">
        <a className="nav-link active" href={item[0]}><p className="header-text">{item[1]}</p></a>
      </li>
    );
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://openshift.com"><h2 className="nav-header page-title">Helix Blueprints</h2></a>
        <ul className="navbar-nav me-auto">
          {renderHeader}
        </ul>
    </div>
  </nav>
  )
}

export default Header;
