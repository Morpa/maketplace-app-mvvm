import type { LoginHttpParams } from "@shared/interfaces/http/login"
import * as authService from "@shared/services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { useUserStore } from "@/shared/store/user-store"

export const useLoginMutation = () => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) => authService.login(userData),
    onSuccess: (response) => {
      setSession(response)
    },
    onError: (error) => {
      console.error(error)
    },
  })

  return mutation
}
