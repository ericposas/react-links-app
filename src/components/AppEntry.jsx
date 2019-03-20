import React from 'react'
import Title from './Title.jsx'
import Link from './Link.jsx'
import Input from './Input.jsx'
import uuid from 'uuid'

// REMEMBER: React Component props can store/render React components, but
// not non-string JSON or JS Object data

export default class AppEntry extends React.Component {
  constructor(props){
    super(props)
    // this.onClicker = this.onClicker.bind(this)
  }
  componentDidMount(){
    this.props.retrieveLinks()
  }
  componentDidUpdate(){
    console.log('AppEntry did update')
  }
  /*addLink(id){
    this.props.addLink(id)
  }*/
  render(){
    let dummy = this.props.links.slice(0)
    // need to fix this to make .onClicker() have the proper parameters
    return(
      <div>
        <Title title={this.props.title}/>
        <Input addLink={this.props.addLink}/>
        {/* Links here */}
        <div>{dummy.map((link,i)=><div key={uuid()}><Link link={link}/></div>)}</div>
      </div>
    )
  }

}
