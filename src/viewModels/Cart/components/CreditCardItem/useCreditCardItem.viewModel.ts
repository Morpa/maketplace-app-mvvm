import { format } from "date-fns"
import type { CreditCard } from "@/shared/interfaces/credit-card"

export const useCreditCardItemViewModel = (creditCard: CreditCard) => {
  const formatedExpirationDate = format(creditCard.expirationDate, "dd/yyyy")

  const formatedCardNumer = creditCard.number.slice(-4)

  return { creditCard, formatedExpirationDate, formatedCardNumer }
}
