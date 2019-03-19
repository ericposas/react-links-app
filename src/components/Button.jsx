import React from 'react'

export default class Button extends React.Component {
  render(){
    return(
      <div>
        <button onClick={this.props.click}>{this.props.btnText}</button>
      </div>
    )
  }
}
