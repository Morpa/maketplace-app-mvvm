import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "@shared/queries/auth/use-register.mutation";
import { useUserStore } from "@shared/store/user-store";
import { useForm } from "react-hook-form";
import { useAppModal } from "@/shared/hooks/useAppModal";
import { type RegisterFormData, registerScheme } from "./register.scheme";

export const useRegisterViewModel = () => {
	const userRegisterMutation = useRegisterMutation();
	const { setSession, user } = useUserStore();
	const modals = useAppModal();

	const handleSelectAvatar = () => {
		modals.showSelection({
			title: "Selecionar foto",
			message: "Escolha uma opção:",
			options: [
				{
					text: "Galeria",
					icon: "images",
					variant: "primary",
					onPress: () => alert("galeria"),
				},
				{
					text: "Câmera",
					icon: "camera",
					variant: "primary",
					onPress: () => alert("Camera"),
				},
			],
		});
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: yupResolver(registerScheme),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
		},
	});

	const onSubmit = handleSubmit(async (userData) => {
		console.log(userData);
		// biome-ignore lint/correctness/noUnusedVariables: <BE don't care abaout the confirmPassword>
		const { confirmPassword, ...registerData } = userData;

		const mutationResponse =
			await userRegisterMutation.mutateAsync(registerData);

		setSession({
			refreshToken: mutationResponse.refreshToken,
			token: mutationResponse.token,
			user: mutationResponse.user,
		});
	});

	console.log({ user });

	return {
		control,
		errors,
		onSubmit,
		handleSelectAvatar,
	};
};
