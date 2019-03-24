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
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'inline-block',
        marginTop: '-5px',
        paddingRight: '20px',
        float: 'left',
        color: 'darkorange'
      }
    }
    return(
      <div>
        <div style={style.x} onClick={this.onClicker}>X</div>
      </div>
    )
  }

}
