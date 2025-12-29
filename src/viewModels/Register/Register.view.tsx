import { router } from "expo-router";
import type { FC } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import type { useRegisterViewModel } from "./userRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
	onSubmit,
	control,
}) => {
	return (
		<KeyboardContainer>
			<ScrollView className="flex-1 px-[40px]">
				<AuthFormHeader
					title="Crie a sua conta"
					subtitle="Informe os seus dados pessoais e de acesso"
				/>
				<AppInputController
					leftIcon="person-outline"
					label="NOME"
					control={control}
					name="name"
				/>

				<AppInputController
					leftIcon="mail-outline"
					label="E-MAIL"
					control={control}
					name="email"
				/>

				<AppInputController
					leftIcon="call-outline"
					label="TELEFONE"
					control={control}
					name="phone"
				/>

				<AppInputController
					leftIcon="lock-closed-outline"
					label="SENHA"
					control={control}
					name="password"
					secureTextEntry
				/>

				<AppInputController
					leftIcon="lock-closed-outline"
					label="CONFIRMAR SENHA"
					control={control}
					name="confirmPassword"
					secureTextEntry
				/>

				<TouchableOpacity onPress={onSubmit}>
					<Text>Registrar</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => router.push("/login")}>
					<Text>Login</Text>
				</TouchableOpacity>
			</ScrollView>
		</KeyboardContainer>
	);
};
