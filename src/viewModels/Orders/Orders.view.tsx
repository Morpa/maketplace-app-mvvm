import type { FC } from "react"
import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { EmptyList } from "./components/EmptyList"
import { ListHeader } from "./components/ListHeader"
import { OrderItem } from "./components/OrderItem"
import { OrdersError } from "./components/OrdersError"
import { OrdersLoading } from "./components/OrdersLoading"
import type { useOrdersViewModel } from "./useOrders.viewModel"

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({
  orders,
  error,
  isLoading,
}) => {
  if (isLoading) return <OrdersLoading />

  if (error) return <OrdersError />

  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <FlatList
        contentContainerClassName="px-[16px] pb-[120px]"
        data={orders}
        renderItem={({ item: order }) => <OrderItem order={order} />}
        keyExtractor={({ id }) => `order-${id}`}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={ListHeader}
      />
    </SafeAreaView>
  )
}
