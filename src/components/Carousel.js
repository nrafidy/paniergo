import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { theme } from "../core/theme";

const carouselData = [
	{
		id: 1,
		title: "Special Offer 1",
		description: "Get 50% off on selected items",
		image: require("../assets/img/1.png"),
	},
	{
		id: 2,
		title: "Special Offer 2",
		description: "Limited-time offer: Buy 1, Get 1 Free",
		image: require("../assets/img/2.png"),
	},
	{
		id: 3,
		title: "Special Offer 3",
		description: "Big Sale: Up to 70% off",
		image: require("../assets/img/3.png"),
	},
];

const styles = StyleSheet.create({
	container: {
		paddingBottom: 10,
		backgroundColor: "#fff",
	},
	scrollViewContainer: {
		marginVertical: 10,
	},
	carouselItem: {
		backgroundColor: theme.colors.primary,
		borderRadius: 8,
		marginHorizontal: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
		color: "#fff",
	},
	description: {
		fontSize: 16,
		color: "#fff",
		marginTop: 10,
		marginBottom: 5,
	},
	image: {
		width: 300,
		height: 150,
		resizeMode: "cover",
		borderRadius: 8,
	},
	dotsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	dot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: theme.colors.secondary,
		marginHorizontal: 4,
	},
	activeDot: {
		backgroundColor: theme.colors.primary,
	},
	arrowContainer: {
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colors.secondary,
	},
	arrowWrapper: {
		position: "absolute",
		bot: 0,
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
		width: "100%",
		height: "100%",
		paddingHorizontal: 16,
	},
});

export default function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const scrollViewRef = useRef();
	const [scrollViewWidth, setScrollViewWidth] = useState(Dimensions.get("window").width);

	useEffect(() => {
		const handleResize = () => {
			setScrollViewWidth(Dimensions.get("window").width);
		};
		Dimensions.addEventListener("change", handleResize);
	}, []);

	const handleDotPress = (index) => {
		setActiveIndex(index);
		if (scrollViewRef.current) {
			scrollViewRef.current.scrollTo({ x: index * scrollViewWidth, animated: true });
		}
	};

	const handlePrevPress = () => {
		if (scrollViewRef.current) {
			const newIndex = Math.max(activeIndex - 1, 0);
			setActiveIndex(newIndex);
			scrollViewRef.current.scrollTo({ x: newIndex * scrollViewWidth, animated: true });
		}
	};

	const handleNextPress = () => {
		if (scrollViewRef.current) {
			const newIndex = Math.min(activeIndex + 1, carouselData.length - 1);
			setActiveIndex(newIndex);
			scrollViewRef.current.scrollTo({ x: newIndex * scrollViewWidth, animated: true });
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView
				ref={scrollViewRef}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.scrollViewContainer}
				pagingEnabled
				onMomentumScrollEnd={(event) => {
					const pageIndex = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
					setActiveIndex(pageIndex);
				}}
			>
				{carouselData.map((item) => (
					<View style={styles.carouselItem} key={item.id}>
						<Text style={styles.title}>{item.title}</Text>
						<Image source={item.image} style={styles.image} />
						<Text style={styles.description}>{item.description}</Text>
					</View>
				))}
			</ScrollView>
			<View style={styles.dotsContainer}>
				{carouselData.map((_, index) => (
					<TouchableOpacity key={index} onPress={() => handleDotPress(index)} style={[styles.dot, activeIndex === index && styles.activeDot]} />
				))}
			</View>
			<View style={styles.arrowWrapper}>
				<View style={styles.arrowContainer}>
					<IconButton icon="chevron-left" size={24} color={theme.colors.primary} onPress={handlePrevPress} />
				</View>
				<View style={styles.arrowContainer}>
					<IconButton icon="chevron-right" size={24} color={theme.colors.primary} onPress={handleNextPress} />
				</View>
			</View>
		</View>
	);
}
