import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import DeliverySelectionScreen from "../screens/DeliverySelectionScreen";
import PaymentMethodSelectionScreen from "../screens/PaymentMethodSelectionScreen";

const Stack = createStackNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="SearchResultScreen" component={SearchResultScreen} />
			<Stack.Screen name="CartScreen" component={CartScreen} />
			<Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
			<Stack.Screen name="DeliverySelectionScreen" component={DeliverySelectionScreen} />
			<Stack.Screen name="PaymentMethodSelectionScreen" component={PaymentMethodSelectionScreen} />
		</Stack.Navigator>
	);
};

export default MainStack;
