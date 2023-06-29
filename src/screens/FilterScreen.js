import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, Chip, Divider, IconButton, Modal, Portal, Text } from "react-native-paper";
import { Slider } from "@miblanchard/react-native-slider";
import { theme } from "../core/theme";
import RatingSelector from "../components/RatingSelector";

export default function FilterScreen({ closeModal, isModalVisible }) {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedColors, setSelectedColors] = useState([]);
	const [priceRange, setPriceRange] = useState([0, 100]);
	const [selectedMaterials, setSelectedMaterials] = useState([]);
	const [selectedStyles, setSelectedStyles] = useState([]);
	const [selectedRating, setSelectedRating] = useState(0);

	const handleCategorySelect = (category) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
		} else {
			setSelectedCategories([...selectedCategories, category]);
		}
	};

	const handleColorSelect = (color) => {
		if (selectedColors.includes(color)) {
			setSelectedColors(selectedColors.filter((col) => col !== color));
		} else {
			setSelectedColors([...selectedColors, color]);
		}
	};

	const handleMaterialSelect = (material) => {
		if (selectedMaterials.includes(material)) {
			setSelectedMaterials(selectedMaterials.filter((mat) => mat !== material));
		} else {
			setSelectedMaterials([...selectedMaterials, material]);
		}
	};

	const handleStyleSelect = (style) => {
		if (selectedStyles.includes(style)) {
			setSelectedStyles(selectedStyles.filter((st) => st !== style));
		} else {
			setSelectedStyles([...selectedStyles, style]);
		}
	};

	const handleRatingSelect = (rating) => {
		setSelectedRating(rating);
	};

	const handleResetFilters = () => {
		setSelectedCategories([]);
		setSelectedColors([]);
		setPriceRange([0, 100]);
		setSelectedMaterials([]);
		setSelectedStyles([]);
		setSelectedRating(0);
	};

	const handleApplyFilters = () => {
		// Apply filters and close modal
		// Add your logic here
		closeModal();
	};

	return (
		<Portal>
			<Modal visible={isModalVisible} onDismiss={closeModal} contentContainerStyle={styles.modalContainer}>
				<View style={styles.container}>
					<View style={styles.appbar}>
						<IconButton icon="arrow-left" size={24} onPress={closeModal} />
						<Text style={styles.title}>Filters</Text>
						<IconButton icon="refresh" size={24} onPress={handleResetFilters} />
					</View>
					<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
						<Divider />
						<View style={[styles.section, styles.secondaryBackground]}>
							<Text style={styles.sectionTitle}>Category</Text>
							<View style={styles.chipContainer}>
								<Chip selected={selectedCategories.length === 0} onPress={() => handleCategorySelect("All")} style={styles.chip}>
									All
								</Chip>
								<Chip selected={selectedCategories.includes("Category 1")} onPress={() => handleCategorySelect("Category 1")} style={styles.chip}>
									Category 1
								</Chip>
								<Chip selected={selectedCategories.includes("Category 2")} onPress={() => handleCategorySelect("Category 2")} style={styles.chip}>
									Category 2
								</Chip>
							</View>
						</View>
						<Divider />
						<View style={styles.section}>
							<Text style={styles.sectionTitle}>Colors</Text>
							<View style={styles.colorContainer}>
								<View style={[styles.color, { backgroundColor: "red" }]} />
								<View style={[styles.color, { backgroundColor: "blue" }]} />
								<View style={[styles.color, { backgroundColor: "green" }]} />
							</View>
						</View>
						<Divider />
						<View style={[styles.section, styles.secondaryBackground]}>
							<Text style={styles.sectionTitle}>Price Range</Text>
							<Slider value={priceRange} onValueChange={setPriceRange} minimumValue={0} maximumValue={100} step={1} thumbTintColor={theme.colors.primary} minimumTrackTintColor={theme.colors.primary} />
							<View style={styles.sliderLabels}>
								<Text>${priceRange[0]}</Text>
								<Text>${priceRange[1]}</Text>
							</View>
						</View>
						<Divider />
						<View style={styles.section}>
							<Text style={styles.sectionTitle}>Material</Text>
							<View style={styles.chipContainer}>
								<Chip selected={selectedMaterials.includes("Material 1")} onPress={() => handleMaterialSelect("Material 1")} style={styles.chip}>
									Material 1
								</Chip>
								<Chip selected={selectedMaterials.includes("Material 2")} onPress={() => handleMaterialSelect("Material 2")} style={styles.chip}>
									Material 2
								</Chip>
							</View>
						</View>
						<Divider />
						<View style={[styles.section, styles.secondaryBackground]}>
							<Text style={styles.sectionTitle}>Style</Text>
							<View style={styles.chipContainer}>
								<Chip selected={selectedStyles.includes("Style 1")} onPress={() => handleStyleSelect("Style 1")} style={styles.chip}>
									Style 1
								</Chip>
								<Chip selected={selectedStyles.includes("Style 2")} onPress={() => handleStyleSelect("Style 2")} style={styles.chip}>
									Style 2
								</Chip>
							</View>
						</View>
						<Divider />
						<View style={styles.section}>
							<Text style={styles.sectionTitle}>Minimum rating</Text>
							<RatingSelector onSelectRating={handleRatingSelect} rating={selectedRating} />
						</View>
						<View style={styles.bottomSection}>
							<Button mode="contained" onPress={handleApplyFilters} style={styles.showResult}>
								Show Results
							</Button>
						</View>
					</ScrollView>
				</View>
			</Modal>
		</Portal>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},
	appbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 16,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	contentContainer: {
		// paddingHorizontal: 16,
	},
	section: {
		// marginBottom: 16,
		flex: 1,
		padding: 16,
	},
	secondaryBackground: {
		backgroundColor: theme.colors.secondary,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 8,
	},
	chipContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	chip: {
		marginRight: 8,
		marginBottom: 8,
		// backgroundColor: theme.colors.secondary,
		borderRadius: 5,
	},
	colorContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 8,
	},
	color: {
		width: 20,
		height: 20,
		marginRight: 8,
		marginBottom: 8,
		borderRadius: 20,
	},
	slider: {
		marginTop: 8,
	},
	sliderLabels: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	bottomSection: {
		alignItems: "center",
		// marginTop: 16,
	},
	showResult: {
		borderRadius: 5,
		marginVertical: 8,
	},
});
