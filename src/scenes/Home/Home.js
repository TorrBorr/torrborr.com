// @flow
// Imports {{{
import { Col, View } from 'constelation-view'
import { bind } from 'decko'
import { inject, observer } from 'mobx-react'
import Event_ from 'constelation-event_'
import Link from 'react-router/lib/Link'
import React from 'react'
import Style_ from 'constelation-style_'
import Text from 'constelation-text'

import CenteredOverlay from './_/CenteredOverlay'
import FullOverlay from './_/FullOverlay'

// }}}

@inject('AppOverlay')
@observer
export default class Home extends React.Component {
  @bind handleOpenFadeOverlay() {
    this.props.AppOverlay.show(FullOverlay)
  }

  @bind handleOpenModal() {
    this.props.AppOverlay.show(CenteredOverlay, {
      opacityColor: 'white',
      opacity: 0.5,
    })
  }

  @bind handleOpenModalDark() {
    this.props.AppOverlay.showModal(CenteredOverlay, {
      opacityColor: '#111',
      opacity: 0.7,
    })
  }

  @bind handleCloseModal() {
    this.props.AppOverlay.hide()
  }

  render() {
    return (
      <Col
        center
        grow
      >
        <Text size={20}>TorrBorr</Text>
      </Col>
    )
  }
}
