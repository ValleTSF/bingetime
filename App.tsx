import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EpisodeDetailsScreen from "./screens/EpisodeDetailsScreen";
import { Episode } from "./types";

export enum ScreenRoutes {
  HOME_SCREEN = "screen/HomeScreen",
  EPISODE_DETAILS_SCREEN = "screen/EpisodeDetailsScreen",
}

export type RootStackParamList = {
  [ScreenRoutes.HOME_SCREEN]: undefined;
  [ScreenRoutes.EPISODE_DETAILS_SCREEN]: { episode: Episode };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenRoutes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={ScreenRoutes.EPISODE_DETAILS_SCREEN}
          component={EpisodeDetailsScreen}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
