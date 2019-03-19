import React from 'react'

export default class Links extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate(){
    // console.log('Links Component updated')
  }
  render(){
    let style = {}
    style.spacer = {
      paddingBottom: '20px'
    }
    return(
      <div>
        <div style={style.spacer}></div>
        <div>{this.props.data}</div>
      </div>
    )
  }
}
