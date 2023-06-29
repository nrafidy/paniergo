import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, RadioButton } from "react-native-paper";

const deliveryOptions = [
	{
		id: 1,
		name: "Standard Delivery",
		price: "$9.99",
		shippingDelay: "3-5 business days",
	},
	{
		id: 2,
		name: "Express Delivery",
		price: "$19.99",
		shippingDelay: "1-2 business days",
	},
	// Add more delivery options as needed
];

const DeliverySelectionScreen = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const navigation = useNavigation();

	const handleOptionSelect = (optionId) => {
		setSelectedOption(optionId);
	};

	const handleValidate = () => {
		// Perform any necessary action with the selected option
		if (selectedOption) {
			console.log("Selected Option:", selectedOption);
		} else {
			console.log("No option selected");
		}
		navigation.push("CartScreen");
	};

	return (
		<View style={styles.container}>
			{deliveryOptions.map((option) => (
				<Card key={option.id} style={styles.card}>
					<Card.Content style={styles.cardContent}>
						<View style={styles.infoContainer}>
							<Title>{option.name}</Title>
							<Paragraph>{option.price}</Paragraph>
							<Paragraph>Shipping Delay: {option.shippingDelay}</Paragraph>
						</View>
						<View style={styles.radioButtonContainer}>
							<RadioButton value={option.id} status={selectedOption === option.id ? "checked" : "unchecked"} onPress={() => handleOptionSelect(option.id)} />
						</View>
					</Card.Content>
				</Card>
			))}
			<Button mode="contained" onPress={handleValidate} disabled={!selectedOption} style={styles.validateButton}>
				Confirm
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	card: {
		marginBottom: 16,
		backgroundColor: "#fff",
	},
	cardContent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	infoContainer: {
		flex: 1,
		marginRight: 16,
	},
	radioButtonContainer: {},
	validateButton: {
		// marginTop: 16,
		borderRadius: 5,
	},
});

export default DeliverySelectionScreen;
