import type { FC } from "react"
import type { FocusedField } from "../../useAddCardBottomSheet.viewModel"
import { CreditCardView } from "./CreditCard.view"
import { useCreditCardViewModel } from "./useCreditCard.viewModel"

export interface CardData {
  number: string
  name: string
  expiry: string
  cvv: string
}

interface CreditCardParams {
  isFlipped: boolean
  focusedField: FocusedField | null
  cardData: CardData
}

export const CreditCard: FC<CreditCardParams> = ({
  isFlipped,
  focusedField,
  cardData,
}) => {
  const viewModel = useCreditCardViewModel(isFlipped)

  return (
    <CreditCardView
      cardData={cardData}
      focusedField={focusedField}
      {...viewModel}
    />
  )
}
