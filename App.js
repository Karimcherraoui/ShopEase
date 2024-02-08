
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/components/Navigation/Stack";
import store from "./src/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Landing" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
