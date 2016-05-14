const React = require('react');

const Head = require('./common/Head');
const NavHeader = require('./common/NavHeader');
const Footer = require('./common/Footer');

const siteName = 'The Site Name';

const Layout = React.createClass({
  render: function(){
    return (
      <html lang="en">
      <Head
        siteName={siteName}
        title={this.props.title}
        description={this.props.description}
      />
      <body>
        <div id="all-wrap">

          <NavHeader siteName={siteName}/>

          <main id="main-content" className="container-fluid">
            {this.props.children}
          </main>

          <Footer siteName={siteName}/>

        </div>
        <script src="js/script.js"></script>
      </body>
      </html>
    )
  }
});

module.exports = Layout;
