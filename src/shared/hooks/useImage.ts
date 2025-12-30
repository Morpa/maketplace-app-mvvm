import type { ImagePickerOptions } from "expo-image-picker"
import { useModalStore } from "../store/modal-store"
import { useAppModal } from "./useAppModal"
import { useCamera } from "./useCamera"
import { useGallery } from "./useGallery"

interface UseImageParams extends ImagePickerOptions {
  callback: (uri: string | null) => void
}

export const useImage = ({ callback, ...pickerOptions }: UseImageParams) => {
  const modals = useAppModal()
  const { openCamera, isloading: cameraLoading } = useCamera(pickerOptions)
  const { opeGallery, isLoading: galleryLoading } = useGallery(pickerOptions)
  const loading = Boolean(cameraLoading || galleryLoading)
  const { close } = useModalStore()

  const handleCallback = (uri: string | null) => {
    close()
    callback(uri)
  }

  const handleSelectImage = () => {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "images",
          variant: "primary",
          onPress: async () => {
            const imageUri = await opeGallery()
            handleCallback(imageUri)
          },
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openCamera()
            handleCallback(imageUri)
          },
        },
      ],
    })
  }

  return { handleSelectImage, loading }
}
