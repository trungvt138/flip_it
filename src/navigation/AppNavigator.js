import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CreateSet from "../screens/CreateSet";
import Homepage from "../screens/Homepage";
import Practice from "../screens/Practice";
import Library from "../screens/Library";
import SessionComplete from "../screens/SessionComplete";
import { LearningBoxesProvider } from '../hooks/useLearningBoxes';
import { AppSettingsProvider } from '../hooks/useSettings';
import { GoalProvider } from '../hooks/useGoal';
import EditSet from "../screens/EditSet";
import User from "../screens/User";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Real tab state (each tab keeps its own mounted state when you switch away
// and back) instead of faking tabs on top of a flat stack. The visible tab
// bar is still the app's own <Navbar /> rendered inside each screen, so the
// built-in tab bar chrome is turned off here.
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Create" component={CreateSet} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <AppSettingsProvider>
    <GoalProvider>
    <LearningBoxesProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={MainTabs}></Stack.Screen>
        <Stack.Screen name="Practice" component={Practice}></Stack.Screen>
        <Stack.Screen name="SessionComplete" component={SessionComplete}></Stack.Screen>
        <Stack.Screen name="EditSet" component={EditSet}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </LearningBoxesProvider>
    </GoalProvider>
    </AppSettingsProvider>
  );
}
