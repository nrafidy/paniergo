import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, IconButton, Divider } from "react-native-paper";
import ProductCard from "../components/ProductCard";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
	const [deliveryMethod, setDeliveryMethod] = useState("standard_delivery");
	const [paymentMethod, setPaymentMethod] = useState("credit_card");
	const [totalValue, setTotalValue] = useState(0);
	const navigation = useNavigation();

	const cartItems = [
		{ title: "Product 1", description: "Product description", rating: 4.5, price: "99.99", deliveryStatus: "In stock", image: require("../assets/img/2.png"), numReviews: 500, qty: 5 },
		{ title: "Product 2", description: "Product description", rating: 4.2, price: "49.99", deliveryStatus: "Out of stock", image: require("../assets/img/2.png"), numReviews: 26, qty: 3 },

		// Add more cart items
	];

	const handleDeliveryMethodPress = () => {
		// Open delivery method selection screen
		navigation.navigate("DeliverySelectionScreen");
	};

	const handlePaymentMethodPress = () => {
		// Open payment method selection screen
		navigation.navigate("PaymentMethodSelectionScreen");
	};

	const handlePayButtonPress = () => {
		// Handle pay button press
	};

	const handleContinueShoppingButtonPress = () => {
		// Handle continue shopping button press
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			{/* <Appbar navigation={navigation} /> */}
			<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
				{/* Title */}
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Checkout</Text>
					<Text style={styles.vendor}>Vendor Name</Text>
				</View>

				<Divider />
				{/* Selected Items */}
				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>Selected Items</Text>
					{cartItems.map((item, index) => (
						<ProductCard key={index} product={item} />
					))}
				</View>
				<Divider />
				{/* Delivery Method */}
				<View style={[styles.sectionContainer, styles.whiteBackground]}>
					<Text style={styles.sectionTitle}>Delivery Method</Text>
					<Divider />
					<TouchableOpacity onPress={handleDeliveryMethodPress}>
						<View style={styles.sectionContent}>
							<Text style={styles.selectedValue}>{deliveryMethod}</Text>
							<IconButton icon="chevron-right" onPress={handleDeliveryMethodPress} />
						</View>
					</TouchableOpacity>
				</View>
				<Divider />
				{/* Payment Details */}
				<View style={[styles.sectionContainer, styles.whiteBackground]}>
					<Text style={styles.sectionTitle}>Payment Details</Text>
					<Divider />
					<TouchableOpacity onPress={handlePaymentMethodPress}>
						<View style={styles.sectionContent}>
							<Text style={styles.selectedValue}>{paymentMethod}</Text>
							<IconButton icon="chevron-right" />
						</View>
					</TouchableOpacity>
				</View>
				<Divider />
				{/* Buttons */}
				<View style={styles.buttonsContainer}>
					<Button mode="contained" onPress={handlePayButtonPress} style={styles.button}>
						Pay ${totalValue} {/* Replace totalValue with the actual total value */}
					</Button>

					<Button onPress={handleContinueShoppingButtonPress} style={styles.button} mode="outlined">
						Continue Shopping
					</Button>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		// flex: 1,
		height: "100%",
		marginBottom: 16,
	},
	titleContainer: {
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	sectionContainer: {
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	whiteBackground: {
		backgroundColor: "white",
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
	},
	sectionContent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	selectedValue: {
		fontSize: 16,
		color: "purple",
	},
	itemCard: {
		marginBottom: 8,
	},

	buttonsContainer: {
		marginHorizontal: 16,
	},
	button: {
		width: "100%",
		borderRadius: 5,
		marginTop: 12,
	},
});

export default CartScreen;
