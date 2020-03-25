import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { breakpoints } from '../theme'

export const Main = styled.main`
  background-color: #fbfbfb;
  height: 100vh;
  position: relative;
`

const transitionTime = css`
  opacity: 1;
  transition: 0.5s ease-in;
`

export const InitialView = styled.div`
  z-index: 5;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;

  ${({ hide }) =>
    hide &&
    `
    transition-delay: 0.5s;
    opacity: 0;
    visibility: hidden; 
  `}
`

export const OverLay = styled.div`
  display: none;
  width: 35%;
  background-color: rgba(0, 0, 0, 0.4);
  ${transitionTime};
  ${({ hide }) =>
    hide &&
    `
    transform: translateX(-100%);
    opacity: 0;
  `}
  
  @media (min-width: ${breakpoints.small}px ) {
    display: block;
  }
`

export const Welcome = styled.aside`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  text-align: center;
  ${transitionTime};
  ${({ hide }) =>
    hide &&
    `
    transform: translateX(100%);
    opacity: 0;
  `}

@media (min-width: ${breakpoints.small}px ) {
    width: 65%;
  }
`

export const HolderBtns = styled.div`
  margin: 25px 0;
  & span {
    display: block;
    margin: 10px 0;
  }
`
export const Heading = styled.h1``

export const Button = styled.button`
  font-size: 1rem;
  color: white;
  padding: 15px 25px;
  background-color: #363636;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`

export const Social = styled.div`
  margin: 10px 0 0;
  & a {
    padding: 10px;
  }
  & img {
    width: 20px;
    height: 20px;
  }
`
