// @flow
// Imports {{{

import 'glamor-reset'

import { Col } from 'constelation-view'
import { Provider } from 'mobx-react'
import Animate_ from 'constelation-animate_'
import React from 'react'
import Style_ from 'constelation-style_'
import mobx from 'mobx'

import AppOverlay from 'stores/AppOverlay'

// }}}

// -- MobX --
// throw an exception on any attempt to modify MobX state outside an action
mobx.useStrict(true)

// log all mobx actions when in development mode
if (process.env.NODE_ENV !== 'production') {
  mobx.spy(ev => {
    if (ev.type === 'action') {
      console.log(ev.name)
    }
  })
}

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }

const stores = {
  AppOverlay: new AppOverlay(),
}

const PURPLE = '#311B92'

const containerEnterAnimation = {
  // '0%': {
  //   backgroundColor: PURPLE,
  // },
  // '100%': {
  //   backgroundColor: 'white',
  // }
  '0%': {opacity: 1, backgroundColor: PURPLE, visibility: 'visible'},
  '40%': {opacity: 1, backgroundColor: PURPLE, visibility: 'visible'},
  '100%': {opacity: 0},
}


// const fadeIn = Radium.keyframes({
//   '0%': {opacity: 1, backgroundColor: 'black', visibility: 'visible'},
//   '40%': {opacity: 1, backgroundColor: 'black', visibility: 'visible'},
//   '100%': {opacity: 0},
// }, 'fadeIn')
//
//
// const titleFadeIn = Radium.keyframes({
//   '0%': {color: 'black'},
//   '20%': {color: 'white'},
//   '30%': {color: 'white'},
//   // '40%': {color: 'white'},
//   '70%': {color: '#111'},
//   '100%': {color: '#111'},
//   }, 'titleFadeIn')

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Col
          fit
          alignVertical='top'
        >
          {this.props.children}

          {/* <OpacityOverlay /> */}
          {/* <Overlay /> */}

        </Col>
      </Provider>
    )
  }
}
