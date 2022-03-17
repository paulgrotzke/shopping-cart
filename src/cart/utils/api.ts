import { cartDataDb, couponCodeDb } from './data'
import { Cart, CouponCodeDb, Product, ValueOfCouponCodeDb } from '../types'
import { calcCartTotal, createNewCart } from './helper'

export const fetchCart = async (cartId: string): Promise<Cart> =>
  cartDataDb[cartId] ? cartDataDb[cartId] : createNewCart()

export const updateCartTotal = async (cart: Cart) => (cart.total = calcCartTotal(cart))

export const validateCouponCode = async (couponCode: keyof CouponCodeDb) =>
  couponCodeDb[couponCode] ? couponCodeDb[couponCode] : false

export const applyDiscountTotal = async (
  cart: Cart,
  couponCode: string,
  couponFn: ValueOfCouponCodeDb
) => {
  cart.couponCode.push(couponCode)
  cart.total -= couponFn(cart.products)
}
