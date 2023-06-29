import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button, Card, Divider, IconButton } from "react-native-paper";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProductCard({ product }) {
	const navigation = useNavigation();
	const handleSeeProductDetails = () => {
		navigation.navigate("ProductDetailsScreen");
	};

	return (
		<Card style={styles.productCard}>
			<View style={styles.cardContent}>
				{/* Image */}
				<Image source={product.image} style={styles.image} />

				{/* Product Details */}
				<View style={styles.productDetails}>
					<Text style={styles.title}>
						{product.qty ? product.qty + "x " : ""}
						{product.title}
					</Text>
					<Text numberOfLines={1} ellipsizeMode="tail" style={styles.description}>
						{product.description}
					</Text>
					<View style={styles.additionalInfo}>
						{/* Ratings */}
						{/* Add your ratings component here */}
						<Rating rating={product.rating} numReviews={product.numReviews} />
						{/* Delivery status */}
						<Text style={styles.deliveryStatus}>{product.deliveryStatus}</Text>
						{/* Price */}

						<View style={styles.cardFooter}>
							<Text style={styles.price}>${product.qty ? product.qty * product.price : product.price}</Text>
							<View style={styles.iconContainer}>
								<IconButton icon="heart" size={18} style={styles.icon} />
								{/* <IconButton icon="cart" size={18} style={styles.icon} /> */}
								<MaterialCommunityIcons name="cart-arrow-down" size={18} style={styles.icon} />
							</View>
						</View>
					</View>
				</View>
			</View>
			<Divider style={styles.divider} />
			<Button onPress={handleSeeProductDetails} style={styles.seeProductDetails}>
				See product details
			</Button>
		</Card>
	);
}

const styles = StyleSheet.create({
	productCard: {
		marginBottom: 8,
		padding: 8,
		borderRadius: 5,
		backgroundColor: "#fff",
	},
	cardContent: {
		flexDirection: "row",
	},
	image: {
		width: 100,
		height: 100,
		marginRight: 12,
		resizeMode: "cover",
	},
	productDetails: {
		flex: 1,
		marginLeft: 8,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 4,
	},
	price: {
		fontWeight: "bold",
		marginVertical: 5,
	},
	cardFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	iconContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		margin: 0,
	},
	divider: {
		marginTop: 8,
	},
	seeProductDetails: {
		borderRadius: 5,
	},
});
