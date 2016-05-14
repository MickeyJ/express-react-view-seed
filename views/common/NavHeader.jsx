const React = require('react');

const NavHeader = (props) =>(
  <div>
    
    <nav id="nav">
      <a href="/">Home</a>
      <span>|</span>
      <a href="/about">About</a>
      <span>|</span>
      <a href="/contact">Contact</a>
    </nav>
    
    <div id="banner-logo">
      {props.siteName}
    </div>
    
  </div>
);

module.exports = NavHeader;