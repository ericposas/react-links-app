import {connect} from 'react-redux'
import AppEntry from './AppEntry.jsx'
import React from 'react'

function mapStateToProps(state){
  // map our Redux state to the React Component 'AppEntry'
  return{

  }
}

function mapDispatchToProps(dispatch){
  // map our dispatch() calls so that our app UI is in sync with the Redux store
  return {

  }
}

// connect our React component and export the connected component for use
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppEntry)

export default connectedComponent
