import React from 'react'

// Reducer function with returns Redux state data
export default function Reducer(state, action){
  if(state === undefined){
    // try to keep state flattened
    return {

    }
  }
  // switch statement to handle all incoming actions dispatched by
  // functions in 'mapDispatchToProps()'
  switch(action.type){

    default:
      return state
  }
}
