import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Rating = ({ rating, numReviews }) => {
	const renderStars = () => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating - fullStars >= 0.5;

		// Render full stars
		for (let i = 0; i < fullStars; i++) {
			stars.push(<Ionicons key={`star-${i}`} name="star" size={14} color="gold" />);
		}

		// Render half star if available
		if (hasHalfStar) {
			stars.push(<Ionicons key="half-star" name="star-half" size={14} color="gold" />);
		}

		// Render empty stars
		const emptyStars = 5 - stars.length;
		for (let i = 0; i < emptyStars; i++) {
			stars.push(<Ionicons key={`empty-star-${i}`} name="star-outline" size={14} color="gold" />);
		}

		return stars;
	};

	return (
		<View style={styles.container}>
			<View style={styles.ratingStars}>{renderStars()}</View>
			<Text style={styles.ratingText}>
				{rating} {numReviews && <>({numReviews})</>}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	ratingStars: {
		flexDirection: "row",
	},
	ratingText: {
		marginLeft: 4,
		fontSize: 14,
		color: "gray",
	},
});

export default Rating;
