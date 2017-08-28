// @flow
// Imports {{{
import { Col, View } from 'constelation-view'
import React from 'react'
import Space from 'constelation-space'
import Style_, { Style } from 'constelation-style_'
import Text from 'constelation-text'

// }}}

const PURPLE = '#311B92'
const PURPLE_LIGHT = 'rgba(49,27,146,0.4)'
// const PURPLE_SECONDARY = '#6200EA'
// const ANIM_DURATION = '4000ms'

// const textAnimation = {
//     '10%': {color: PURPLE},
//     '40%': {color: 'white'},
//     '50%': {color: PURPLE},
//     '100%': {color: PURPLE},
// }

// const containerAnimation = {
//   '0%': {opacity: 1, backgroundColor: PURPLE, visibility: 'visible'},
//   '50%': {opacity: 1, backgroundColor: PURPLE, visibility: 'visible'},
//   '100%': {opacity: 0},
// }

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
        <Style_
          borderRadius={64}
        >
          <View
            overflow='hidden'
          >
            <img
              src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAvNAAAAJDQ0NDE3Mzg1LTk3ZDUtNDhlOC05ZTg0LTNiM2Q1NDUwMWE5Yw.jpg"
              height={128}
              width={128}
              style={{
                opacity: 0.8,
              }}
            />
            <Style
              fit
              position='absolute'
              backgroundColor={PURPLE}
              opacity={0.3}
            />
          </View>
        </Style_>
        <Space size={8} />

        <Text
          size={24}
          fontFamily={`'Roboto', sans-serif`}
          weight={300}
          color={PURPLE}
        >
          Victoria Aston
        </Text>

        <Space size={64} />

        <span
          style={{
            padding: '0 32px'
          }}
        >
          <span
            style={{
              color: PURPLE,
              fontFamily: `'Roboto', sans-serif`,
              fontSize: 24,
              letterSpacing: 1,
            }}
          >
            Data Scientist
          </span>
          <span
            style={{
              color: PURPLE_LIGHT,
              fontFamily: `'Roboto', sans-serif`,
              fontSize: 24,
              letterSpacing: 1,
            }}
          >
            , Engineer, Consultant
          </span>
        </span>

        <Space size={64} />

        <Link url='https://github.com/TorrBorr' label='Github' />

        <Space size={8} />

        <Link url='https://www.linkedin.com/in/victoria-aston/' label='LinkedIn' />

      </Col>
    )
  }
}
