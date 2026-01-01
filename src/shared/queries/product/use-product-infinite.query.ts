import { useInfiniteQuery } from "@tanstack/react-query"
import { buildImageUrl } from "@/shared/helpers/buildImageUrl"
import { getProducts } from "@/shared/services/product.service"

export const useProductInfiniteQuery = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      const response = await getProducts({
        pagination: { page: pageParam, perPage: 10 },
      })

      return response
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPage ? lastPage.page + 1 : undefined
    },
    initialPageParam: 1,
    queryKey: ["products"],
  })

  const products = data?.pages
    .flatMap((page) => page.data)
    .map((product) => ({
      ...product,
      photo: buildImageUrl(product.photo),
    }))

  return {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  }
}
