import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"
import type { CreateCreditCardRequestParams } from "@/shared/interfaces/http/create-credit-card"
import { createCreditCard } from "@/shared/services/credit-card.service"

export const useCreateCreditCardMutation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (creditCardData: CreateCreditCardRequestParams) =>
      createCreditCard(creditCardData),
    onSuccess: (response) => {
      Toast.success(response.message ?? "Cartão criado com sucesso")
      queryClient.invalidateQueries({
        queryKey: ["get-credit-cards"],
      })
    },
    onError: (error) => {
      Toast.error(error.message ?? "Erro ao criar cartão de crédito.")
    },
  })

  return mutation
}
