import Button from '../button/button.component'

import './cart-dropdown.styles.scss'

const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button buttonType="inverted">Checkout</Button>
    </div>
  )
}

export default CardDropdown
