import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ProductCardMin from "./ProductCardMin";

const FeaturedProducts = () => {
	const products = [
		{
			id: 1,
			image: require("../assets/img/1.png"),
			price: 29.99,
			title: "Lorem ipsum",
		},
		{
			id: 2,
			image: require("../assets/img/2.png"),
			price: 39.99,
			title: "Lorem ipsum",
		},
		{
			id: 3,
			image: require("../assets/img/3.png"),
			price: 49.99,
			title: "Lorem ipsum",
		},
		// Add more product objects as needed
	];

	const handleViewAll = () => {
		// Handle "View All" press here
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Featured Products</Text>
				<TouchableOpacity onPress={handleViewAll}>
					<Text style={styles.viewAllLink}>View All</Text>
				</TouchableOpacity>
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productContainer}>
				{products.map((product) => (
					<ProductCardMin key={product.id} product={product} />
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	viewAllLink: {
		fontSize: 12,
	},
	productContainer: {
		flexDirection: "row",
	},
});

export default FeaturedProducts;
