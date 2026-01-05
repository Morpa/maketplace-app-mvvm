import { router } from "expo-router"
import { useState } from "react"
import { useAppModal } from "@/shared/hooks/useAppModal"
import type { CreditCard } from "@/shared/interfaces/credit-card"
import { useSubmitOrderMutation } from "@/shared/queries/orders/use-submit-order.mutation"
import { useCartStore } from "@/shared/store/cart-store"

export const useCartFooterViewModel = () => {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<null | CreditCard>(null)

  const { total, products, clearCart } = useCartStore()
  const createOrderMutation = useSubmitOrderMutation()
  const { showSuccess } = useAppModal()

  const submitOrderMutation = async () => {
    if (!selectedCreditCard) return

    await createOrderMutation.mutateAsync({
      creditCardId: selectedCreditCard.id,
      items: products.map(({ id, quantity }) => ({ productId: id, quantity })),
    })

    clearCart()
    showSuccess({
      title: "Sucesso",
      message: "Pedido feito com sucesso",
      buttonText: "Ver pedidos",
      onButtomPress: () => router.push("/orders"),
    })
  }

  return {
    total,
    selectedCreditCard,
    setSelectedCreditCard,
    submitOrderMutation,
    isOrderLoading: createOrderMutation.isPending,
  }
}
