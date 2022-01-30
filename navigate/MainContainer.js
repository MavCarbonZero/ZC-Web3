import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/WalletScreen";
import SettingsScreen from "./screens/RewardsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CameraScreen from "./screens/CameraScreen";

//Screen names
const homeName = "Home";
const walletName = "Wallet";
const rewardsName = "Rewards";
const profileName = "Profile";
const cameraName = "Camera";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === walletName) {
              iconName = focused ? "wallet" : "wallet-outline";
            } else if (rn === rewardsName) {
              iconName = focused ? "trophy" : "trophy-outline";
            } else if (rn === profileName) {
              iconName = focused ? "person" : "person-outline";
            } else if (rn === cameraName) {
              iconName = focused ? "camera" : "camera-outline";
            }
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#00C1B6",
          inactiveTintColor: "#C2C2C2",
          labelStyle: { paddingBottom: 10, fontSize: 12 },
          style: { padding: 10, height: 90 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={walletName} component={DetailsScreen} />
        <Tab.Screen name={cameraName} component={CameraScreen} />
        <Tab.Screen name={rewardsName} component={SettingsScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
