import {
  retrieveLinks,
  addLink,
  deleteLink
} from './Actions'

export const mapStateToProps = state=>{
  // keep state flattened
  return {
    ...state
  }
}

export const mapDispatchToProps = dispatch=>{
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
