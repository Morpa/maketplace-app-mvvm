import { marketPlaceApiClient } from "../api/marketplace"
import type {
  SubmitOrdersRequestParams,
  SubmitOrdersResponse,
} from "../interfaces/http/orders"

export const submitOrder = async (order: SubmitOrdersRequestParams) => {
  const { data } = await marketPlaceApiClient.post<SubmitOrdersResponse>(
    "/orders",
    order,
  )

  return data
}
