import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ManageCars from "./ManageCars";
import ManageCarBrands from "./ManageCarBrands";
import colors from "./config/colors";
const Drawer = createDrawerNavigator();
function AppNavigator(props) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
      }}
    >
      <Drawer.Screen
        name="ManageCars"
        component={ManageCars}
        options={{ title: "Manage Cars" }}
      />
      <Drawer.Screen
        name="ManageCarBrands"
        component={ManageCarBrands}
        options={{ title: "Manage Car Brands" }}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
