import { useProductInfiniteQuery } from "@/shared/queries/product/use-product-infinite.query"

export const useHomeViewModel = () => {
  const {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useProductInfiniteQuery()

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage()
    }
  }

  const handleRefresh = async () => {
    await refetch()
  }

  console.log(JSON.stringify(products, null, 2))

  return { handleLoadMore, handleRefresh, products, error, isRefetching }
}
