import React from 'react';
import {showToast} from '../utils/toast'

export default class index extends React.Component {
    componentDidMount() {
    }
  render(){
    return (
      <div>
        {React.cloneElement(this.props.children, {...this.props})}
      </div>
    )
  }
}