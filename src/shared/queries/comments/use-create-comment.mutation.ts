import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"
import type { CreateCommentRequest } from "@/shared/interfaces/http/create-comment"
import { createComment } from "@/shared/services/comments.service"

export const useCreateCommentMutation = (productId: number) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (comment: CreateCommentRequest) => createComment(comment),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user-comment", productId] })
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      })

      Toast.success(response.message || "Avaliação enviada com sucesso!", "top")
    },
    onError: (error) => {
      Toast.error(
        error.message ?? "Erro ao enviar a avaliação, tente novamente!",
        "top",
      )
    },
  })

  return mutation
}
