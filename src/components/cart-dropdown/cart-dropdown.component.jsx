import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
import { selectCartItems } from '../../store/cart/cart.selector'

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles'

const CardDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    // setIsCartOpen(!isCartOpen)
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
