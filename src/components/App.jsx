import {connect} from 'react-redux'
import AppEntry from './AppEntry.jsx'
import React from 'react'
import request from 'superagent'

function mapStateToProps(state){
  // keep state flattened
  return {
    ...state
  }
}

async function retrieveLinks(dispatch){
  try{
    const result = await request.get('http://localhost:3000/links')
    const parsed = JSON.parse(result.text)
    let db_ids = parsed.slice(0).map(obj=>obj._id)
    let retrieved = parsed.slice(0).map(obj=>obj.link)
    dispatch({ type:'linksretrieved', ids:db_ids, links:retrieved })
  }catch(err){
    console.log(err)
  }
}

function mapDispatchToProps(dispatch){
  // map our dispatch() calls so that our app UI is in sync with the Redux store
  return {
    retrieveLinks: async ()=>{
      dispatch({ type:'retrievelinks' })
      try{
        await retrieveLinks(dispatch)
      }catch(err){
        console.log(err)
      }
    },
    addLink: async (link)=>{
      // addLink must also retrieve links once it successfully adds a new one
      dispatch({ type:'addinglink' })
      try{
        const result = await request.post(`http://localhost:3000/links?link=${link}`)
        const parsed = JSON.parse(result.text)
        if(parsed.n > 0){
          dispatch({ type:'linkadded' })
          await retrieveLinks(dispatch)
        }
      }catch(err){
        console.log(err)
      }
    },
    deleteLink: async (id)=>{
      // deleteLink must retrieve values from db after the deletion
      dispatch({ type:'deletinglink' })
      try{
        const result = await request.delete(`http://localhost:3000/links?id=${id}`)
        dispatch({ type:'linkdeleted' })
        await retrieveLinks(dispatch)
      }catch(err){
        console.log(err)
      }
    }
  }
}

// connect our React component and export the connected component for use
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppEntry)
