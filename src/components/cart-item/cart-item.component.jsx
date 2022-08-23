import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem

  return (
    <div className="cart-item-container">
      <img className="img" src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="detail">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
