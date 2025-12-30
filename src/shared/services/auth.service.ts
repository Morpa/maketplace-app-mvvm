import { marketplaceApiClient } from "@shared/api/marketplace"
import type { AuthResponse } from "@shared/interfaces/http/auth-response"
import type { LoginHttpParams } from "@shared/interfaces/http/login"
import type { RegisterHttpParams } from "@shared/interfaces/http/register"

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
