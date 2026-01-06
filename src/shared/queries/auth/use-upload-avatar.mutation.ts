import { useMutation } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"
import { uploadAvatar } from "@/shared/services/auth.service"
import { useUserStore } from "@/shared/store/user-store"

export const useUploadAvatarMutation = () => {
  const { updateUser } = useUserStore()

  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (response) => {
      console.log(response)
      updateUser({ avatarUrl: response.url })
    },
    onError: (error) => {
      console.error(error)
      Toast.error("Erro ao fazer upload da imagem de perfil", "top")
    },
  })

  return mutation
}
