import type { RegisterHttpParams } from "@shared/interfaces/http/register";
import * as authService from "@shared/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useRegisterMutation = () => {
	const mutation = useMutation({
		mutationFn: (userData: RegisterHttpParams) =>
			authService.register(userData),
		onSuccess: (response) => {
			console.log(response);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	return mutation;
};
