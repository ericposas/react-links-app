import React from 'react'
import request from 'superagent'

// Reducer function returns Redux state data
export default function Reducer(state, action){
  if(state === undefined){
    return {
      title: 'Default Title',
      links: []
    }
  }

  switch(action.type){
    // link retrieval method is what keeps mongo and redux state in-sync 
    case 'linksretrieved':
      console.log(`links retrieved from mongodb: ${action.links}`)
      return {
        ...state,
        links: action.links
      }
    case 'retrievelinks':
      console.log(`attempting to retrieve stored links.`)
      return {
        ...state
      }
    case 'addinglink':
      console.log(`attempting to add link.`)
      return {
        ...state
      }
    case 'linkadded':
      console.log(`link added to mongodb!`)
      return {
        ...state
      }
    default:
      return state
  }
}
