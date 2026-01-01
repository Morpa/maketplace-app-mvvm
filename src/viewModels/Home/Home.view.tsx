import type { FC } from "react"
import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import type { ProductInterface } from "@/shared/interfaces/product"
import { HomeHeader } from "./components/Header"
import { ProductCard } from "./components/ProductCard"
import { SearchInput } from "./components/SearchInput"
import type { useHomeViewModel } from "./useHome.viewModel"

export const HomveView: FC<ReturnType<typeof useHomeViewModel>> = ({
  products,
}) => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={({ id }) => `product-list-item-${id}`}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  )
}
