import React from 'react'

export default class X extends React.Component {

  constructor(props){
    super(props)
    this.onClicker = this.onClicker.bind(this)
  }

  onClicker(){
    this.props.deleteLink(this.props.id)
  }

  render(){
    let style = {
      x:{
        cursor: 'pointer',
        display: 'inline-block'
      }
    }
    return(
      <div>
        <div style={style.x} onClick={this.onClicker}>X</div>
      </div>
    )
  }

}
