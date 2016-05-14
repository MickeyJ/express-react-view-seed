const React = require('react');

const NavHeader = require('./common/NavHeader');
const Footer = require('./common/Footer');

const siteName = 'The Site Name';

const Layout = React.createClass({
  render: function(){
    return (
      <html lang="en">
      <head>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description}/>
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="stylesheet" href="bower_components/bootstrap-css/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/main.css"/>
      </head>
      <body>
        <div id="all-wrap">

          <NavHeader siteName={siteName}/>

          <main className="container-fluid">
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
