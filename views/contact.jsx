import React, { Component } from 'react'
import DefaultLayout from './layout'

export default class Contact extends Component {
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <h1>{this.props.title}</h1>

      </DefaultLayout>
    )
  }
}
