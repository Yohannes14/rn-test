
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import UserListScreen from '../screens/UserListScreen';

const Stack = createNativeStackNavigator();


export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="UserList" component={UserListScreen} options={{ title: "User List" }} />
        </Stack.Navigator>
    )
}