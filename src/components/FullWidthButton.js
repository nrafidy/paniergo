import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { theme } from "../core/theme";

export default function FullWidthButton({ mode, style, ...props }) {
	return <Button style={[styles.button, style]} labelStyle={styles.text} mode={mode} {...props} />;
}

const styles = StyleSheet.create({
	button: {
		width: "100%",
		marginVertical: 10,
		paddingVertical: 2,
		borderRadius: 5,
	},
	text: {
		fontWeight: "bold",
		fontSize: 15,
		lineHeight: 26,
	},
});
