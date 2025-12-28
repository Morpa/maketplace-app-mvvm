import type { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import type { userRegisterViewModel } from "./userRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof userRegisterViewModel>> = ({
	onSubmit,
}) => {
	return (
		<View className="flex-1 items-center justify-center">
			<Text>Register view</Text>
			<TouchableOpacity onPress={onSubmit}>
				<Text>Registrar</Text>
			</TouchableOpacity>
		</View>
	);
};
