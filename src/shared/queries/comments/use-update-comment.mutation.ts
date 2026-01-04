import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Toast } from "toastify-react-native"
import type { UpdateCommentRequest } from "@/shared/interfaces/http/update-comment"
import { updateUserComment } from "@/shared/services/comments.service"

export const useUpdateCommentMutation = (productId: number) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (comment: UpdateCommentRequest) => updateUserComment(comment),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user-comment", productId] })
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      })

      Toast.success(
        response.message || "Avaliação atualizada com sucesso!",
        "top",
      )
    },
    onError: (error) => {
      Toast.error(
        error.message ?? "Erro ao atualizar a avaliação, tente novamente!",
        "top",
      )
    },
  })

  return mutation
}
