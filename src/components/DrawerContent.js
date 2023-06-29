import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-paper";
import { theme } from "../core/theme";

const DrawerContent = (props) => {
	const navigation = useNavigation();

	const handleUserProfilePress = () => {
		// Handle User Profile Press
	};

	const handleMessagesPress = () => {
		// Handle Messages/Chat Press
	};

	const handleHistoryPress = () => {
		// Handle History Press
	};

	const handlePreferencesPress = () => {
		// Handle Preferences Press
	};

	const handleSettingsPress = () => {
		// Handle Settings Press
	};

	const handleCreditsPress = () => {
		// Handle Credits Press
	};

	const handleLogoutPress = () => {
		// Handle Logout Press
	};

	return (
		<View style={styles.container}>
			{/* User Section */}
			<LinearGradient colors={["#c31432", "#240b36"]} style={styles.userSection} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
				<Image source={require("../assets/img/1.png")} style={styles.profilePic} />
				<Text style={styles.username}>John Doe</Text>
				<Text style={styles.email}>johndoe@example.com</Text>
			</LinearGradient>

			{/* Navigation Links */}
			<View {...props} style={styles.drawerContent}>
				<View style={styles.drawerSection}>
					{/* User Profile */}
					<DrawerItem icon={({ color, size }) => <FontAwesome name="user" color="#ffffff" size={size} />} labelStyle={styles.label} label="User Profile" onPress={handleUserProfilePress} />

					{/* Messages/Chat */}
					<DrawerItem icon={({ color, size }) => <FontAwesome name="comment" color="#ffffff" size={size} />} labelStyle={styles.label} label="Messages" onPress={handleMessagesPress} />

					{/* History */}
					<DrawerItem icon={({ color, size }) => <FontAwesome name="history" color="#ffffff" size={size} />} labelStyle={styles.label} label="History" onPress={handleHistoryPress} />
				</View>
				<Divider />
				<View style={styles.drawerSection}>
					{/* Preferences */}
					<DrawerItem icon={({ color, size }) => <FontAwesome name="cogs" color="#ffffff" size={size} />} labelStyle={styles.label} label="Preferences" onPress={handlePreferencesPress} />

					{/* Settings */}
					<DrawerItem icon={({ color, size }) => <FontAwesome name="gear" color="#ffffff" size={size} />} labelStyle={styles.label} label="Settings" onPress={handleSettingsPress} />

					{/* Credits */}
					<DrawerItem icon={({ color, size }) => <FontAwesome name="credit-card" color="#ffffff" size={size} />} labelStyle={styles.label} label="Credits" onPress={handleCreditsPress} />
				</View>
				<Divider />
				<View style={styles.drawerSection}>
					{/* Logout */}
					<DrawerItem icon={({ color, size }) => <FontAwesome name="sign-out" color="#ffffff" size={size} />} labelStyle={styles.label} label="Logout" onPress={handleLogoutPress} />

					{/* Login */}
					<DrawerItem icon={({ color, size }) => <FontAwesome name="sign-in" color="#ffffff" size={size} />} labelStyle={styles.label} label="Login" onPress={handleLogoutPress} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#240b36",
	},
	userSection: {
		paddingVertical: 20,
		paddingHorizontal: 16,
	},
	profilePic: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
	username: {
		marginTop: 12,
		color: "#ffffff",
		fontSize: 18,
		fontWeight: "bold",
	},
	email: {
		marginTop: 4,
		color: "#ffffff",
		fontSize: 14,
	},
	drawerContent: {
		flex: 1,
		paddingTop: 8,
		paddingHorizontal: 16,
		justifyContent: "space-between",
	},
	label: {
		color: "#ffffff",
		marginLeft: -16,
		fontSize: 16,
	},
});

export default DrawerContent;
