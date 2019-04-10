import React from 'react'
import X from './X'
import {Tween} from 'react-gsap'

export default class Link extends React.Component {

  render(){
    let style = {
      a:{
        color: '#fff',
        textDecoration: 'none',
        width: '100%'
      },
      div:{
        width: '93%',
        backgroundColor: '#9cc2fc',
        textAlign: 'center',
        display: 'inline-block',
        padding: '10px 10px 5px 10px',
        margin: '5px 5px',
        borderRadius: '5px',
        border: '2px dotted orange'
      }
    }
    const {latest} = this.props;
    let _x = latest == true ? -10 : 0;
    let _alpha = latest == true ? 0 : 1;
    let _duration = latest == true ? .5 : 0;
    return(
      <Tween from={{alpha:_alpha, x:_x}} duration={_duration}>
        <div className="link" style={style.div}>
          <X id={this.props.id}/>
          <a style={style.a} href={this.props.link} target="_blank"><div>{this.props.link}</div></a>
        </div>
      </Tween>
    )
  }

}
