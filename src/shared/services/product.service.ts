import { marketPlaceApiClient } from "../api/marketplace"
import type { PaginatedResponse } from "../interfaces/http/paginated-response"
import type { ProductRequest } from "../interfaces/http/product"
import type { GetProductCommentsInterface } from "../interfaces/http/product-comments"
import type { GetProductDetailInterface } from "../interfaces/http/product-detail"
import type { ProductCategory, ProductInterface } from "../interfaces/product"
import type { ProductComment } from "../interfaces/product-comment"

export const getProducts = async (params: ProductRequest) => {
  const { data } = await marketPlaceApiClient.post<
    PaginatedResponse<ProductInterface>
  >("/products", params)

  return data
}

export const getProductsCategories = async () => {
  const { data } = await marketPlaceApiClient.get<ProductCategory[]>(
    "/products/categories",
  )

  return data
}

export const getProductDetail = async (id: number) => {
  const { data } = await marketPlaceApiClient.get<GetProductDetailInterface>(
    `/products/${id}`,
  )

  return data
}

export const getProductComments = async (
  params: GetProductCommentsInterface,
) => {
  const { data } = await marketPlaceApiClient.post<
    PaginatedResponse<ProductComment>
  >(`/products/comments`, params)

  return data
}
