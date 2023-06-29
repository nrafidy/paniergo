import React, { useLayoutEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProductCardMin from "../components/ProductCardMin";
import { Button, Divider, IconButton } from "react-native-paper";
import Review from "../components/Review";
import ProductInformation from "../components/ProductInformation";
import AddReview from "../components/AddReview";

const ProductDetailsScreen = () => {
	const [quantity, setQuantity] = useState(1);
	const [showAddReview, setShowAddReview] = useState(false);
	const [addToCartContainerHeight, setAddToCartContainerHeight] = useState(0);

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

	const reviews = [
		{
			id: 1,
			userName: "John Doe",
			rating: 4.5,
			reviewDate: "June 10, 2023",
			reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 2,
			userName: "Jane Smith",
			rating: 5,
			reviewDate: "June 12, 2023",
			reviewText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		// Add more review objects as needed
	];

	const productInfo = [
		{ label: "Brand", value: "Nike" },
		{ label: "Color", value: "Black" },
		{ label: "Size", value: "Medium" },
		{ label: "Description", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ex eu diam rhoncus dapibus. Vivamus mollis urna eget lorem lobortis, vitae vestibulum velit tincidunt. Quisque pellentesque congue est, at lobortis ligula lacinia a. Sed tristique ultrices mi, id congue enim dapibus ut. Nullam vitae convallis risus. Aenean non neque id enim consectetur sagittis eget a felis." },
		{ label: "Weight", value: "200g" },
		{ label: "Dimensions", value: '10" x 8" x 5"' },
		{ label: "Country of Origin", value: "USA" },
		// Add more rows as needed
	];

	const handleQuantityChange = (newQuantity) => {
		setQuantity(newQuantity);
	};

	const handleAddToCart = () => {
		// Logic to add the product to the cart
		console.log("Product added to cart:", quantity);
	};

	const handleAddReview = () => {
		// Show the AddReview component when "Add a review" is clicked
		setShowAddReview(true);
	};

	const handleReviewSubmit = (reviewData) => {
		// Handle the submitted review data here
		console.log("Review submitted:", reviewData);

		// Hide the AddReview component
		setShowAddReview(false);
	};

	const handleCancelReview = () => {
		setShowAddReview(false);
	};

	const product = products[0]; // Assuming you're using the first product in the array
	const totalPrice = quantity * product.price;

	return (
		<View style={styles.container}>
			<ScrollView style={{ marginBottom: addToCartContainerHeight }} showsVerticalScrollIndicator={false}>
				<View style={styles.imageContainer}>
					{/* Product image */}
					<Image source={require("../assets/img/4.png")} style={styles.image} resizeMode="cover" />
				</View>
				<Divider />
				<View style={[styles.detailsContainer]}>
					<View style={[styles.section, styles.whiteBg]}>
						{/* Product title */}
						<Text style={styles.title}>Product Title</Text>
						<Divider style={styles.divider} />
						{/* Product price */}
						<Text style={styles.price}>$99.99</Text>

						{/* Product description */}
						<Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper tortor nec ligula suscipit, id varius quam bibendum. Praesent pellentesque finibus magna, et congue elit bibendum in. Sed ut varius nunc, in malesuada ligula.</Text>

						{/* Quantity selector */}
					</View>
					<Divider />
					{/* Similar products */}
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Similar Products</Text>
						<Divider style={styles.divider} />
						{/* Render similar products */}
						<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.productContainer}>
							{products.map((product) => (
								<ProductCardMin key={product.id} product={product} />
							))}
						</ScrollView>
					</View>
					<Divider />
					{/* Reviews */}
					<View style={[styles.section, styles.whiteBg]}>
						<View style={styles.reviewTitle}>
							<Text style={styles.sectionTitle}>Reviews</Text>
							<Button mode="contained" onPress={handleAddReview} style={styles.addReviewButton}>
								Add a review
							</Button>
						</View>
						{showAddReview && <AddReview onAddReview={handleReviewSubmit} onCancel={handleCancelReview} />}
						<Divider style={styles.divider} />
						{/* Render product reviews */}
						<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.reviewsContainer}>
							{reviews.map((review) => (
								<Review key={review.id} userName={review.userName} rating={review.rating} reviewDate={review.reviewDate} reviewText={review.reviewText} />
							))}
						</ScrollView>
					</View>
					<Divider />
					{/* Product Information */}
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Product Information</Text>
						<Divider style={styles.divider} />
						<ProductInformation data={productInfo} />
					</View>
				</View>
			</ScrollView>
			<View
				style={styles.addToCartContainer}
				onLayout={(event) => {
					const { height } = event.nativeEvent.layout;
					setAddToCartContainerHeight(height);
				}}
			>
				<View style={styles.quantityContainer}>
					<Text style={styles.quantityLabel}>Quantity:</Text>
					<View style={styles.quantityButtons}>
						<IconButton icon="minus" onPress={() => handleQuantityChange(quantity - 1)} disabled={quantity <= 1} mode="contained" contentStyle={styles.opsBtn} />
						<Text style={styles.quantity}>{quantity}</Text>
						<IconButton icon="plus" onPress={() => handleQuantityChange(quantity + 1)} mode="contained" contentStyle={styles.opsBtn} />
					</View>
				</View>
				{/* Total price */}
				<Text style={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</Text>
				{/* Add to Cart button */}
				<Button onPress={handleAddToCart} disabled={quantity <= 0} mode="contained" style={styles.addToCart}>
					Add to cart
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 16,
	},
	content: {},
	imageContainer: {
		alignItems: "center",
		marginBottom: 16,
	},
	image: {
		width: 200,
		height: 200,
	},
	detailsContainer: {
		flex: 1,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
	},
	price: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 16,
	},
	description: {
		fontSize: 14,
		marginBottom: 16,
	},

	section: {
		padding: 16,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 8,
	},
	table: {
		marginTop: 8,
	},
	row: {
		flexDirection: "row",
		marginBottom: 4,
	},
	label: {
		flex: 1,
		fontWeight: "bold",
	},
	value: {
		flex: 1,
	},
	productContainer: {
		flexDirection: "row",
	},
	whiteBg: {
		backgroundColor: "#fff",
	},
	divider: {
		marginBottom: 16,
	},
	opsBtn: {
		// height: 20,
		// width: 20,
		// borderRadius: 5,
	},
	totalPrice: {
		fontSize: 16,
		fontWeight: "bold",
		// marginTop: 8,
		marginVertical: 16,
	},
	addToCart: {
		borderRadius: 5,
	},
	reviewTitle: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 8,
	},
	addReviewButton: {
		borderRadius: 5,
	},
	reviewsContainer: {
		paddingLeft: 3, //due to card shadow
	},
	addToCartContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		paddingVertical: 16,
		paddingHorizontal: 32,
		backgroundColor: "#ffffff",
	},
	quantityContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	quantityLabel: {
		fontSize: 14,
		marginRight: 8,
	},
	quantityButtons: {
		flexDirection: "row",
		alignItems: "center",
	},
	quantity: {
		fontSize: 14,
		marginHorizontal: 8,
		fontWeight: "bold",
	},
});

export default ProductDetailsScreen;
