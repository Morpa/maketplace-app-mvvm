import { marketPlaceApiClient } from "../api/marketplace"
import type { GetOrdersResponse } from "../interfaces/http/get-orders"
import type {
  SubmitOrdersRequestParams,
  SubmitOrdersResponse,
} from "../interfaces/http/submit-orders"

export const submitOrder = async (order: SubmitOrdersRequestParams) => {
  const { data } = await marketPlaceApiClient.post<SubmitOrdersResponse>(
    "/orders",
    order,
  )

  return data
}

export const getOrders = async () => {
  const { data } = await marketPlaceApiClient.get<GetOrdersResponse>("/orders")

  return data
}
