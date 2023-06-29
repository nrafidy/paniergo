import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import { Button } from "react-native-paper";
import FilterScreen from "./FilterScreen";
import ProductCard from "../components/ProductCard";
import SortDropdown from "../components/SortDropdown";
import { ScrollView } from "react-native-gesture-handler";

export default function SearchResultScreen() {
	const [isModalVisible, setModalVisible] = useState(false);

	// Dummy search results data
	const searchResults = [
		// Add your search results data here
		{ title: "Product 1", description: "Product description", rating: 4.5, price: "99.99", deliveryStatus: "In stock", image: require("../assets/img/2.png"), numReviews: 500 },
		{ title: "Product 2", description: "Product description", rating: 4.2, price: "49.99", deliveryStatus: "Out of stock", image: require("../assets/img/2.png"), numReviews: 26 },
		// Add more search results
	];

	const sortOptions = [
		{ label: "Default", value: "Default" },
		{ label: "Price: Low to High", value: "PriceLowToHigh" },
		{ label: "Price: High to Low", value: "PriceHighToLow" },
	];

	const handleFiltersPress = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	const handleBackButton = () => {
		if (isModalVisible) {
			closeModal();
			return true; // Prevent default back button behavior
		}
		return false; // Default back button behavior
	};

	useEffect(() => {
		// Add back button event listener
		BackHandler.addEventListener("hardwareBackPress", handleBackButton);

		// Clean up the event listener on component unmount
		return () => {
			BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
		};
	}, [isModalVisible]);

	return (
		<View style={styles.container}>
			<ScrollView style={styles.content}>
				{/* Search keywords */}
				<Text style={styles.searchKeywords}>Search Keywords</Text>

				{/* Filters and sort by */}
				<View style={styles.filterSortContainer}>
					<Button mode="contained" style={styles.filterButton} onPress={handleFiltersPress}>
						Filters
					</Button>

					<SortDropdown sortOptions={sortOptions} />
				</View>

				{/* Number of results */}
				<Text style={styles.numResults}>
					Showing {searchResults.length} of {searchResults.length} results
				</Text>

				{/* Search results */}
				{searchResults.map((result) => (
					<ProductCard key={result.id} product={result} />
				))}

				{/* Load more */}
				<Button mode="outlined" style={styles.loadMoreButton}>
					Load More
				</Button>
				<FilterScreen closeModal={closeModal} isModalVisible={isModalVisible} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		padding: 16,
	},
	searchKeywords: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 12,
	},
	filterSortContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
	},
	filterButton: {
		marginRight: 8,
		borderRadius: 5,
	},

	numResults: {
		marginBottom: 12,
	},
	resultItem: {
		marginBottom: 16,
	},
	resultRightContainer: {
		alignItems: "flex-end",
		marginRight: 16,
	},
	loadMoreButton: {
		marginTop: 16,
		borderRadius: 5,
	},

	modalContainer: {
		backgroundColor: "white",
		padding: 20,
	},
});
