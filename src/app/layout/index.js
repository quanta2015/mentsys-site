import React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import {isN} from '@/util/fn'

import './index.less'



class Layout extends React.Component {
	



	render() {

    return (
      <div className="g-nav">
        <div className="m-nav">
          
          <div className="m-menu_wrap">
            
          </div>

        </div>

        <div className="g-main">
          {this.props.children}
        </div>

      </div>
    )
  }
}

export default Layout
