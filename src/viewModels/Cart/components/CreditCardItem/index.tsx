import type { CreditCard } from "@/shared/interfaces/credit-card"
import { CreditCardItemView } from "./CreditCardItem.view"
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel"

interface CreditCardItemParams {
  creditCard: CreditCard
  isSelected: boolean
  setSelectedCreditCard: (creditCard: CreditCard) => void
}

export const CreditCardItem = ({
  creditCard,
  isSelected,
  setSelectedCreditCard,
}: CreditCardItemParams) => {
  const viewModel = useCreditCardItemViewModel(creditCard)

  return (
    <CreditCardItemView
      isSelected={isSelected}
      setSelectedCreditCard={setSelectedCreditCard}
      {...viewModel}
    />
  )
}
