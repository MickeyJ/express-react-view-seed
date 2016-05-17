import React, { Component } from 'react'
import DefaultLayout from './layout'

export default class Error extends Component {
  render(){
    if(this.props.error.status){
      return(
        <DefaultLayout>
          <section>

            <h1>{this.props.message}</h1>
            <h2>{this.props.error.status}</h2>
            <pre>{this.props.error.stack}</pre>

          </section>
        </DefaultLayout>
      )
    } else {
      return(
        <DefaultLayout>
          <section>

            <h1>{this.props.message}</h1>

          </section>
        </DefaultLayout>
      )
    }
  }
}
