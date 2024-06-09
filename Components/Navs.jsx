import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Setting from './Setting';
import Institutions from './Institutions';
import AddInstitution from './Institutions/AddInstitution';
import Users from './Users';
import Categories from './Users/Categories';
import Candidates from './Users/Candidates';
import Posts from './Users/Posts';

const Navs = () => {
  const Screens = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
        <Screens.Navigator initialRouteName='settings'>
          <Screens.Screen name="settings" component={Setting} options={{ headerShown: false }} />
          <Screens.Screen name="institutions" component={Institutions} options={{ headerShown: false }} />
          <Screens.Screen name="addInstitution" component={AddInstitution} options={{ headerShown: true }} />
          <Screens.Screen name="Users" component={Users} options={{ headerShown: false }} />
          <Screens.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
          <Screens.Screen name="Candidates" component={Candidates} options={{ headerShown: true }} />
          <Screens.Screen name="Posts" component={Posts} options={{ headerShown: true }} />
        </Screens.Navigator>
    </NavigationContainer>
  )
}

export default Navs