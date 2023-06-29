import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Menu } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../core/theme";

export default function SortDropdown({ sortOptions }) {
	const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);
	const [sortOption, setSortOption] = useState("Default");

	const openSortDropdown = () => {
		setIsSortDropdownVisible(true);
	};

	const closeSortDropdown = () => {
		setIsSortDropdownVisible(false);
	};

	const handleSortOptionChange = (optionValue) => {
		setSortOption(optionValue);
		setIsSortDropdownVisible(false);
		// Perform sorting logic based on the selected option
		// You can update the search results accordingly
	};

	return (
		<Menu
			visible={isSortDropdownVisible}
			onDismiss={closeSortDropdown}
			anchor={
				<Button mode="outlined" style={styles.sortButton} onPress={openSortDropdown}>
					<Text style={styles.sortButtonText}>Sort By: {sortOption}</Text>
					{/* <FontAwesome name="angle-down" size={20} color={theme.colors.text} /> */}
				</Button>
			}
		>
			{sortOptions.map((option) => (
				<Menu.Item key={option.value} onPress={() => handleSortOptionChange(option.value)} title={option.label} style={styles.sortMenuItem} />
			))}
		</Menu>
	);
}

const styles = StyleSheet.create({
	sortButton: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 5,
	},
	sortButtonText: {
		// marginRight: 5,
		// fontSize: 16,
		color: theme.colors.text,
	},
	sortMenuItem: {
		paddingRight: 16,
	},
});
