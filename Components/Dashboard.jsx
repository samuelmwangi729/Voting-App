import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sample from './Sample';
import Profile from './Profile';
import MainScreen from './MainScreen';
import { Bars4Icon, HomeIcon ,UserCircleIcon,CogIcon,ArrowUpRightIcon,BellAlertIcon} from 'react-native-heroicons/outline';
import Setting from './Setting';
import Notification from './Notification';
import Navs from './Navs';
const Tab = createBottomTabNavigator();

const  Dashboard = ({navigation}) => {
  return (
    <Tab.Navigator initialRouteName="mainscreen"
      screenOptions={{
        tabBarActiveTintColor: 'deeppink',
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
      <Tab.Screen name="Profile" component={Navs} options={{
        headerShown: false,
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
          <UserCircleIcon name="bell" style={{ color: 'black' }} />
        ),
      }} />
      <Tab.Screen name="logout" component={""} options={{
        headerShown: false,
        tabBarLabel: 'logout',
        tabBarIcon: () => (
          <ArrowUpRightIcon name="bell" style={{ color: 'black' }} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default Dashboard