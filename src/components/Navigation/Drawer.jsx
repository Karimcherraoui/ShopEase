
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import MesAchats from "../../screens/MesAchats";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Panier from "../../screens/Panier";
import Catalogue from "../../screens/Catalogue";

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  const navigator = useNavigation();

  return (
    <Drawer.Navigator
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
      <Drawer.Screen
        name="Home"
        component={Catalogue}
        options={{
          title: "Catalogue",

          drawerIcon: () => (
            <MaterialIcons name="library-books" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Panier"
        component={Panier}
        options={{
          title: "Panier",
          drawerIcon: () => (
            <FontAwesome name="shopping-cart" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Achats"
        component={MesAchats}
        options={{
          title: "Mes Achats",
          drawerIcon: () => (
            <FontAwesome name="credit-card" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer;
