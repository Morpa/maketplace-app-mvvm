import * as yup from "yup"

export const registerScheme = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(4, "O nome deve ter pelo menos 4 caracteres"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^[0-9]+$/, "Telefone inválido"),
})

export type RegisterFormData = yup.InferType<typeof registerScheme>
