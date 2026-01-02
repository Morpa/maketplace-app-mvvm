import { useQuery } from "@tanstack/react-query"
import { getProductsCategories } from "@/shared/services/product.service"

export const useGetProductCategoriesQuery = () => {
  const query = useQuery({
    queryKey: ["products-categories"],
    queryFn: getProductsCategories,
    staleTime: 1000 * 60 * 60, // 1 hour
  })

  return query
}
