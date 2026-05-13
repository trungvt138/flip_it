import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateSet from '../screens/CreateSet';
import Homepage from '../screens/Homepage';
import Practice from '../screens/Practice';
import Library from '../screens/Library';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name = "Home" component={Homepage}></Stack.Screen>
                <Stack.Screen name = "Create" component={CreateSet}></Stack.Screen>
                <Stack.Screen name = "Practice" component={Practice}></Stack.Screen>
                <Stack.Screen name = "Library" component={Library}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}