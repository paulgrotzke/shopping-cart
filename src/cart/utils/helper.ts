import { Cart } from '../types'
import { cartDataDb } from './data'

export const calcCartTotal = (cart: Cart) => {
  let sum = 0
  cart.products.map((product) => (sum += product.price))
  return sum
}

export const createNewCart = () => {
  const uniqueId = 'id' + new Date().getTime()
  cartDataDb[uniqueId] = {
    id: uniqueId,
    createdAt: new Date().toJSON(),
    completed: false,
    products: [],
    couponCode: [],
    total: 0,
  }
  return cartDataDb[uniqueId]
}
