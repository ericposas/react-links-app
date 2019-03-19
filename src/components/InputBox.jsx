import React from 'react'
import Button from './Button.jsx'

export default class InputBox extends React.Component {
  constructor(props){
    super(props)
    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  }
  buttonClickHandler(e){
    e.preventDefault()
    if(this._input.value != ''){
      this.props.addLink(this._input.value, this.props.numLinks)
    }
    this._input.value = '';
    this._input.focus()
  }
  componentDidUpdate(){
    // console.log('InputBox did update')
  }
  render(){
    let style = {}
    style.div = {
      textAlign: 'center',
      fontSize: '1.2em'
    }
    style.spacer = {
      paddingBottom: '60px'
    }
    style.input = {
      textAlign: 'center'
    }
    style.label = {
      paddingBottom: '10px'
    }
    return(
      <div style={style.div}>
        <div style={style.spacer}></div>
        <form>
          <div style={style.label}>{this.props.label}</div>
          <input style={style.input} ref={elt=>{this._input = elt}}></input>
          <Button click={this.buttonClickHandler}
                  btnText={this.props.buttonText}/>
        </form>
      </div>
    )
  }
}
