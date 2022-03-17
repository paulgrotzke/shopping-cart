import { cartDataDb, couponCodeDb } from './data'
import { Cart, CouponCodeDb, Product, ValueOfCouponCodeDb } from '../types'
import { calcCartTotal, createNewCart } from './helper'

/* 
  Assuming we have already an indicator for the cart from the user,
  maybe stored as cookie or we fetched it while we authenticated the user
*/

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
