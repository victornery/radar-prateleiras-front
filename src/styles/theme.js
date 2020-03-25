///////////////////////////////////////////////////////////////////////////////
//  # Variables
//--------------------------------
//    Define all your global variables in this file
///////////////////////////////////////////////////////////////////////////////

// ## Colours
//---------------------------------
//    Colors variables are used with the syntax below
//    const EmotionComponent = styled.selector`
//      $rule:  ${colors.colorName};
//    `
//    not color names as it won't affect your project in the long run
///////////////////////////////////////////////////////////////////////////////

const colors = {
  primary: '#0A4A8E',
  primaryLight: '#0186DC',
  primaryDark: '#01286C',

  secundary: '#D10C01',
  accent: '#FFF300',
  contrast: '#399101',

  gradient: `linear-gradient(45deg, #01286C 0%, #0186DC 100%)`
}

// # Media Queries breakpoints
//    MQ variables are defined as number and are used with the syntax below.
//
//      const EmotionComponent = styled.selector`
//        @media (min-width: ${breakpoints.small}px) {
//          ...
//        }
//      `
//
//    Try to use abstract names and not something specific as mobile, as it
//    won't affect your project in the long run
///////////////////////////////////////////////////////////////////////////////
const breakpoints = {
  small: 600,
  medium: 900
}

const typography = {
  h1: '600 1.375rem "Montserrat", sans-serif',
  h2: '1.25rem "Montserrat", sans-serif',
  h3: '1rem "Montserrat", sans-serif',
  paragraph: '1rem "Montserrat", sans-serif',
  button: '"Montserrat", sans-serif',

  h1Desk: '600 2.2222222222rem "Montserrat", sans-serif',
  h2Desk: '1,5rem "Montserrat", sans-serif',
  h3Desk: '400 1.225rem "Montserrat", sans-serif',
  paragraphDesk: '1rem "Montserrat", sans-serif',

  base: '100%',
  baseDesk: '112.5%',
  display: '"Montserrat", sans-serif',
  body: '"Montserrat", sans-serif'
}

export { colors, breakpoints, typography }
