import { baseURL, marketplaceApiClient } from "@shared/api/marketplace"
import type { AuthResponse } from "@shared/interfaces/http/auth-response"
import type { LoginHttpParams } from "@shared/interfaces/http/login"
import type { RegisterHttpParams } from "@shared/interfaces/http/register"
import type { UploadAvatarResponse } from "@/shared/interfaces/http/upload-avatar"

export const register = async (userData: RegisterHttpParams) => {
  const { data } = await marketplaceApiClient.post<AuthResponse>(
    "/auth/register",
    userData,
  )

  return data
}

export const login = async (userData: LoginHttpParams) => {
  const { data } = await marketplaceApiClient.post<AuthResponse>(
    "/auth/login",
    userData,
  )

  return data
}

export const uploadAvatar = async (avatarUri: string) => {
  const formData = new FormData()

  formData.append("avatar", {
    uri: avatarUri,
    type: "image/jpeg",
    name: "avatar.jpg",
  } as unknown as Blob)

  const { data } = await marketplaceApiClient.post<UploadAvatarResponse>(
    "/user/avatar",
    formData,
  )

  data.url = `${baseURL}${data.url}`

  return data
}
