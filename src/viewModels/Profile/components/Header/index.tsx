import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import type { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { colors } from "@/styles/colors"

interface HeaderParams {
  handleLogout: () => void
}

export const Header: FC<HeaderParams> = ({ handleLogout }) => {
  return (
    <View className="flex-row justify-between items-center py-3 border-shape">
      <TouchableOpacity
        onPress={router.back}
        className="flex-row items-center gap-1"
      >
        <Ionicons name="arrow-back" color={colors["purple-base"]} size={24} />
        <Text className="text-base text-purple-base">Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center gap-1"
        onPress={handleLogout}
      >
        <Ionicons name="log-out-outline" color={colors.danger} size={20} />
        <Text className="text-danger text-base">Sair</Text>
      </TouchableOpacity>
    </View>
  )
}
