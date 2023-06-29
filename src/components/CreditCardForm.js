import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import InteractiveCard from "./InteractiveCard";

const CreditCardForm = () => {
	const [cardNumber, setCardNumber] = useState("");
	const [cardHolderName, setCardHolderName] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [cvv, setCvv] = useState("");
	const [isCvvFocused, setIsCvvFocused] = useState(false);

	const handleCardNumberChange = (value) => {
		setCardNumber(value);
	};

	const handleCardHolderNameChange = (value) => {
		setCardHolderName(value);
	};

	const handleExpiryDateChange = (value) => {
		setExpiryDate(value);
	};

	const handleCvvChange = (value) => {
		setCvv(value);
	};

	const handleCvvFocus = () => {
		setIsCvvFocused(true);
	};

	const handleCvvBlur = () => {
		setIsCvvFocused(false);
	};

	const handleSubmit = () => {
		// Handle form submission
	};

	return (
		<View style={styles.container}>
			{/* Card Details */}
			<InteractiveCard isCvvFocused={isCvvFocused} />

			{/* Form */}
			<View style={styles.formContainer}>
				<TextInput style={styles.input} placeholder="Card Number" value={cardNumber} onChangeText={handleCardNumberChange} />
				<TextInput style={styles.input} placeholder="Cardholder Name" value={cardHolderName} onChangeText={handleCardHolderNameChange} />
				<TextInput style={styles.input} placeholder="Expiry Date" value={expiryDate} onChangeText={handleExpiryDateChange} />
				<TextInput style={styles.input} placeholder="CVV" value={cvv} onChangeText={handleCvvChange} onFocus={handleCvvFocus} onBlur={handleCvvBlur} />

				{/* <Button mode="elevated" onPress={handleSubmit} style={styles.submitButton} labelStyle={styles.submitButtonLabel}>
					Submit
				</Button> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 16,
		// justifyContent: "center",
		// alignItems: "center",
	},

	formContainer: {
		width: "100%",
		marginTop: 16,
		// justifyContent: "center",
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 4,
		marginBottom: 12,
		paddingHorizontal: 8,
	},
	submitButton: {
		// marginTop: 16,
		// backgroundColor: "#007AFF",
		borderRadius: 5,
		// borderColor: "#ccc",
	},
	submitButtonLabel: {
		// color: "white",
	},
});

export default CreditCardForm;
