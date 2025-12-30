import { yupResolver } from "@hookform/resolvers/yup"
import { useRegisterMutation } from "@shared/queries/auth/use-register.mutation"
import { useUserStore } from "@shared/store/user-store"
import { CameraType } from "expo-image-picker"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useImage } from "@/shared/hooks/useImage"
import { useUserUploadAvatarMutation } from "@/shared/queries/auth/use-upload-avatar.mutation"
import { type RegisterFormData, registerScheme } from "./register.scheme"

export const useRegisterViewModel = () => {
  const { updateUser } = useUserStore()
  const [avatarUri, setAvatarUri] = useState<string | null>(null)

  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  })

  const handleSelectAvatar = () => {
    handleSelectImage()
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  })

  const uploadAvatarMutation = useUserUploadAvatarMutation()

  const userRegisterMutation = useRegisterMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatarMutation.mutateAsync(avatarUri)
        console.log({ url })
        updateUser({ avatarUrl: url })
      }
    },
  })

  const onSubmit = handleSubmit(async (userData) => {
    // biome-ignore lint/correctness/noUnusedVariables: <BE don't care abaout the confirmPassword>
    const { confirmPassword, ...registerData } = userData

    await userRegisterMutation.mutateAsync(registerData)
  })

  return {
    control,
    errors,
    onSubmit,
    handleSelectAvatar,
    avatarUri,
  }
}
