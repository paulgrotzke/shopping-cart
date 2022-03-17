export type Cart = {
  id: string
  createdAt: string
  completed: boolean
  products: Product[]
  couponCode: string[]
  total: number
}

export type CartDataDb = {
  [key: string]: Cart
}

export type Product = {
  sku: string
  price: number
}

export type CouponCodeDb = {
  '10off': (products: Product[]) => number
  '2For1': (products: Product[]) => number
}

type ValueOf<T> = T[keyof T]

export type ValueOfCouponCodeDb = ValueOf<CouponCodeDb>
