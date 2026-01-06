import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useUserStore } from "@/shared/store/user-store"
import { colors } from "@/styles/colors"

export const HomeHeader = () => {
  const { user } = useUserStore()

  return (
    <View>
      <TouchableOpacity
        className="flex-row items-center gap-6"
        onPress={() => router.push("/profile")}
      >
        <View className="relative">
          {user?.avatarUrl ? (
            <Image
              source={{ uri: user?.avatarUrl }}
              className="w-[56px] h-[56px] rounded-[12px] border-shape"
            />
          ) : (
            <View className="w-[56px] h-[56px] rounded-[12px] bg-shape border-2 items-center justify-center border-gray-200 ">
              <Ionicons name="person" size={24} color={colors.gray[300]} />
            </View>
          )}
        </View>

        <View>
          <Text className="font-bold text-base">
            Olá, {user?.name.split(" ")[0] || "Usuário"}
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className="color-purple-base font-bold text-sm">
              Ver perfil
            </Text>
            <Ionicons
              size={20}
              name="arrow-forward-outline"
              color={colors["purple-base"]}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
