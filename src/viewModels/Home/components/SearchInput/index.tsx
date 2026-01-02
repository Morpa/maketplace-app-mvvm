import { Ionicons } from "@expo/vector-icons"
import type { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { AppInput } from "@/shared/components/AppInput"
import { useBottomSheetStore } from "@/shared/store/bottomsheet-store"
import { colors } from "@/styles/colors"
import { Filter } from "../Filter"

interface SearchInputParams {
  setSearchInputText: (text: string) => void
  inputValue: string
}

export const SearchInput: FC<SearchInputParams> = ({
  setSearchInputText,
  inputValue,
}) => {
  const { open } = useBottomSheetStore()

  return (
    <View className="mb-3 mt-6">
      <Text className="text-2xl font-bold mt-6">Explore produtos</Text>
      <View className="flex-row">
        <View className="flex-1">
          <AppInput
            value={inputValue}
            onChangeText={setSearchInputText}
            leftIcon="search"
            className="text-lg flex-1"
            placeholder="Pesquisar"
          />
        </View>

        <TouchableOpacity
          className="ml-5 mt-6 items-center justify-center rounded-xl border-[1px] h-[48px] w-[48px] border-purple-base"
          onPress={() => {
            open({ content: <Filter /> })
          }}
        >
          <Ionicons
            name="filter-outline"
            size={24}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
