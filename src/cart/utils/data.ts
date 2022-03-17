import { CartDataDb, CouponCodeDb, Product } from '../types'
import { calculate2For1, calculatePercentageOff } from './lambda'

export const A0001 = {
  sku: 'A0001',
  price: 12.99,
}

export const A0002 = {
  sku: 'A0002',
  price: 3.99,
}

export const cartDataDb: CartDataDb = {
  id123: {
    id: 'id123',
    createdAt: '2022-03-17',
    completed: false,
    products: [A0002],
    couponCode: [],
    total: 3.99,
  },
}

export const couponCodeDb: CouponCodeDb = {
  '10off': (products: Product[]) => calculatePercentageOff(products),
  '2For1': (products: Product[]) => calculate2For1(products)
}
