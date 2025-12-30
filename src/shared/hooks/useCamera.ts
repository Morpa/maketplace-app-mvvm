import type { ImagePickerOptions } from "expo-image-picker"
import * as ImagePicker from "expo-image-picker"
import { useCallback, useState } from "react"
import { Toast } from "toastify-react-native"

export const useCamera = (pickerOptions: ImagePickerOptions) => {
  const [isloading, setIsLoading] = useState(false)

  const requestCameraPermission = useCallback(async (): Promise<boolean> => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync()

      const currentStatus = status === "granted"

      if (!currentStatus) {
        Toast.error("Precisamos da permissão para acessar sua câmera", "top")
      }

      return currentStatus
    } catch (_) {
      Toast.error("Erro ao solicitar permissão para acessar sua câmera", "top")
      return false
    }
  }, [])

  const openCamera = useCallback(async (): Promise<string | null> => {
    setIsLoading(true)

    try {
      const hasPermission = await requestCameraPermission()
      if (!hasPermission) return null

      const result = await ImagePicker.launchCameraAsync(pickerOptions)

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Imagem capturada com sucesso", "top")
        return result.assets[0].uri
      }

      return null
    } catch (_) {
      Toast.error("Erro ao abrir a câmera", "top")
      return null
    } finally {
      setIsLoading(false)
    }
  }, [requestCameraPermission, pickerOptions])

  return {
    requestCameraPermission,
    isloading,
    openCamera,
  }
}
