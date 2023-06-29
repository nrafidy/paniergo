import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Illustration() {
	return <Image source={require("../assets/img/3.png")} style={styles.illustration} />;
}

const styles = StyleSheet.create({
	illustration: {
		flex: 1,
		resizeMode: "contain",
		width: "100%",
	},
});
