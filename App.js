import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import DrawerContainer from "./src/components/DrawerContainer";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();

export default function App() {
	return (
		// <StoreProvider store={store}>
		<PaperProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName="DrawerContainer"
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen name="DrawerContainer" component={DrawerContainer} />
						<Stack.Screen name="StartScreen" component={StartScreen} />
						<Stack.Screen name="LoginScreen" component={LoginScreen} />
						<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
						<Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</PaperProvider>
		// </StoreProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
