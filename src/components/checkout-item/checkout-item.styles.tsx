import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    text-align: center;
  }
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    padding-right: 10px;
  }
`

export const BaseSpan = styled.span`
  width: 23%;
`

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Arrow = styled.div`
  cursor: pointer;
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding-left: 5px;
  }
`

export const Value = styled.span`
  margin: 0 10px;
`
