const React = require('react');
const DefaultLayout = require('./layout');

const Contact = React.createClass({
  render: function(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        
        <h1>{this.props.title}</h1>
        
      </DefaultLayout>
    )
  }
});

module.exports = Contact;
