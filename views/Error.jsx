const React = require('react');
const DefaultLayout = require('./Layout');

const Error = React.createClass({
  render: function(){
    return(
      <DefaultLayout>
        <section>
          
          <h1>{this.props.message}</h1>
          <h2>{this.props.error.status}</h2>
          <pre>{this.props.error.stack}</pre>

        </section>
      </DefaultLayout>
    )
  }
});

module.exports = Error;
