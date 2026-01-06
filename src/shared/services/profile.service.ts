import { marketPlaceApiClient } from "../api/marketplace"
import type {
  UpdateProfileParams,
  UpdateProfileResponse,
} from "../interfaces/http/update-profile"

export const updateUserProfile = async (userData: UpdateProfileParams) => {
  const { data } = await marketPlaceApiClient.put<UpdateProfileResponse>(
    "/user",
    userData,
  )

  return data
}
