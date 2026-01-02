import type { FC } from "react"
import { AppPriceTextView } from "./AppPriceText.view"
import { useAppPriceTextViewModel } from "./useAppPriceText.viewModel"

interface AppPriceTextParams {
  classNameCurrency?: string
  classNameValue?: string
  value: number
}

export const AppPriceText: FC<AppPriceTextParams> = ({
  value,
  classNameCurrency,
  classNameValue,
}) => {
  const viewModel = useAppPriceTextViewModel(value)

  return (
    <AppPriceTextView
      {...viewModel}
      classNameCurrency={classNameCurrency}
      classNameValue={classNameValue}
    />
  )
}
