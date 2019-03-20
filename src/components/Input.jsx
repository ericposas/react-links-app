import React from 'react'

export default class Input extends React.Component {

  constructor(props){
    super(props)
    this.onSubmission = this.onSubmission.bind(this)
  }

  onSubmission(e){
    e.preventDefault()
    this.props.addLink(this._input.value)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmission}>
          <input ref={_=>this._input = _}/>
        </form>
      </div>
    )
  }

}
