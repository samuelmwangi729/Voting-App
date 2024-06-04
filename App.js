import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './Components/LandingScreen';
import Login from './Components/Login';


const App = () => {
  const Screens = createStackNavigator();
  return (
    <NavigationContainer>
      <Screens.Navigator initialRouteName='landingScreen'>
        <Screens.Screen name="landingScreen" component={LandingScreen} options={{ headerShown: false }} />
        <Screens.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Screens.Navigator>
    </NavigationContainer>
  )
}

export default App