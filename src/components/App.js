import {connect} from 'react-redux'
import React from 'react'
import Title from './Title'
import Link from './Link'
import Input from './Input'
import GitHub from './GitHub'
import uuid from 'uuid'
import {
  mapStateToProps,
  mapDispatchToProps
} from '../modules/mSTP'

// REMEMBER: React Component props can store/render React components, but
// not non-string JSON or JS Object data..
// better to render the React components in the render() call and not store them
// in an array in state; gets too confusing keeping complex objects in the state store

class App extends React.Component {
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
  render(){
    let style = {
      div: {
        margin:'none'
      }
    }
    let ids = this.props.ids.slice(0).reverse()
    let dummy = this.props.links.slice(0).reverse()
    let links = dummy.map((link,i)=><div key={uuid()}><Link id={ids[i]} link={link}/></div>)
    return(
      <div>
        <GitHub url="https://github.com/ericposas/react-links-app"/>
        <Title title={this.props.title}/>
        <Input />
        <div style={style.div}>{links}</div>
      </div>
    )
  }

}

// connect our React component and export the connected component for use
export default connect(mapStateToProps, mapDispatchToProps)(App)
