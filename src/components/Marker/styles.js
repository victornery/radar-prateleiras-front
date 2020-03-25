import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Holder = styled.div`
  transform: translate(0, -40px);
  position: relative;
`
export const IconHolder = styled.div`
  & svg {
    transition: all 0.7s;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`
export const Info = styled.div`
  width: 150px;
  background-color: white;
  padding: 10px;
  border: 1px solid #ddd;
  opacity: 0;
  transition: 0.5s all;

  ${props => props.isOpen && `opacity: 1`}
`

export const Title = styled.span`
  font-weight: bold;
  display: block;
  font-size: 13px;
  margin-bottom: 7px;
`

export const BaseItem = css`
  font-size: 13px;
  display: block;

  & strong {
    display: block;
  }
`
export const Tel = styled.span`
  ${BaseItem}
`
export const Address = styled.span`
  ${BaseItem}
`
export const OfficeHour = styled.span`
  ${BaseItem}
`
