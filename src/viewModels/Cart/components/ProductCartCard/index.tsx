import type { FC } from "react"
import type { CartProduct } from "@/shared/store/cart-store"
import { ProductCardCartView } from "./ProductCardCart.view"
import { useProductCardCartViewModel } from "./useProductCardCart.viewModel"

interface ProductCartCard {
  product: CartProduct
}

export const ProductCartCard: FC<ProductCartCard> = ({ product }) => {
  const viewModel = useProductCardCartViewModel()

  return <ProductCardCartView product={product} {...viewModel} />
}
