import styled from 'styled-components'
import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    flex-flow: column-wrap;
    justify-content: space-around;
    width: 500px;
  }
`

export const FormContainer = styled.form`
  height: 100px;
  min-width: 300px;

  @media screen and (max-width: 800px) {
    width: 300px;
  }
`
export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media screen and (max-width: 800px) {
    width: 300px;
  }
`
