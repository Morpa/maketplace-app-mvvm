import { marketPlaceApiClient } from "../api/marketplace"
import type {
  CreateCommentRequest,
  CreateCommentResponse,
} from "../interfaces/http/create-comment"
import type {
  UpdateCommentRequest,
  UpdateCommentResponse,
} from "../interfaces/http/update-comment"

export const createComment = async (params: CreateCommentRequest) => {
  const { data } = await marketPlaceApiClient.post<CreateCommentResponse>(
    "/products/create/comments",
    params,
  )

  return data
}

export const getUserComment = async (productId: number) => {
  const { data } = await marketPlaceApiClient.get<{
    comment: {
      id: number
      content: string
      createdAt: Date
      user: {
        id: number
        name: string
      }
    }
    rating: number
  }>(`/products/${productId}/user-comment`)

  return data
}

export const updateUserComment = async (params: UpdateCommentRequest) => {
  const { data } = await marketPlaceApiClient.put<UpdateCommentResponse>(
    `/products/comments/${params.commentId}`,
    { content: params.content, rating: params.rating },
  )

  return data
}
