import React from "react";
import { Badge, Appbar as Bar, IconButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { theme } from "../core/theme";

export default function Appbar({ navigation }) {
	const cartItemCount = 10;
	const handleMenuPress = () => {
		navigation.openDrawer();
	};

	const handleFavoritesPress = () => {
		// Handle favorites press here
	};

	const handleHomePress = () => {
		// Handle favorites press here
		navigation.navigate("HomeScreen");
	};

	const handleCartPress = () => {
		navigation.navigate("CartScreen");
	};

	return (
		<View style={styles.container}>
			<Bar.Header style={styles.appBar}>
				<View style={styles.iconsContainer}>
					<Bar.Action icon="menu" onPress={handleMenuPress} style={styles.icon} color="#fff" />
					<Bar.Action icon="home" onPress={handleHomePress} style={styles.icon} color="#fff" />
				</View>
				<Bar.Content title="PanierGo" titleStyle={styles.title} style={{ alignItems: "center" }} />
				<View style={styles.iconsContainer}>
					<IconButton icon="heart" onPress={handleFavoritesPress} style={styles.icon} iconColor="#fff" />
					<IconButton icon="cart" onPress={handleCartPress} style={styles.icon} iconColor="#fff" />
					{cartItemCount > 0 && (
						<Badge style={{ position: "absolute", bottom: 5, right: 5 }} size={16}>
							{cartItemCount}
						</Badge>
					)}
				</View>
			</Bar.Header>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ffffff",
		marginTop: -30,
	},
	appBar: {
		backgroundColor: theme.colors.primary,
		// backgroundColor: "#240b36",
		elevation: 0, // Remove shadow on Android
	},
	title: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "bold",
	},
	iconsContainer: {
		flexDirection: "row",
		// alignItems: "flex-end",
		// justifyContent: "flex-end",
		// marginRight: 8,
	},
	icon: {
		margin: 0,
	},
});
