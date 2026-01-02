import { marketPlaceApiClient } from "../api/marketplace"
import type { ProductRequest } from "../interfaces/http/product"
import type { ProductResponse } from "../interfaces/http/product-response"
import type { ProductCategory } from "../interfaces/product"

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.post<ProductResponse>(
    "/products",
    params,
  )

  return data
}

export const getProductsCategories = async () => {
  const { data } = await marketPlaceApiClient.get<ProductCategory[]>(
    "/products/categories",
  )

  return data
}
