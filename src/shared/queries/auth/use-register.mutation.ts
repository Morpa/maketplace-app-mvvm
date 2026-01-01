import type { RegisterHttpParams } from "@shared/interfaces/http/register"
import * as authService from "@shared/services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { useUserStore } from "@/shared/store/user-store"

interface UserRegisterMutationParams {
  onSuccess?: () => void
}

export const useRegisterMutation = ({
  onSuccess,
}: UserRegisterMutationParams = {}) => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) =>
      authService.register(userData),
    onSuccess: (response) => {
      setSession({
        refreshToken: response.refreshToken,
        token: response.token,
        user: response.user,
      })
      onSuccess?.()
    },
    onError: (error) => {
      console.error(error)
    },
  })

  return mutation
}
