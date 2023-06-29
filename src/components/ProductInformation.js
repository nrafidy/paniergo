import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../core/theme";

const ProductInformation = ({ data }) => {
	return (
		<View style={styles.tableContainer}>
			{data.map((row, index) => (
				<View key={index} style={[styles.tableRow, index % 2 === 0 ? styles.stripedRow : null]}>
					<View style={styles.labelContainer}>
						<Text style={styles.label}>{row.label}</Text>
					</View>
					<View style={styles.valueContainer}>
						<Text style={styles.value}>{row.value}</Text>
					</View>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	tableContainer: {
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		overflow: "hidden",
		backgroundColor: "#fff",
	},
	tableRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	stripedRow: {
		backgroundColor: theme.colors.secondary,
	},
	labelContainer: {
		flex: 1,
		justifyContent: "flex-start",
	},
	valueContainer: {
		flex: 2,
		justifyContent: "flex-start",
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
		paddingBottom: 4,
	},
	value: {
		fontSize: 14,
		textAlign: "justify",
	},
});

export default ProductInformation;
