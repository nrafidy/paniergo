import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../core/theme";

export default function PanierGo() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>PanierGo</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		fontSize: 36,
		color: theme.colors.primary,
		fontWeight: "bold",
		paddingVertical: 12,
	},
	container: {
		// flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
	},
});
