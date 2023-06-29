import { StyleSheet } from "react-native";
import React from "react";
import DrawerContent from "./DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Appbar from "./Appbar";
import MainStack from "./MainStack";

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <DrawerContent {...props} />}
			screenOptions={{
				header: (props) => <Appbar {...props} />,
			}}
		>
			<Drawer.Screen name="MainStack" component={MainStack} />
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({});
