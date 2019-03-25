import React from 'react'

// Reducer function returns Redux state data
export default function Reducer(state, action){
  if(state === undefined){
    return {
      title: 'Add Links',
      links: [],
      ids: []
    }
  }

  switch(action.type){
    // link retrieval method is what keeps mongo and redux state in-sync
    case 'linksretrieved':
      console.log(`links retrieved from mongodb: ${action.links}`)
      return {
        ...state,
        links: action.links,
        ids: action.ids
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
    case 'deletinglink':
      console.log(`deleting a link from mongodb..`)
      return {
        ...state
      }
    case 'linkdeleted':
      console.log(`link deleted!`)
      return {
        ...state
      }
    default:
      return state
  }
}
