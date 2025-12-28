import type { FC } from "react";
import { Text, View } from "react-native";
import type { userRegisterViewModel } from "./userRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof userRegisterViewModel>> = ({
	userData,
	setUserData,
}) => {
	return (
		<View className="flex-1 items-center justify-center">
			<Text>{userData.name}</Text>
		</View>
	);
};
