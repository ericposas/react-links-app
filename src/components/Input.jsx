import React from 'react'

export default class Input extends React.Component {

  constructor(props){
    super(props)
    this.onSubmission = this.onSubmission.bind(this)
  }

  onSubmission(e){
    e.preventDefault()
    const {addLink} = this.props
    if(this._input.value !== '' && this._input.value !== ' ')
      addLink(this._input.value)
    this._input.value = ''
    this._input.focus()
  }
  
  render(){
    let style = {
      div: {
        padding: '20px 10px',
        textAlign: 'center'
      },
      form: {
      },
      input: {
        borderRadius: '5px',
        border: '3px solid orange',
        height: '30px',
        width: '50%',
        textAlign: 'center'
      },
      button: {
        borderRadius: '5px',
        marginLeft: '5px',
        height: '30px',
        border: '2px solid darkorange',
        height: '35px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#3986f9',
        cursor: 'pointer'
      }
    }
    return(
      <div style={style.div}>
        <form style={style.form} onSubmit={this.onSubmission}>
          <input style={style.input} ref={_=>this._input = _}/>
          <input className="submit-button" style={style.button} type="submit" value="Add Link!"/>
        </form>
      </div>
    )
  }

}
