import { marketPlaceApiClient } from "../api/marketplace"
import type { ProductRequest } from "../interfaces/http/product"
import type { ProductResponse } from "../interfaces/http/product-response"

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.post<ProductResponse>(
    "/products",
    params,
  )

  return data
}
