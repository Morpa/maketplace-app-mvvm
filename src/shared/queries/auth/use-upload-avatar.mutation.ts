import { useMutation } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"
import { uploadAvatar } from "@/shared/services/auth.service"

export const useUserUploadAvatarMutation = () => {
  const mutation = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: (response) => {
      console.log(response)
    },
    onError: (error) => {
      console.error(error)
      Toast.error("Erro ao fazer upload da imagem de perfil", "top")
    },
  })

  return mutation
}
