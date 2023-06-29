import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../core/theme";

const InteractiveCard = ({ isCvvFocused }) => {
	const flipAnimation = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		if (isCvvFocused) {
			Animated.timing(flipAnimation, {
				toValue: 180,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(flipAnimation, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
	}, [isCvvFocused]);

	const frontInterpolate = flipAnimation.interpolate({
		inputRange: [0, 180],
		outputRange: ["0deg", "180deg"],
	});

	const backInterpolate = flipAnimation.interpolate({
		inputRange: [0, 180],
		outputRange: ["180deg", "360deg"],
	});

	const frontAnimatedStyle = {
		transform: [{ rotateY: frontInterpolate }],
	};

	const backAnimatedStyle = {
		transform: [{ rotateY: backInterpolate }],
	};

	return (
		<View style={styles.cardContainer}>
			<Animated.View style={[styles.cardSide, frontAnimatedStyle]}>
				<LinearGradient colors={["#870000", "#243B55"]} style={styles.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
					<View style={styles.cardHeader}>
						<Text style={styles.cardTitle}>Card Details</Text>
						<Text style={styles.cardType}>VISA</Text>
					</View>
					<View style={styles.cardNumberContainer}>
						<Text style={styles.cardNumber}>**** **** **** 1234</Text>
					</View>
					<View style={styles.cardInfoContainer}>
						<View style={styles.cardInfo}>
							<Text style={styles.cardInfoLabel}>Cardholder Name</Text>
							<Text style={styles.cardInfoValue}>John Doe</Text>
						</View>
						<View style={styles.cardInfo}>
							<Text style={styles.cardInfoLabel}>Expiry Date</Text>
							<Text style={styles.cardInfoValue}>09/23</Text>
						</View>
					</View>
				</LinearGradient>
			</Animated.View>
			<Animated.View style={[styles.cardSide, styles.cardBack, backAnimatedStyle]}>
				<LinearGradient colors={["#870000", "#243B55"]} style={styles.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
					<View style={styles.cvvContainer}>
						<View style={styles.cvvSignature}></View>
						<Text style={[styles.cardNumber, styles.cvvValue]}>123</Text>
					</View>
				</LinearGradient>
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		width: "100%",
		height: 200,
		borderRadius: 8,
		overflow: "hidden",
		elevation: 1,
		borderColor: "#fff",
	},
	cardSide: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backfaceVisibility: "hidden",
	},
	cardBack: {
		transform: [{ rotateY: "180deg" }],
	},
	gradient: {
		flex: 1,
		padding: 16,
		justifyContent: "space-between",
	},
	cardHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#fff",
	},
	cardType: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#fff",
	},
	cardNumberContainer: {},
	cardNumber: {
		fontSize: 18,
		fontWeight: "bold",
		letterSpacing: 2,
		textAlign: "center",
		color: "#fff",
	},
	cardInfoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	cardInfo: {},
	cardInfoLabel: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#888",
	},
	cardInfoValue: {
		fontSize: 14,
		color: "#fff",
	},
	cvvContainer: {
		flexDirection: "row",
		alignItems: "center",
		height: "100%",
	},
	cvvSignature: {
		flex: 1,
		backgroundColor: "#fff",
		height: 40,
	},
	cvvValue: {
		marginLeft: 16,
		fontSize: 14,
	},
});

export default InteractiveCard;
