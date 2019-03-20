import React from 'react'
import X from './X.jsx'

export default class Link extends React.Component {

  render(){
    let style = {
      a:{
        textDecoration: 'none'
      },
      div:{
        maxWidth: '50%',
        display: 'inline-block'
      }
    }
    return(
      <div style={style.div}>
        <X id={this.props.id} deleteLink={this.props.deleteLink}/>
        <a style={style.a} href={this.props.link}><div>{this.props.link}</div></a>
      </div>
    )
  }

}
