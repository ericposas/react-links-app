import React from 'react'
import Title from './Title.jsx'
import InputBox from './InputBox.jsx'
import Links from './Links.jsx'

// REMEMBER: React Component props can store/render React components, but
// not non-string JSON or JS Object data

export default class AppEntry extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.retrieveLinks()
  }
  componentDidUpdate(){
    // console.log('AppEntry did update')
  }
  /*
  Remember, "this.props.." are mapped to Redux dispatch,
  this.state is not set here, only this.props
  State is handled at the top level by Redux, and trickles
  down from there
  */
  render(){
    return(
      <div>
        <Title title="Links"/>
        <InputBox numLinks={this.props.links.text_values.length}
                  label="Add a link!"
                  buttonText="Add"
                  addLink={this.props.addLink}
                  status={this.props.status_message}/>
        <Links data={this.props.links.react_objects}/>
      </div>
    )
  }

}
