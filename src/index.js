import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Pages
import Home from './pages/home';
import Repositories from './pages/repositories';
import Favorites from './pages/favorites';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
	return (
		<Tab.Navigator screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;

				if (route.name === 'Home') {
					iconName = 'search'
				} else if (route.name === 'Settings') {
					iconName = 'heart';
				}

				// You can return any component that you like here!
				return <Icon name={iconName} size={size} color={color} />;
			},
		})}

			tabBarOptions={{
				showLabel: false,
				activeTintColor: "#000",
				inactiveTintColor: "#CFCFD6",
				style: { backgroundColor: '#F5F5F5' }
			}}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Settings" component={Favorites} />
		</Tab.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Tabs"
				screenOptions={{
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
				}}>
				<Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs} />
				<Stack.Screen options={{ headerShown: false }} name="Repositories" component={Repositories} />
			</Stack.Navigator>
		</NavigationContainer>

	);
}
