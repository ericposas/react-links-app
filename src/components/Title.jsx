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
      fontSize: '3em',
      color: '#fff'
    }
    return(
      <div>
        <br></br>
        <div className="title" style={style.title}>{this.props.title}</div>
      </div>
    )
  }

}
