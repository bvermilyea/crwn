import { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'
import { CategoryItem } from '../../store/categories/categories.types'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './product-card.styles'

type ProductCardProps = {
  product: CategoryItem
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
      <img className="img" src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
