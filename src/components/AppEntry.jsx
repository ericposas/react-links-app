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
  }
  componentDidMount(){
    const {retrieveLinks} = this.props
    retrieveLinks()
  }
  componentDidUpdate(){
    console.log('AppEntry did update')
  }
  /*addLink(id){
    this.props.addLink(id)
  }*/
  render(){
    let style = {
      div: {
        margin:'none'
      }
    }
    let ids = this.props.ids.slice(0)
    let dummy = this.props.links.slice(0)
    let links = dummy.map((link,i)=><div key={uuid()}><Link id={ids[i]} deleteLink={this.props.deleteLink} link={link}/></div>)
    return(
      <div>
        <Title title={this.props.title}/>
        <Input addLink={this.props.addLink}/>
        <div style={style.div}>{links}</div>
      </div>
    )
  }

}
