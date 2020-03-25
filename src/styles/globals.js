import { typography, colors, breakpoints } from './theme'

const base = `
  html {
    font-size: ${typography.base};
    font-family: ${typography.body};
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;

    @media (min-width: ${breakpoints.small}px) {
      font-size: ${typography.baseDesk};
      line-height: 1.35;
    }
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  input,
  select,
  textarea {
    padding: .9rem 1rem;
    margin-bottom: .8rem;

    font-family: ${typography.body};

    &:focus {
      border-color: ${colors.primary};
    }
  }

  h1 {
    font: ${typography.h1};
  }

  h2 {
    font: ${typography.h2};
  }

  h3 {
    font: ${typography.h3};
  }

  @media (min-width: ${breakpoints.small}px) {
    h1 {
      font: ${typography.h1Desk};
    }
  
    h2 {
      font: ${typography.h2Desk};
    }
  
    h3 {
      font: ${typography.h3Desk};
    }
  }
`

export default base