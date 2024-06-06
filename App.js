import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './Components/LandingScreen';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';


const App = () => {
  const Screens = createStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Screens.Navigator initialRouteName='landingScreen'>
          <Screens.Screen name="landingScreen" component={LandingScreen} options={{ headerShown: false }} />
          <Screens.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Screens.Screen name="dashboard" component={Dashboard} options={{headerShown:false}} />
          <Screens.Screen name="register" component={Register} options={{headerShown:false}} />
        </Screens.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default App