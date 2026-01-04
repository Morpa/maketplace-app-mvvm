import { useQuery } from "@tanstack/react-query"
import { getUserComment } from "@/shared/services/comments.service"

export const useGetUserCommentQuery = (productId: number) => {
  const query = useQuery({
    queryKey: ["user-comment", productId],
    queryFn: () => getUserComment(productId),
    staleTime: 1000 * 60 * 5, //5 minutes
  })

  return query
}
