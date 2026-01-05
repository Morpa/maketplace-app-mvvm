import { useMutation } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"
import { submitOrder } from "@/shared/services/orders.service"

export const useSubmitOrderMutation = () => {
  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: (response) => {
      console.log(response.message)
    },
    onError: (error) => {
      Toast.error(error.message ?? "Falha ao atualizar o pedido", "top")
    },
  })

  return mutation
}
