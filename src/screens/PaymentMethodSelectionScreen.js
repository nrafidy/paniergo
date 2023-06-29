import React, { useState } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { Button, IconButton, Text } from "react-native-paper";
import { theme } from "../core/theme";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import CreditCardForm from "../components/CreditCardForm";
import { useNavigation } from "@react-navigation/native";

const PaymentMethodSelectionScreen = () => {
	const navigation = useNavigation();
	const [selectedMethod, setSelectedMethod] = useState("Carte bancaire");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleMethodSelect = (method) => {
		setSelectedMethod(method);
	};

	const handlePhoneNumberChange = (value) => {
		setPhoneNumber(value);
	};

	const handleConfirm = () => {
		// Perform validation and other actions
		console.log("Selected Method:", selectedMethod);
		console.log("Phone Number:", phoneNumber);
		navigation.push("CartScreen");
	};

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Select payment method</Text>

				<View style={styles.methodContainer}>
					<TouchableOpacity onPress={() => handleMethodSelect("Carte bancaire")} style={[styles.methodButton, selectedMethod === "Carte bancaire" && styles.selectedMethod]}>
						<FontAwesome name="credit-card" size={40} color={selectedMethod === "Carte bancaire" ? "white" : theme.colors.primary} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleMethodSelect("Mvola")} style={[styles.methodButton, selectedMethod === "Mvola" && styles.selectedMethod]}>
						<Image
							source={selectedMethod === "Mvola" ? require("../assets/img/mvola-white.png") : require("../assets/img/mvola-primary.png")} // Replace with the path to your Mvola logo image
							style={styles.methodIcon}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleMethodSelect("Orange money")} style={[styles.methodButton, selectedMethod === "Orange money" && styles.selectedMethod]}>
						<Image
							source={selectedMethod === "Orange money" ? require("../assets/img/orange-white.png") : require("../assets/img/orange-primary.png")} // Replace with the path to your Mvola logo image
							style={styles.methodIcon}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleMethodSelect("Airtel money")} style={[styles.methodButton, selectedMethod === "Airtel money" && styles.selectedMethod]}>
						<Image
							source={selectedMethod === "Airtel money" ? require("../assets/img/airtel-white.png") : require("../assets/img/airtel-primary.png")} // Replace with the path to your Mvola logo image
							style={styles.methodIcon}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.conditionalContainer}>
					<Text style={styles.selectedMethodText}>{selectedMethod}</Text>
					{selectedMethod === "Carte bancaire" && (
						<View style={styles.cardFormContainer}>
							<CreditCardForm />
						</View>
					)}

					{selectedMethod !== "Carte bancaire" && (
						<View style={styles.mobileFormContainer}>
							<TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={handlePhoneNumberChange} style={styles.phoneNumberInput} />
						</View>
					)}
				</View>

				<Button mode="contained" onPress={handleConfirm} style={styles.confirmButton}>
					Confirm
				</Button>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		// justifyContent: "center",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	methodContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 16,
	},
	methodButton: {
		width: 70,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	methodIconImage: {
		width: 40,
		height: 40,
	},
	selectedMethod: {
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
		padding: 5,
	},
	conditionalContainer: {
		backgroundColor: "#fff",
		padding: 16,
		borderRadius: 5,
	},
	selectedMethodText: {
		textAlign: "center",
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 16,
		// color: theme.colors.primary,
	},
	cardFormContainer: {
		// marginBottom: 16,
		// Customize card form styling
	},
	mobileFormContainer: {
		// marginVertical: 16,
		// Customize mobile form styling
	},
	phoneNumberInput: {
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 4,
		marginBottom: 12,
		paddingHorizontal: 8,
	},
	confirmButton: {
		// alignSelf: "center",
		borderRadius: 5,
		marginTop: 16,
	},
});

export default PaymentMethodSelectionScreen;
