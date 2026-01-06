import * as yup from "yup"

export const profileScheme: yup.ObjectSchema<{
  name: string
  email: string
  phone: string
  password?: string
  newPassword?: string
}> = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(4, "O nome deve ter pelo menos 4 caracteres"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^[0-9]+$/, "Telefone inválido"),
  password: yup.string().optional(),
  newPassword: yup.string().optional(),
})

export type ProfileFormData = yup.InferType<typeof profileScheme>
