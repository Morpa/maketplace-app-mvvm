import type { FC } from "react"
import type { ProductInterface } from "@/shared/interfaces/product"
import { ProductCardView } from "./ProductCard.view"
import { useProductCardViewModel } from "./useProductCard.viewModel"

interface ProductCardParams {
  product: ProductInterface
}

export const ProductCard: FC<ProductCardParams> = (props) => {
  const viewModel = useProductCardViewModel(props)

  return <ProductCardView {...viewModel} />
}
