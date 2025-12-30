import type { ImagePickerOptions } from "expo-image-picker"
import * as ImagePicker from "expo-image-picker"
import { useCallback, useState } from "react"
import { Alert, Linking } from "react-native"
import { Toast } from "toastify-react-native"

export const useGallery = (pickerOptions: ImagePickerOptions) => {
  const [isLoading, setIsLoading] = useState(false)

  const requestGalleryPermission = useCallback(async (): Promise<boolean> => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

      const currentStatus = status === "granted"

      if (!currentStatus) {
        Alert.alert(
          "Permissão negada!",
          "Precisamos da permissão para acessar sua galeria de fotos",
          [
            { text: "Cancelar", style: "cancel" },
            {
              text: "Abrir configurações",
              onPress: () => Linking.openSettings(),
            },
          ],
        )
      }

      return currentStatus
    } catch (_) {
      Toast.error("Erro ao solicitar permissão para acessar suas fotos", "top")
      return false
    }
  }, [])

  const opeGallery = useCallback(async (): Promise<string | null> => {
    setIsLoading(true)
    try {
      const hasPermission = await requestGalleryPermission()
      if (!hasPermission) return null

      const result = await ImagePicker.launchImageLibraryAsync(pickerOptions)

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Foto selecionada com sucesso", "top")
        return result.assets[0].uri
      }

      return null
    } catch (_) {
      Toast.error("Erro ao selecionar foto", "top")
      return null
    } finally {
      setIsLoading(false)
    }
  }, [pickerOptions, requestGalleryPermission])

  return { requestGalleryPermission, opeGallery, isLoading }
}
