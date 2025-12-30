import { Ionicons } from "@expo/vector-icons";
import { AppInputController } from "@shared/components/AppInputController";
import { AuthFormHeader } from "@shared/components/AuthFormHeader";
import { KeyboardContainer } from "@shared/components/KeyboardContainer";
import { router } from "expo-router";
import type { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AppButton } from "@/shared/components/AppButton";
import type { useRegisterViewModel } from "./userRegister.viewModel";
export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
	onSubmit,
	control,
	handleSelectAvatar,
}) => {
	return (
		<KeyboardContainer>
			<ScrollView className="flex-1 px-[40px]">
				<AuthFormHeader
					title="Crie a sua conta"
					subtitle="Informe os seus dados pessoais e de acesso"
				/>

				<TouchableOpacity onPress={handleSelectAvatar}>
					<Ionicons name="cloud-upload-outline" size={32} />
				</TouchableOpacity>

				<AppInputController
					leftIcon="person-outline"
					label="NOME"
					control={control}
					name="name"
					placeholder="Seu nome completo"
				/>

				<AppInputController
					leftIcon="call-outline"
					label="TELEFONE"
					control={control}
					name="phone"
					placeholder="(00) 00000-0000"
				/>

				<Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

				<AppInputController
					leftIcon="mail-outline"
					label="E-MAIL"
					control={control}
					name="email"
					placeholder="mail@example.com"
				/>

				<AppInputController
					leftIcon="lock-closed-outline"
					label="SENHA"
					control={control}
					name="password"
					secureTextEntry
					placeholder="Sua senha"
				/>

				<AppInputController
					leftIcon="lock-closed-outline"
					label="CONFIRMAR SENHA"
					control={control}
					name="confirmPassword"
					secureTextEntry
					placeholder="Confirme sua senha"
				/>

				<AppButton className="mt-6" onPress={onSubmit}>
					Registrar
				</AppButton>

				<View className="mt-16">
					<Text className="text-base text-gray-300 mb-6">
						Já tem uma conta?
					</Text>
					<AppButton variant="outlined" onPress={() => router.push("/login")}>
						Login
					</AppButton>
				</View>
			</ScrollView>
		</KeyboardContainer>
	);
};
