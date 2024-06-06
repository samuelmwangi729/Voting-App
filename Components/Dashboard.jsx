import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sample from './Sample';
import Profile from './Profile';
import MainScreen from './MainScreen';
import { HomeIcon, UsersIcon, CogIcon, BellAlertIcon } from 'react-native-heroicons/outline';
import Setting from './Setting';
import Notification from './Notification';
import Navs from './Navs';
import Users from './Users';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';
const Tab = createBottomTabNavigator();

const Dashboard = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator initialRouteName="mainscreen"
          screenOptions={{
            tabBarActiveTintColor: 'deeppink',
            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' }
          }}>

          <Tab.Screen name="mainscreen" component={MainScreen} options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <HomeIcon name="Home" style={{ color: 'black' }} />
            ),
          }} />
          <Tab.Screen name="Notification" component={Notification} options={{
            headerShown: false,
            tabBarLabel: 'Updates',
            tabBarIcon: () => (
              <BellAlertIcon name="bell" style={{ color: 'black' }} />
            ),
            tabBarBadge: 3,
          }} />
          <Tab.Screen name="settings" component={Setting} options={{
            headerShown: false,
            tabBarLabel: 'Settings',
            tabBarIcon: () => (
              <CogIcon name="bell" style={{ color: 'black' }} />
            ),
          }} />
          <Tab.Screen name="Profile" component={Users} options={{
            headerShown: false,
            tabBarLabel: 'Users',
            tabBarIcon: () => (
              <UsersIcon name="bell" style={{ color: 'black' }} />
            ),
          }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Dashboard