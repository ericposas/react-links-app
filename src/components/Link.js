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
    const {latest,link} = this.props;
    let httpLink = /^((http|https|ftp):\/\/)/.test(link) ? link : `http://${link}`
    let _x = latest == true ? -10 : 0;
    let _y = latest == true ? -5 : 0;
    let _alpha = latest == true ? 0 : 1;
    let _duration = latest == true ? 1 : 0;
    let _scale = latest == true ? 1 : 1;
    return(
      <Tween from={{alpha:_alpha, x:_x, y:_y, scale:_scale}} duration={_duration}>
        <div className="link" style={style.div}>
          <X id={this.props.id}/>
          <a style={style.a} href={httpLink} target="_blank">
            <div>{httpLink}</div>
          </a>
        </div>
      </Tween>
    )
  }

}
