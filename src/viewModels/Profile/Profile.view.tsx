import { Ionicons } from "@expo/vector-icons"
import type { FC } from "react"
import { Image, ScrollView, Text, TouchableOpacity } from "react-native"
import { AppButton } from "@/shared/components/AppButton"
import { AppInputController } from "@/shared/components/AppInputController"
import { KeyboardContainer } from "@/shared/components/KeyboardContainer"
import { Header } from "./components/Header"
import type { useProfileViewModel } from "./useProfile.viewModel"

export const ProfileView: FC<ReturnType<typeof useProfileViewModel>> = ({
  control,
  avatarUri,
  onSubmit,
  isSubmitting,
  handleLogout,
  handleSelectImage,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <Header handleLogout={handleLogout} />
        <TouchableOpacity
          onPress={handleSelectImage}
          className="w-[120px] h-[120px] rounded-[12px] items-center justify-center bg-shape self-center mb-8 mt-6"
        >
          {avatarUri ? (
            <Image
              className="w-full h-full rounded-[12px]"
              source={{ uri: avatarUri }}
              resizeMode="cover"
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={32} />
          )}
        </TouchableOpacity>

        <Text className="text-base mt-6 font-bold text-gray-500">
          Dados pessoais
        </Text>

        <AppInputController
          leftIcon="person-outline"
          label="NOME"
          control={control}
          name="name"
          placeholder="Seu nome completo"
        />

        <AppInputController
          leftIcon="call-outline"
          label="TELEFONE"
          control={control}
          name="phone"
          placeholder="(00) 00000-0000"
        />

        <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

        <AppInputController
          leftIcon="mail-outline"
          label="E-MAIL"
          control={control}
          name="email"
          placeholder="mail@example.com"
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="SENHA ATUAL"
          control={control}
          name="password"
          secureTextEntry
          placeholder="Sua senha atual"
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="MOVA SENHA"
          control={control}
          name="newPassword"
          secureTextEntry
          placeholder="Sua nova senha"
        />

        <AppButton className="mt-6" onPress={onSubmit} isLoading={isSubmitting}>
          Atualizar cadastro
        </AppButton>
      </ScrollView>
    </KeyboardContainer>
  )
}
