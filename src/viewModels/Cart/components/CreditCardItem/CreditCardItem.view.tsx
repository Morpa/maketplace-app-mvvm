import { Ionicons } from "@expo/vector-icons"
import type { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import type { CreditCard } from "@/shared/interfaces/credit-card"
import { colors } from "@/styles/colors"
import type { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel"

export const CreditCardItemView: FC<
  ReturnType<typeof useCreditCardItemViewModel> & {
    isSelected: boolean
    setSelectedCreditCard: (creditCard: CreditCard) => void
  }
> = ({
  creditCard,
  formatedExpirationDate,
  formatedCardNumer,
  isSelected,
  setSelectedCreditCard,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedCreditCard(creditCard)}
      className={`p-4 rounded-lg border bg-white ${isSelected ? "border-purple-base" : "border-gray-100"}`}
    >
      <View className="flex-row justify-center">
        <View className="mr-4">
          <Ionicons
            name="card-outline"
            size={24}
            color={colors["purple-base"]}
          />
        </View>

        <View className="flex-1">
          <Text className="text-base">Cartão final {formatedCardNumer}</Text>
          <Text className="text-sm text-gray-500 mt-1">
            {formatedExpirationDate}
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="pencil" color={colors["purple-base"]} size={18} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
