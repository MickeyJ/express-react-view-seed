import React from 'react'

const NavHeader = (props) =>(
  <section>
    
    <nav id="nav">
      <a href="/">Home</a>
      <span>|</span>
      <a href="/about">About</a>
      <span>|</span>
      <a href="/contact">Contact</a>
    </nav>
    
    <header id="banner-logo">
      {props.siteName}
    </header>
    
  </section>
);

export default NavHeader;