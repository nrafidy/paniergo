import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../core/theme";

export default function Categories() {
	const categoriesData = [
		{ id: 1, name: "Category 1" },
		{ id: 2, name: "Category 2" },
		{ id: 3, name: "Category 3" },
		{ id: 4, name: "Category 4" },
		{ id: 5, name: "Category 5" },
	];

	const handleViewAll = () => {
		// Handle "View All" press here
	};

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.title}>Categories</Text>
				<TouchableOpacity onPress={handleViewAll}>
					<Text style={styles.viewAllLink}>View All</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.categoriesContainer}>
				{categoriesData.map((category) => (
					<View style={styles.categoryTile} key={category.id}>
						<Text style={styles.categoryName}>{category.name}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	viewAllLink: {
		fontSize: 12,
		// fontWeight: "bold",
		// color: "#007AFF",
		// textDecorationLine: "underline",
	},
	categoriesContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		marginLeft: 16,
		marginRight: 8,
		marginBottom: 8,
	},
	categoryTile: {
		backgroundColor: theme.colors.primary,
		borderRadius: 3,
		paddingHorizontal: 12,
		paddingVertical: 6,
		marginTop: 8,
		marginRight: 8,
	},
	categoryName: {
		fontSize: 14,
		color: "#fff",
	},
});
