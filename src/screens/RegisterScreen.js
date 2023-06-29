import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, TextInput as PaperInput } from "react-native-paper";
import { theme } from "../core/theme";
import Illustration from "../components/Illustration";
import PanierGo from "../components/PanierGo";
import FullWidthButton from "../components/FullWidthButton";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import TextInput from "../components/TextInput";

export default function RegisterScreen({ navigation }) {
	const [name, setName] = useState({ value: "", error: "" });
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });

	const onSignUpPressed = () => {
		const nameError = nameValidator(name.value);
		const emailError = emailValidator(email.value);
		const passwordError = passwordValidator(password.value);
		if (emailError || passwordError || nameError) {
			setName({ ...name, error: nameError });
			setEmail({ ...email, error: emailError });
			setPassword({ ...password, error: passwordError });
			return;
		}
		navigation.reset({
			index: 0,
			routes: [{ name: "Dashboard" }],
		});
	};

	return (
		<View style={styles.container}>
			<Illustration />
			<PanierGo />
			<Text style={styles.header}>Create an account</Text>
			<TextInput style={styles.textInput} label="Name" returnKeyType="next" value={name.value} onChangeText={(text) => setName({ value: text, error: "" })} error={!!name.error} errorText={name.error} mode="outlined" />
			<TextInput style={styles.textInput} label="Email" returnKeyType="next" value={email.value} onChangeText={(text) => setEmail({ value: text, error: "" })} error={!!email.error} errorText={email.error} autoCapitalize="none" autoCompleteType="email" textContentType="emailAddress" keyboardType="email-address" mode="outlined" />
			<TextInput style={styles.textInput} label="Password" returnKeyType="done" value={password.value} onChangeText={(text) => setPassword({ value: text, error: "" })} error={!!password.error} errorText={password.error} secureTextEntry mode="outlined" right={<PaperInput.Icon icon="eye" />} />
			<FullWidthButton mode="contained" onPress={onSignUpPressed} style={{ marginTop: 24 }}>
				Sign Up
			</FullWidthButton>
			<View style={styles.row}>
				<Text>Already have an account? </Text>
				<TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
					<Text style={styles.link}>Login</Text>
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
});
