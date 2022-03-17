import { Product } from '../types'

export const calculatePercentageOff = (products: Product[]) => {
  // would be normally editted in UI backend
  const availableSkuDiscount = ['A0001']
  // created the logic, in case that you want to create several skus for the discount
  // and for the case e.g. you have more than 1 discounted product in cart
  const discountableProducts: string[] = []
  // created the dic, for having price matching SKU and so would not have to map over it again
  const skuPriceDic: { [sku: string]: number } = {}

  for (let i in availableSkuDiscount) {
    products.map(
      (product) =>
        product.sku === availableSkuDiscount[i] &&
        (discountableProducts.push(product.sku), (skuPriceDic[product.sku] = product.price))
    )
  }

  let discount = 0
  discountableProducts.map((sku) => (discount += skuPriceDic[sku]))

  return discount * 0.1
}

export const calculate2For1 = (products: Product[]) => {
  {
    // would be normally editted in UI backend
    const availableSkuDiscount = ['A0002']
    // again, I created the logic, in case that you want to create several skus for the discount
    // and for the case e.g. you have like 6 same products and would like to give 3 for free
    // or you will add more skus to 'availableSkuDiscount'
    const discountableProducts: string[] = []
    // I created the dic, for having price matching SKU and so would not have to map over it again
    const skuPriceDic: { [sku: string]: number } = {}

    for (let i in availableSkuDiscount) {
      products.map(
        (product) =>
          product.sku === availableSkuDiscount[i] &&
          (discountableProducts.push(product.sku), (skuPriceDic[product.sku] = product.price))
      )
    }

    if (discountableProducts.length >= 2) {
      let sum = 0
      const toBeReducedPrices = availableSkuDiscount
        // filter the amount of valid skus from cart
        .map((sku) => discountableProducts.filter((skuInCart) => skuInCart === sku).length)
        // our logic, if you have 2 you get 1 for free -> round down to get only valid ones
        .map((discountableSkuAmountInCart) => Math.floor(discountableSkuAmountInCart / 2))
        // combine the to be reduced price with the amount of valid products
        // we can safely assume that the price ("Object.entries(skuPriceDic)[i][1]")
        // belongs to the correct Sku (freeSkusInCart), since we mapped initially through availableSkuDiscount
        .map((freeSkusInCart, i) => Object.entries(skuPriceDic)[i][1] * freeSkusInCart)
      toBeReducedPrices.map((price) => (sum += price))
      return sum
    } else return 0
  }
}
