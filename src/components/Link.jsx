import React from 'react'

export default class Link extends React.Component {

  render(){
    let style = {
      a:{
        textDecoration: 'none'
      },
      div:{
        display: 'block'
      }
    }
    return(
      <div>
        <a style={style.a} href={this.props.link}><div style={style.div}>{this.props.link}</div></a>
      </div>
    )
  }

}
