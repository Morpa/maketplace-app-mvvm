import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userRegisterMutation } from "../../shared/queries/auth/user-register.mutation";
import { type RegisterFormData, registerScheme } from "./register.scheme";

export const userRegisterViewModel = () => {
	const mutation = userRegisterMutation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: yupResolver(registerScheme),
		defaultValues: {
			name: "Zeca",
			email: "zeca@email.com",
			password: "123456",
			confirmPassword: "123456",
			phone: "123321",
		},
	});

	const onSubmit = handleSubmit(async (userData) => {
		// biome-ignore lint/correctness/noUnusedVariables: BE don't care about confirmPassword
		const { confirmPassword, ...registerData } = userData;
		await mutation.mutateAsync(registerData);
	});

	return {
		control,
		errors,
		onSubmit,
	};
};
