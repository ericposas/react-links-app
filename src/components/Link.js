import React from 'react'
import X from './X'

export default class Link extends React.Component {

  render(){
    let style = {
      a:{
        color: '#fff',
        textDecoration: 'none',
        width: '100%'
      },
      div:{
        width: '93%',
        backgroundColor: '#9cc2fc',
        textAlign: 'center',
        display: 'inline-block',
        padding: '10px 10px 5px 10px',
        margin: '5px 5px',
        borderRadius: '5px',
        border: '2px dotted orange',
      }
    }
    return(
      <div className="link" style={style.div}>
        <X id={this.props.id}/>
        <a style={style.a} href={this.props.link} target="_blank"><div>{this.props.link}</div></a>
      </div>
    )
  }

}
