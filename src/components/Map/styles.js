import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .leaflet-container {
    width: 100%;
    height: 100vh;
  }
`
export const Holder = styled.div`
  transform: translate(-20px, -30px);
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
  padding: 10px;
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
