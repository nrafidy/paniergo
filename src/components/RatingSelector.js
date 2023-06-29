import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RatingSelector = ({ onSelectRating, rating }) => {
	const handleStarPress = (selectedRating) => {
		onSelectRating(selectedRating);
	};

	return (
		<View style={styles.container}>
			{[1, 2, 3, 4, 5].map((value) => (
				<TouchableOpacity key={value} onPress={() => handleStarPress(value)} activeOpacity={0.7}>
					<Ionicons name={rating >= value ? "star" : "star-outline"} size={16} color={rating >= value ? "gold" : "gray"} />
				</TouchableOpacity>
			))}
			<Text style={styles.ratingText}>{rating} stars</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	ratingText: {
		marginLeft: 8,
		// fontWeight: "bold",
		fontSize: 14,
	},
});

export default RatingSelector;
