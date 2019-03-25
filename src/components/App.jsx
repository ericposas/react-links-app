import {connect} from 'react-redux'
import AppEntry from './AppEntry.jsx'
import React from 'react'
import {
  retrieveLinks,
  addLink,
  deleteLink
} from '../modules/Actions'

function mapStateToProps(state){
  // keep state flattened
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch=>{
  // map our dispatch() calls so that our app UI is in sync with the Redux store
  return {
    retrieveLinks: ()=>{
      dispatch(retrieveLinks())
    },
    addLink: link=>{
      dispatch(addLink(link))
    },
    deleteLink: id=>{
      dispatch(deleteLink(id))
    }
  }
}

// connect our React component and export the connected component for use
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppEntry)
