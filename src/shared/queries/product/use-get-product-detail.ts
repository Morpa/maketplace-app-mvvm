import { useQuery } from "@tanstack/react-query"
import { getProductDetail } from "@/shared/services/product.service"

export const useGetProductDetailQuery = (productId: number) => {
  const query = useQuery({
    queryKey: ["product-detail", productId],
    queryFn: async () => getProductDetail(productId),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return query
}
