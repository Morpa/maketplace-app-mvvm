import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
	return (
		<View>
			<Text>Ola Mundo</Text>
			<TouchableOpacity onPress={() => router.push("login")}>
				<Text>Login</Text>
			</TouchableOpacity>
		</View>
	);
}
