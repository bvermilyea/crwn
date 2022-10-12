import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
import { selectCartItems } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectIsCartOpen } from '../../store/cart/cart.selector'

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles'

const CardDropdown = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const isCartOpen = useSelector(selectIsCartOpen)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen))
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType="inverted" onClick={goToCheckoutHandler}>
        Checkout
      </Button>
    </CartDropdownContainer>
  )
}

export default CardDropdown
