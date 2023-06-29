import React, { useState } from "react";
import TextInput from "../components/TextInput";
import { emailValidator } from "../helpers/emailValidator";
import { StyleSheet, View } from "react-native";
import FullWidthButton from "../components/FullWidthButton";
import Illustration from "../components/Illustration";
import { IconButton, Text } from "react-native-paper";
import PanierGo from "../components/PanierGo";
import { theme } from "../core/theme";

export default function ResetPasswordScreen({ navigation }) {
	const [email, setEmail] = useState({ value: "", error: "" });

	const sendResetPasswordEmail = () => {
		const emailError = emailValidator(email.value);
		if (emailError) {
			setEmail({ ...email, error: emailError });
			return;
		}
		navigation.navigate("LoginScreen");
	};

	return (
		<View style={styles.container}>
			<View style={styles.backContainer}>
				<IconButton icon="arrow-left" size={40} onPress={() => navigation.goBack()} iconColor={theme.colors.primary} />
			</View>
			<Illustration />
			<View style={styles.content}>
				<PanierGo />
				<Text style={styles.header}>Reset password</Text>
				<TextInput label="E-mail address" returnKeyType="done" value={email.value} onChangeText={(text) => setEmail({ value: text, error: "" })} error={!!email.error} errorText={email.error} autoCapitalize="none" autoCompleteType="email" textContentType="emailAddress" keyboardType="email-address" description="You will receive email with password reset link." />
				<FullWidthButton mode="contained" onPress={sendResetPasswordEmail} style={{ marginTop: 16 }}>
					Send Instructions
				</FullWidthButton>
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
	backContainer: {
		width: "100%",
		alignItems: "flex-start",
	},
	header: {
		fontSize: 18,
		paddingVertical: 12,
	},
	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		width: "100%",
	},
});
