import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Card, IconButton } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProductCardMin({ product }) {
	const navigation = useNavigation();
	const [isPressed, setIsPressed] = useState(false);

	const handleSeeProductDetails = () => {
		navigation.navigate("ProductDetailsScreen");
	};

	const handlePressIn = () => {
		setIsPressed(true);
	};

	const handlePressOut = () => {
		setIsPressed(false);
	};

	const containerScale = isPressed ? 1.05 : 1;
	return (
		<TouchableOpacity onPress={handleSeeProductDetails} activeOpacity={1} onPressIn={handlePressIn} onPressOut={handlePressOut} style={[styles.container, { transform: [{ scale: containerScale }] }]}>
			<Card style={styles.productCard}>
				<View style={styles.imageContainer}>
					<Image source={product.image} style={styles.productImage} />
				</View>
				<View style={styles.cardFooter}>
					<Text style={styles.productTitle}>{product.title}</Text>
					<Text style={styles.productPrice}>$ {product.price}</Text>
					<View style={styles.iconContainer}>
						<IconButton icon="heart" size={18} style={styles.icon} />
						{/* <IconButton icon="cart" size={18} style={styles.icon} /> */}
						<MaterialCommunityIcons name="cart-arrow-down" size={18} style={styles.icon} />
					</View>
				</View>
			</Card>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	productCard: {
		width: 200,
		marginBottom: 16,
		borderRadius: 5,
		marginRight: 16,
		backgroundColor: "#fff",
		// overflow: "hidden",
	},
	imageContainer: {
		margin: 8,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	productImage: {
		width: "100%",
		height: 100,
		resizeMode: "cover",
	},
	cardFooter: {
		paddingHorizontal: 8,
		// marginVertical: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flexWrap: "wrap",
	},
	productTitle: {
		width: "100%",
		fontWeight: "bold",
	},
	productPrice: {
		// fontSize: 16,
		// fontWeight: "bold",
	},
	iconContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		margin: 0,
	},
});
