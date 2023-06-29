import React from "react";
import { StyleSheet, View } from "react-native";
import Illustration from "../components/Illustration";
import FullWidthButton from "../components/FullWidthButton";
import { theme } from "../core/theme";
import PanierGo from "../components/PanierGo";
import Slogan from "../components/Slogan";

export default function StartScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Illustration />
			<View style={styles.content}>
				<PanierGo />
				<Slogan />
				<FullWidthButton mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
					Login
				</FullWidthButton>
				<FullWidthButton mode="outlined" onPress={() => navigation.navigate("RegisterScreen")}>
					Sign Up
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
	signupBtn: {
		backgroundColor: theme.colors.surface,
	},
	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		width: "100%",
	},
});
