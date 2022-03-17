import { Cart, CouponCodeDb, Product } from './types'
import { createNewCart } from './utils/helper'
import { applyDiscountTotal, fetchCart, updateCartTotal, validateCouponCode } from './utils/api'

export const initCart = (cartId?: string) => (cartId ? fetchCart(cartId) : createNewCart())

export const addToCart = async (cart: Cart, product: Product) => (
  cart.products.push(product), updateCartTotal(cart)
)

export const applyCouponToCart = async (cart: Cart, couponCode: keyof CouponCodeDb) => {
  const res = await validateCouponCode(couponCode)
  res ? applyDiscountTotal(cart, couponCode, res) : Error('Not a valid Coupon Code')
}
