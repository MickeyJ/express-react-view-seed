import React, { Component } from 'react'

import Head from './common/Head'
import NavHeader from './common/NavHeader'
import Footer from './common/footer'

const siteName = 'The Site Name';

export default class Layout extends Component{
  render(){
    return(
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
}

