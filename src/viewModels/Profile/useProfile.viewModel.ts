import { yupResolver } from "@hookform/resolvers/yup"
import { CameraType } from "expo-image-picker"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAppModal } from "@/shared/hooks/useAppModal"
import { useImage } from "@/shared/hooks/useImage"
import { useUploadAvatarMutation } from "@/shared/queries/auth/use-upload-avatar.mutation"
import { useUpdateProfileMutation } from "@/shared/queries/profile/use-update-profile.mutation"
import { useCartStore } from "@/shared/store/cart-store"
import { useModalStore } from "@/shared/store/modal-store"
import { useUserStore } from "@/shared/store/user-store"
import { type ProfileFormData, profileScheme } from "./profile.scheme"

export const useProfileViewModel = () => {
  const { user, logout } = useUserStore()

  const updateProfileMutation = useUpdateProfileMutation()
  const { showSelection } = useAppModal()
  const { close } = useModalStore()
  const { clearCart } = useCartStore()
  const uploadAvatarMutation = useUploadAvatarMutation()

  const { handleSelectImage } = useImage({
    callback: async (uri) => {
      if (uri) {
        await uploadAvatarMutation.mutateAsync(uri)
      }
    },
    cameraType: CameraType.front,
  })

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileScheme),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      password: undefined,
      newPassword: undefined,
    },
  })

  const validatePasswords = (userData: ProfileFormData) => {
    if (!userData.password) return true

    if (
      userData.password === userData.newPassword &&
      userData.password?.length > 0
    ) {
      return false
    }
    return true
  }

  const onSubmit = handleSubmit(async (userData) => {
    if (!validatePasswords(userData)) return

    await updateProfileMutation.mutateAsync(userData)
  })

  const handleLogout = () =>
    showSelection({
      title: "Sair",
      message: "Tem certeza que deseja sair da sua conta?",
      options: [
        {
          text: "Continuar logado",
          onPress: close,
        },
        {
          variant: "danger",
          onPress: () => {
            clearCart()
            logout()
            close()
          },
          text: "Sair",
        },
      ],
    })

  return {
    onSubmit,
    control,
    avatarUri: user?.avatarUrl,
    isSubmitting,
    handleLogout,
    handleSelectImage,
  }
}
