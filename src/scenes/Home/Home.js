// @flow
// Imports {{{
import { Col, View } from 'constelation-view'
import Animate_, { Animate } from 'constelation-animate_'
import React from 'react'
import Space from 'constelation-space'
import Style_, { Style } from 'constelation-style_'
import Text from 'constelation-text'

// }}}

const PURPLE = '#311B92'
const PURPLE_SECONDARY = '#6200EA'
const ANIM_DURATION = '4000ms'

const textAnimation = {
    '10%': {color: PURPLE},
    '40%': {color: 'white'},
    '50%': {color: PURPLE},
    '100%': {color: PURPLE},
}

const containerAnimation = {
  '0%': {opacity: 1, backgroundColor: PURPLE, visibility: 'visible'},
  '50%': {opacity: 1, backgroundColor: PURPLE, visibility: 'visible'},
  '100%': {opacity: 0},
}

class Link extends React.Component {
  render() {
    return (
      <a
        href={this.props.url}
        style={{
          textDecoration: 'none',
          color: PURPLE,
          fontFamily: `'Roboto', sans-serif`,
          fontWeight: 300,
          fontSize: 24,
        }}
      >
        {this.props.label}
      </a>
    )
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <Col
        center
        grow
      >
        <Animate_
          duration={ANIM_DURATION}
          easing='ease-out'
          keyframes={containerAnimation}
        >
          <Style_
            visibility='hidden'
          >
            <View
              fit
              position='absolute'
              pointerEvents='none'
            />
          </Style_>
        </Animate_>

        <Style
          zIndex={2}
        >
          <Animate_
            duration={ANIM_DURATION}
            easing='ease-out'
            keyframes={textAnimation}
          >
            <Text
              size={56}
              fontFamily={`'Roboto', sans-serif`}
              // weight={300}
              spacing={2}
              color={PURPLE}
            >
              TorrBorr
            </Text>
          </Animate_>
        </Style>

        <Space size={56} />

        <Link url='https://www.linkedin.com/in/victoria-aston/' label='LinkedIn' />

        <Space size={8} />

        <Link url='https://github.com/TorrBorr' label='Github' />

        <Space size={56} />

        <Text
          size={24}
          fontFamily={`'Roboto', sans-serif`}
          // weight={300}
          color={PURPLE}
        >
          Victoria Aston == Data Scientist
        </Text>

      </Col>
    )
  }
}
