import React from 'react'


export default class GitHub extends React.Component {

  render(){
    let style = {
      link: {
        color: '#fff'
      }
    }
    return(
      <div>
        <a href={this.props.url} target="_blank"><div style={style.link}>{this.props.url}</div></a>
      </div>
    )
  }

}
