var React = require('react');

var NavLink = require('react-router-dom').NavLink;

function Nav(){
  return (
    <ul className="main-nav">
      <li className="main-nav-item">
        <NavLink to='/'>
          Home
        </NavLink>
      </li>
      <li className="main-nav-item">
        <NavLink to='/characters'>
          Characters
        </NavLink>
      </li>
      <li className="main-nav-item">
        <NavLink to='/about'>
          About
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
