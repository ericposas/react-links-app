import {connect} from 'react-redux'
import AppEntry from './AppEntry.jsx'
import Link from '../components/Link.jsx'
import React from 'react'
import request from 'superagent'

function mapStateToProps(state){
  // map our Redux state to the React Component 'AppEntry'
  return{
    status_message: 'app started',
    links: state.links
  }
}

function mapDispatchToProps(dispatch){
  // map our dispatch() calls so that our app UI is in sync with the Redux store
  return {
    addLink: async (val,num)=>{
      dispatch({ type:'addinglink', link:val, status:'creating a new link' })
      const result = await request.post(`http://localhost:3000/links?id=${num}&link=${val}`)
      dispatch({ type:'linkadded', status:'link added!' })
    },
    retrieveLinks: async ()=>{
      dispatch({ type:'retrievinglinks', status:'retrieving links from mongo' })
      let result = await request.get('http://localhost:3000/links')
      let parsed = JSON.parse(result.text)
      let text_links = parsed.links.map(obj=>obj.link)
      let updated = text_links.map((link,i)=>{
        return(
          <Link key={i+1} link={link}/>
        )
      })
      let links = {
        text_values: text_links,
        react_objects: updated
      }
      dispatch({ type:'linksretrieved', links:links, status:'links have been retrieved and set!' })
    }
  }
}

// connect our React component and export the connected component for use
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppEntry)

export default connectedComponent
