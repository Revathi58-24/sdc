import React from 'react';
import './Header.css'; // Import CSS file for styling (create Header.css in the same directory as this component if not already existing)
import logo from './assets/z-logo-default.svg';

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-left" style={{marginLeft:'90px'}}>
        <ul>
          <li>Buy</li>
          <li>Rent</li>
          <li>Sell</li>
          <li>Home Loans</li>
          <li>Agent Finder</li>
        </ul>
      </nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-right" style={{marginRight:'20px'}}>
        <ul>
          <li>Manage Retails</li>
          <li>Advertise</li>
          <li>Help</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
