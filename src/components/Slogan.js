import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Slogan() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Shopping made easy.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// alignItems: "center",
		// justifyContent: "flex-start",
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		textAlign: "center",
		marginBottom: 12,
	},
});
