import { router } from "expo-router"
import { createElement } from "react"
import { useGetProductCommentsInfiniteQuery } from "@/shared/queries/product/use-get-product-comments-infinite.query"
import { useGetProductDetailQuery } from "@/shared/queries/product/use-get-product-detail"
import { useCartStore } from "@/shared/store/cart-store"
import { useModalStore } from "@/shared/store/modal-store"
import { AddToCartSuccessModal } from "./components/AddToCartSuccessModal"

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

  const { addProduct } = useCartStore()

  const { open, close } = useModalStore()

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

  const handleAddToCart = () => {
    if (!productDetails) return

    addProduct({
      id: productDetails.id,
      name: productDetails.name,
      price: productDetails.value,
      image: productDetails.photo,
    })

    open(
      createElement(AddToCartSuccessModal, {
        productName: productDetails.name,
        onGoToCart: () => {
          router.push("/(private)/(tabs)/cart")
          close()
        },
        onClose: () => {
          close()
        },
        onContinueShopping: () => {
          router.push("/(private)/(tabs)/home")
          close()
        },
      }),
    )
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
    handleAddToCart,
  }
}
