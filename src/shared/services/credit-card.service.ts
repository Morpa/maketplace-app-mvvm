import { marketPlaceApiClient } from "../api/marketplace"
import type { CreditCard } from "../interfaces/credit-card"
import type {
  CreateCreditCardRequestParams,
  CreateCreditCardResponse,
} from "../interfaces/http/create-credit-card"

export const getCreditCards = async () => {
  const { data } = await marketPlaceApiClient.get<CreditCard[]>("/credit-cards")

  return data
}

export const createCreditCard = async (
  createCreditCard: CreateCreditCardRequestParams,
) => {
  const { data } = await marketPlaceApiClient.post<CreateCreditCardResponse>(
    "/credit-cards",
    createCreditCard,
  )

  return data
}
