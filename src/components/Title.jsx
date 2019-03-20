import React from 'react'

export default class Title extends React.Component {
  constructor(props){
    super(props)
    this.onClicker = this.onClicker.bind(this)
  }
  onClicker(){
    this.props.addLink('thing')
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
        <div onClick={this.onClicker} style={style.title}>{this.props.title}</div>
      </div>
    )
  }
}
