import styled from '@emotion/styled'

export const InputHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 50%;
  }
  .ap-icon-pin {
    display: none;
  }

  .ap-icon-clear {
    svg {
      top: 55%;
    }
  }
`

const ForwardRef = React.forwardRef((props, ref) => (
  <input type="search" {...props} ref={ref} />
))

export const Input = styled(ForwardRef)`
  position: fixed;
  top: 10px;
  left: 0;
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`
