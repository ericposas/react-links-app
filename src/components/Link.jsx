import React from 'react'

export default class Link extends React.Component {
  render(){
    let style = {}
    style.div = {
      display: 'block',
      textAlign: 'center',
      textDecoration:'none',
      fontSize: '1.25em',
      color:'black',
    }
    style.a = {
      textDecoration:'none'
    }
    style.link = {
      marginTop:'10px',
      marginBottom:'10px',
      fontColor:'black'
    }
    return(
      <div style={style.div}>
        <a style={style.a} href={this.props.link} target="_blank">
          <div style={style.link}>{this.props.link}</div>
        </a>
      </div>
    )
  }
}
