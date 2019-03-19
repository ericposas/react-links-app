import React from 'react'
import Link from '../components/Link.jsx'
import request from 'superagent'

// Reducer function with returns Redux state data
export default function Reducer(state, action){
  if(state === undefined){
    // default state
    return {
      status:'',
      status_message:'',
      links: {
        text_values:[],
        react_objects:[]
      }
    }
  }
  // switch statement to handle all incoming actions dispatched by
  // functions in 'mapDispatchToProps()'
  switch(action.type){
    case 'linkadded':
      return{
        status_message: action.status,
        links: state.links
      }
    case 'retrievinglinks':
      return {
        status_message: action.status,
        links: state.links
      }
    case 'linksretrieved':
      return {
        status_message: action.status,
        links: action.links
      }
    case 'addinglink':
        let links = state.links.text_values.concat(action.link)
        let updated = links.map((link,i)=>{
          return(
            <Link key={i+1} link={link}/>
          )
        })
        return {
          status_message: action.status,
          links: {
            text_values: links,
            react_objects: updated
          }
        }
    default:
      return state
  }
}
