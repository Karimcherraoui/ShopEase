
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cours from "../../screens/Cours";
import Drawer from "./Drawer";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = () => {
  const Stack = createNativeStackNavigator();
  const navigator = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#1E90FF",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <FontAwesome
            name="shopping-cart"
            size={24}
            color="white"
            style={{ marginRight: 20 }}
            onPress={() => navigator.navigate("Panier")}

          />
        ),
      }}
    >
      <Stack.Screen
        name="Catalogue"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen  name="Cours" component={Cours} />
    </Stack.Navigator>
  );
};

export default Stack;
