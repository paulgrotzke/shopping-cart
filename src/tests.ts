import { addToCart, applyCouponToCart, initCart } from './cart/index'
import { A0001, A0002 } from './cart/utils/data'

// I have assumed for all cases, that when the app renders
// we initialize the user or cart and store it in the state
// const cart is our state
// fn-calls are user interactions

const case1 = async () => {
  // cart already exists has already product A0002 in it
  // applying coupon code
  const cart = await initCart('id123')

  await addToCart(cart, A0001)
  await addToCart(cart, A0002)
  console.log('Case 1 (2for1) Total b4 applying coupon: ', cart.total)

  await applyCouponToCart(cart, '2For1')
  console.log('Case 1 (2for1) Total: ', cart.total)
}

const case2 = async () => {
  // no cart exists
  // applying coupon code
  const cart = await initCart()

  await addToCart(cart, A0002)
  await addToCart(cart, A0001)
  await addToCart(cart, A0002)
  console.log('Case 2 (10% off) Total b4 applying coupon: ', cart.total)

  await applyCouponToCart(cart, '10off')
  console.log('Case 2 (10% off) Total: ', cart.total)
}

;(async () => {
  await case1()
  await case2()
})()
