import { createSelector } from 'reselect'

import { CartState } from './cart.reducer'

const selectCartReducer = (state): CartState => state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (totalItems, cartItem) => totalItems + cartItem.quantity,
        0
      )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
        0
      )
)