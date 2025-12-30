import { Ionicons } from "@expo/vector-icons";
import type { FC } from "react";
import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";
import { colors } from "@/styles/colors";
import { type ButtonVariants, buttonVariants } from "./button.variants";

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
	leftIcon?: keyof typeof Ionicons.glyphMap;
	rightIcon?: keyof typeof Ionicons.glyphMap;
	children: string;
}

export const AppButton: FC<AppButtonProps> = ({
	leftIcon,
	rightIcon,
	children,
	variant = "filled",
	isLoading,
	isDisabled,
	className,
	...rest
}) => {
	const contentColor =
		variant === "filled" ? colors.white : colors["purple-base"];

	const styles = buttonVariants({
		hasIcon: !!leftIcon || !!rightIcon,
		variant,
		isLoading,
		isDisabled,
	});

	const renderContent = () => {
		if (isLoading) {
			return <ActivityIndicator size={"small"} color={contentColor} />;
		}

		return (
			<>
				{leftIcon && (
					<Ionicons name={leftIcon} color={contentColor} size={22} />
				)}

				<Text className={styles.text()}>{children}</Text>

				{rightIcon && (
					<Ionicons name={rightIcon} color={contentColor} size={22} />
				)}
			</>
		);
	};

	return (
		<TouchableOpacity className={styles.base({ className })} {...rest}>
			{renderContent()}
		</TouchableOpacity>
	);
};
