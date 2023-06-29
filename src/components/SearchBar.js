import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { theme } from "../core/theme";
import { useNavigation } from "@react-navigation/native";

export default function SearchBar() {
	const navigation = useNavigation();

	const handleSearch = () => {
		navigation.navigate("SearchResultScreen");
	};
	return (
		<View style={styles.searchContainer}>
			<Searchbar placeholder="Search for products near you" iconColor="#555555" onChangeText={handleSearch} style={styles.searchbar} />
		</View>
	);
}

const styles = StyleSheet.create({
	searchContainer: {
		paddingHorizontal: 16,
		backgroundColor: "#fff",
	},
	searchbar: {
		borderRadius: 5,
		backgroundColor: "#ffffff",
		borderColor: theme.colors.text,
		borderWidth: 1,
		marginVertical: 16,
	},
});
