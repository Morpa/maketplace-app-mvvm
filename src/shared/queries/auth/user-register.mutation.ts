import { useMutation } from "@tanstack/react-query";
import type { RegisterHttpParams } from "../../interfaces/http/register";
import * as authService from "../../services/auth.service";

export const userRegisterMutation = () => {
	const mutation = useMutation({
		mutationFn: (userData: RegisterHttpParams) =>
			authService.register(userData),
		onSuccess: (response) => {
			console.log({ response });
		},
		onError: (error) => {
			console.log({ error });
		},
	});

	return mutation;
};
