import React from 'react'

export default class Title extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    let style = {}
    style.title = {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '3em'
    }
    return(
      <div>
        <br></br>
        <div style={style.title}>{this.props.title}</div>
      </div>
    )
  }
  
}
