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
const ANIM_DURATION = '3000ms'

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
          {/* <Animate */}
          {/*   duration={'4000ms'} */}
          {/*   easing='ease-out' */}
          {/*   keyframes={{ */}
          {/*     '0%': {transform: 'translateY(70px)'}, */}
          {/*     '70%': {transform: 'translateY(70px)'}, */}
          {/*     '80%': {transform: 'none'} */}
          {/*   }} */}
          {/* > */}
          <Animate_
            duration={ANIM_DURATION}
            easing='ease-out'
            keyframes={textAnimation}
          >
            <Text
              size={48}
              fontFamily={`'Roboto', sans-serif`}
              // weight={300}
              spacing={2}
              color={PURPLE}
            >
              TorrBorr
            </Text>
          </Animate_>
        {/* </Animate> */}
        </Style>

      {/*   <Space size={56} /> */}
      {/*  */}
      {/*   <Animate_ */}
      {/*     duration={ANIM_DURATION} */}
      {/*     easing='ease-out' */}
      {/*     keyframes={{ */}
      {/*       '0%': { */}
      {/*         opacity: 0, */}
      {/*       }, */}
      {/*       '75%': { */}
      {/*         opacity: 0, */}
      {/*       }, */}
      {/*       '90%': { */}
      {/*         opacity: 1, */}
      {/*       } */}
      {/*     }} */}
      {/*     // keyframes={{ */}
      {/*     //   '0%': { */}
      {/*     //     opacity: 0, */}
      {/*     //   }, */}
      {/*     //   '60%': { */}
      {/*     //     opacity: 0, */}
      {/*     //   }, */}
      {/*     //   '100%': { */}
      {/*     //     opacity: 1, */}
      {/*     //   } */}
      {/*     // }} */}
      {/*   > */}
      {/*   <Text */}
      {/*     size={24} */}
      {/*     fontFamily={`'Roboto', sans-serif`} */}
      {/*     weight={300} */}
      {/*     // spacing={2} */}
      {/*     color={PURPLE} */}
      {/*   > */}
      {/*     <strong>Victoria Aston</strong> is a Data Scientist */}
      {/*   </Text> */}
      {/* </Animate_> */}

        <Space size={56} />

        <Animate
          duration={ANIM_DURATION}
          easing='ease-out'
          // keyframes={{
          //   '0%': {
          //     opacity: 0,
          //   },
          //   '60%': {
          //     opacity: 0,
          //   },
          //   '80%': {
          //     opacity: 1,
          //   }
          // }}
            // keyframes={{
            //   '0%': {
            //     opacity: 0,
            //   },
            //   '80%': {
            //     opacity: 0,
            //   },
            //   '100%': {
            //     opacity: 1,
            //   }
            // }}
            keyframes={{
              '0%': {
                opacity: 0,
              },
              '60%': {
                opacity: 0,
              },
              '80%': {
                opacity: 1,
              }
            }}
        >
          <Link url='https://github.com/TorrBorr' label='Github' />
        </Animate>

        <Space size={8} />

        <Animate
          duration={ANIM_DURATION}
          easing='ease-out'
          // keyframes={{
          //   '0%': {
          //     opacity: 0,
          //   },
          //   '65%': {
          //     opacity: 0,
          //   },
          //   '85%': {
          //     opacity: 1,
          //   }
          // }}
          // keyframes={{
          //   '0%': {
          //     opacity: 0,
          //   },
          //   '80%': {
          //     opacity: 0,
          //   },
          //   '100%': {
          //     opacity: 1,
          //   }
          // }}
          keyframes={{
            '0%': {
              opacity: 0,
            },
            '60%': {
              opacity: 0,
            },
            '80%': {
              opacity: 1,
            }
          }}
        >
        <Link url='https://www.linkedin.com/in/victoria-aston/' label='LinkedIn' />
      </Animate>

        <Space size={56} />

        <Animate_
          duration={ANIM_DURATION}
          easing='ease-out'
          keyframes={{
            '0%': {
              opacity: 0,
            },
            '75%': {
              opacity: 0,
            },
            '90%': {
              opacity: 1,
            }
          }}
          // keyframes={{
          //   '0%': {
          //     opacity: 0,
          //   },
          //   '60%': {
          //     opacity: 0,
          //   },
          //   '100%': {
          //     opacity: 1,
          //   }
          // }}
        >
        <Text
          size={24}
          fontFamily={`'Roboto', sans-serif`}
          weight={300}
          // spacing={2}
          color={PURPLE}
        >
          <strong>Victoria Aston</strong> == Data Scientist
        </Text>
      </Animate_>

      </Col>
    )
  }
}
