import type { FC } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { AppPriceText } from "@/shared/components/AppPriceText"
import { BuildImageUrl } from "@/shared/helpers/buildImageUrl"
import type { CartProduct } from "@/shared/store/cart-store"
import type { useProductCardCartViewModel } from "./useProductCardCart.viewModel"

interface ProductCardCartParams
  extends ReturnType<typeof useProductCardCartViewModel> {
  product: CartProduct
}

export const ProductCardCartView: FC<ProductCardCartParams> = ({
  product,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <View className="bg-white h-[71px] w-full flex-row items-center px-2 mb-2 rounded-lg">
      <Image
        source={{ uri: BuildImageUrl(product?.image ?? "") }}
        className="size-16 rounded-md mr-4"
        resizeMode="cover"
      />

      <View className="flex-1 mr-3">
        <Text className="text-sm font-normal text-gray-800 mb-1">
          {product.name}
        </Text>

        <AppPriceText
          value={Number(product.price)}
          classNameCurrency="text-sm font-bold"
          classNameValue="text-sm font-bold"
        />
      </View>

      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={() => handleDecrement(product.id, product.quantity)}
          className="border-2 size-[18px] border-purple-base rounded-md items-center justify-center"
        >
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            -
          </Text>
        </TouchableOpacity>

        <View className="mx-2 items-center justify-center min-w-[24px] border-b border-b-gray-300">
          <Text className="text-base font-medium text-gray-700">
            {product.quantity}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => handleIncrement(product.id, product.quantity)}
          className="border-2 size-[18px] border-purple-base rounded-md items-center justify-center"
        >
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
