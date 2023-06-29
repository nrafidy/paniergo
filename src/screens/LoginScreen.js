import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../core/theme";
import Illustration from "../components/Illustration";
import PanierGo from "../components/PanierGo";
import FullWidthButton from "../components/FullWidthButton";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import TextInput from "../components/TextInput";

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });

	const onLoginPressed = () => {
		// const emailError = emailValidator(email.value);
		// const passwordError = passwordValidator(password.value);
		// if (emailError || passwordError) {
		// 	setEmail({ ...email, error: emailError });
		// 	setPassword({ ...password, error: passwordError });
		// 	return;
		// }
		navigation.reset({
			index: 0,
			routes: [{ name: "DrawerContainer" }],
		});
	};

	return (
		<View style={styles.container}>
			<Illustration />
			<PanierGo />
			<Text style={styles.header}>Welcome back</Text>
			<TextInput label="Email" returnKeyType="next" value={email.value} onChangeText={(text) => setEmail({ value: text, error: "" })} error={!!email.error} errorText={email.error} autoCapitalize="none" autoCompleteType="email" textContentType="emailAddress" keyboardType="email-address" />
			<TextInput label="Password" returnKeyType="done" value={password.value} onChangeText={(text) => setPassword({ value: text, error: "" })} error={!!password.error} errorText={password.error} secureTextEntry />
			<View style={styles.forgotPassword}>
				<TouchableOpacity onPress={() => navigation.navigate("ResetPasswordScreen")}>
					<Text style={styles.forgot}>Forgot your password?</Text>
				</TouchableOpacity>
			</View>
			<FullWidthButton mode="contained" onPress={onLoginPressed}>
				Login
			</FullWidthButton>
			<View style={styles.row}>
				<Text>Don’t have an account? </Text>
				<TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
					<Text style={styles.link}>Sign up</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	header: {
		fontSize: 18,
		paddingVertical: 12,
	},
	row: {
		flexDirection: "row",
		marginTop: 4,
		alignItems: "flex-end",
	},
	link: {
		fontWeight: "bold",
		color: theme.colors.primary,
	},
	forgot: {
		fontSize: 13,
		textAlign: "right",
		marginTop: 5,
	},
	forgotPassword: {
		width: "100%",
		alignItems: "flex-end",
		marginBottom: 24,
	},
});
