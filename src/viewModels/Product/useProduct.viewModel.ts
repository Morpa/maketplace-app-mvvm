import { useGetProductCommentsInfiniteQuery } from "@/shared/queries/product/use-get-product-comments-infinite.query"
import { useGetProductDetailQuery } from "@/shared/queries/product/use-get-product-detail"

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetailQuery(productId)

  const {
    comments,
    isLoading: getCommetsLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
    error: getCommentsError,
    isRefetching,
    isFetchingNextPage,
  } = useGetProductCommentsInfiniteQuery(productId)

  const handleLoadingMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  const handleRefetch = () => {
    if (!isRefetching) {
      refetch()
    }
  }

  const handleEndReached = () => {
    handleLoadingMore()
  }

  return {
    isLoading,
    error,
    productDetails,
    handleRefetch,
    handleEndReached,
    getCommentsError,
    getCommetsLoading,
    comments,
    isRefetching,
    isFetchingNextPage,
  }
}
