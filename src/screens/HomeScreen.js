import { StyleSheet, View } from "react-native";
import React from "react";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import { Divider } from "react-native-paper";
import SearchBar from "../components/SearchBar";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
				<SearchBar />
				<Categories />
				<Divider />
				<Carousel />
				<Divider />
				<FeaturedProducts />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flexGrow: 1,
	},
});
