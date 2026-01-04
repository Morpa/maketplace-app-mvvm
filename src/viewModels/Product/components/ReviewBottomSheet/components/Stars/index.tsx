import { Ionicons } from "@expo/vector-icons"
import type { FC } from "react"
import { TouchableOpacity } from "react-native"
import { colors } from "@/styles/colors"

interface StarsParams {
  rating: number
  handleRatingChange: (rating: number) => void
}

export const Stars: FC<StarsParams> = ({ rating, handleRatingChange }) => {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1
    const isSelected = starNumber <= rating
    return (
      <TouchableOpacity
        onPress={() => handleRatingChange(starNumber)}
        key={`rating-star-${starNumber}`}
      >
        <Ionicons
          size={32}
          name={isSelected ? "star" : "star-outline"}
          color={isSelected ? colors["purple-base"] : colors.gray["200"]}
        />
      </TouchableOpacity>
    )
  })
}
