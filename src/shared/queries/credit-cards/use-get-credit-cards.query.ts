import { useQuery } from "@tanstack/react-query"
import { getCreditCards } from "@/shared/services/credit-card.service"

export const useGetCreditCardsQuery = () => {
  const query = useQuery({
    queryFn: getCreditCards,
    queryKey: ["get-credit-cards"],
    staleTime: 1000 * 60 * 5, //5 minutes
  })

  return query
}
