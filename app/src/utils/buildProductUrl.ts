

export const PRODUCT_END_POINT = '/products'

type ProductType = 'clothing' | 'electronics'

export const buildProductUrl = (type: ProductType): string => {
  return `${PRODUCT_END_POINT}?type=${type}`
}
