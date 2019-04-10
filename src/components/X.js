import React from 'react'
import {connect} from 'react-redux'
import {
  mapStateToProps,
  mapDispatchToProps
} from '../modules/mSTP'

class X extends React.Component {

  constructor(props){
    super(props)
    this.onClicker = this.onClicker.bind(this)
  }

  onClicker(){
    const {deleteLink} = this.props
    deleteLink(this.props.id)
  }

  render(){
    let style = {
      x:{
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'inline-block',
        marginTop: '-5px',
        paddingRight: '20px',
        float: 'left',
        color: 'darkorange'
      }
    }
    return(
      <div>
        <div style={style.x} onClick={this.onClicker}>X</div>
      </div>
    )
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(X)
