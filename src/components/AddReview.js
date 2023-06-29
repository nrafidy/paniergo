import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import RatingSelector from "./RatingSelector";
import { Button } from "react-native-paper";

const AddReview = ({ onAddReview, onCancel }) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [selectedRating, setSelectedRating] = useState(0);

	const handleTitleChange = (text) => {
		setTitle(text);
	};

	const handleBodyChange = (text) => {
		setBody(text);
	};

	const handleRatingSelect = (rating) => {
		setSelectedRating(rating);
	};

	const handleAddReview = () => {
		if (title.trim() === "" || body.trim() === "") {
			return; // Don't add empty reviews
		}

		const reviewData = {
			title,
			rating: parseFloat(selectedRating),
			body,
		};

		// Pass the review data to the parent component
		onAddReview(reviewData);

		// Clear the input fields
		setTitle("");
		setBody("");
	};

	const handleCancel = () => {
		onCancel();
	};

	return (
		<View style={styles.container}>
			<RatingSelector onSelectRating={handleRatingSelect} rating={selectedRating} />
			<TextInput style={styles.input} placeholder="Review Title" value={title} onChangeText={handleTitleChange} />
			<TextInput style={styles.input} placeholder="Review Body" value={body} onChangeText={handleBodyChange} multiline />
			<View style={styles.btnContainer}>
				<Button mode="outlined" onPress={handleCancel} style={styles.btn}>
					Cancel
				</Button>
				<Button mode="contained" onPress={handleAddReview} style={styles.btn}>
					Submit
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 4,
		marginTop: 12,
		paddingHorizontal: 8,
	},
	btnContainer: {
		flexDirection: "row",
		marginTop: 12,
		justifyContent: "space-between",
	},
	btn: {
		width: "48%",
		borderRadius: 5,
	},
});

export default AddReview;
