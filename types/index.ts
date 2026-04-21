export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number // cents
  image_emoji: string
  stock: number
  created_at: string
}

export interface CartItem {
  product: Product
  quantity: number
}
