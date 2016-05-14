const React = require('react');

const Footer = (props) =>(
  <footer id="footer">
    <span>&copy; 2015</span>
    <span>{props.siteName}</span>
  </footer>
);

module.exports = Footer;
