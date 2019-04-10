import request from 'superagent'

export const retrieveLinks = ()=>{
  return async (dispatch, getState)=>{
    dispatch({ type:'retrievelinks' })
    try{
      const result = await request.get('http://159.89.128.162/links')
      const parsed = JSON.parse(result.text)
      let db_ids = parsed.slice(0).map(obj=>obj._id)
      let retrieved = parsed.slice(0).map(obj=>obj.link)
      dispatch({ type:'linksretrieved', ids:db_ids, links:retrieved })
      console.log(getState())
    }catch(err){
      console.log(err)
    }
  }
}

export const addLink = link=>{
  return async (dispatch, getState)=>{
    // addLink must also retrieve links once it successfully adds a new one
    dispatch({ type:'addinglink' })
    try{
      const result = await request.post(`http://159.89.128.162/links/?link=${link}`)
      const parsed = JSON.parse(result.text)
      if(parsed.n > 0){
        dispatch({ type:'linkadded' })
        dispatch(retrieveLinks())
      }
    }catch(err){
      console.log(err)
    }
  }
}

export const deleteLink = id=>{
  return async (dispatch, getState)=>{
    // deleteLink must retrieve values from db after the deletion
    dispatch({ type:'deletinglink' })
    try{
      const result = await request.delete(`http://159.89.128.162/links?id=${id}`)
      dispatch({ type:'linkdeleted' })
      dispatch(retrieveLinks())
    }catch(err){
      console.log(err)
    }
  }
}
