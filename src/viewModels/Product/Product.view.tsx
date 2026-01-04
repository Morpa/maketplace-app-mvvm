import type { FC } from "react"
import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { AddToCartFooter } from "./components/AddToCartFooter"
import { CommentItem } from "./components/CommentItem"
import { EmptyList } from "./components/EmptyList"
import { ProductError } from "./components/Error"
import { Header } from "./components/Header"
import { ListFooter } from "./components/ListFooter"
import { Loading } from "./components/Loading"
import type { useProductViewModel } from "./useProduct.viewModel"

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
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
}) => {
  if (error || getCommentsError) return <ProductError />

  if (isLoading || !productDetails) return <Loading />

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      <FlatList
        className="px-6"
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={() => <Header productDetails={productDetails} />}
        onEndReached={handleEndReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        ListFooterComponent={<ListFooter isLoadingMore={isFetchingNextPage} />}
        ListEmptyComponent={<EmptyList isLoadingComments={getCommetsLoading} />}
        contentContainerClassName="pb-6"
      />
      <AddToCartFooter
        handleAddToCart={handleAddToCart}
        product={productDetails}
      />
    </SafeAreaView>
  )
}
