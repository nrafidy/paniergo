import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import Rating from "./Rating";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const padding = 19; //due to card shadow 16 + 3
const cardWidth = width - 2 * padding;

export default function Review({ userName, rating, reviewDate, reviewText }) {
	return (
		<Card style={styles.reviewCard}>
			<Card.Content>
				<Title>{userName}</Title>
				<Rating rating={rating} />
				<Paragraph style={styles.date}>{reviewDate}</Paragraph>
				<Paragraph>{reviewText}</Paragraph>
			</Card.Content>
		</Card>
	);
}

const styles = StyleSheet.create({
	reviewCard: {
		width: cardWidth,
		marginRight: 16,
		marginBottom: 5,
		borderRadius: 5,
		backgroundColor: "#fff",
	},
	date: {
		fontStyle: "italic",
	},
});
