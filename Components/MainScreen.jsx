
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/authReducer'
import AppBar from './AppBar'
import { InboxArrowDownIcon } from 'react-native-heroicons/outline';
import { HomeIcon, UserCircleIcon, CogIcon, CurrencyDollarIcon, BellAlertIcon } from 'react-native-heroicons/outline';
import ImageBanner from '../assets/banner.png'

const MainScreen = ({ route, navigation }) => {
  const user = useSelector(selectUser)
  return (
    <SafeAreaView>
      <AppBar />
      <View className="flax flex-row justify-center items-center" style={{ marginTop: StatusBar.currentHeight }}>
        <Text className="text-md p-2 font-bold underline text-xl">
          Welcome {user.username}
        </Text>
      </View>
      <View className="flex flex-row justify-between items-center flex-wrap w-full p-2 gap-2">
        <View className="w-[48%] bg-orange-300 flex flex-row p-2" style={{ elevation: 5 }}>
          <UserCircleIcon style={{ color: '#ff6600' }} size={80} />
          <View className="flex">
            <Text className="text-center p-2 text-3xl font-bold">
              Users
            </Text>
            <Text className="text-center p-2 text-2xl font-bold">
              100
            </Text>
          </View>
        </View>
        {/* second box  */}
        <View className="w-[47%] bg-orange-300 flex flex-row p-2" style={{ elevation: 5 }}>
          <InboxArrowDownIcon style={{ color: '#ff6600' }} size={80} />
          <View className="flex justify-start items-start">
            <Text className="text-left p-2 text-2xl font-bold">
              Polls
            </Text>
            <Text className="text-center p-2 text-2xl font-bold">
              100
            </Text>
          </View>
        </View>
        {/* third box  */}

        <View className="w-[48%] bg-orange-300 flex flex-row p-2" style={{ elevation: 5 }}>
          <CogIcon style={{ color: '#ff6600' }} size={80} />
          <View className="flex justify-start items-start">
            <Text className="text-left p-2 text-2xl font-bold">
              Setting
            </Text>
            <Text className="text-center p-2 text-2xl font-bold">
              100
            </Text>
          </View>
        </View>

        <View className="w-[47%] bg-orange-300 flex flex-row p-2" style={{ elevation: 5 }}>
          <CurrencyDollarIcon style={{ color: '#ff6600' }} size={80} />
          <View className="flex justify-start items-start">
            <Text className="text-left p-2 text-xl font-bold">
              Earning
            </Text>
            <Text className="text-center p-2 text-2xl font-bold">
              100
            </Text>
          </View>
        </View>
        {/* fourth box  */}
        <View className="bg-orange-300 flex flex-row p-2 flex-2 w-[98%] justify-between items-center" style={{ elevation: 5 }}>
          <InboxArrowDownIcon style={{ color: '#ff6600' }} size={80} />
          <View className="flex justify-start items-start">
            <Text className="text-left p-2 text-2xl font-bold">
              Organizations
            </Text>
            <Text className="text-center p-2 text-2xl font-bold">
              100
            </Text>
          </View>
        </View>
        {/* fifth box  */}
        <View className="bg-orange-300 flex flex-row p-2 flex-2 w-[98%] justify-between items-center" style={{ elevation: 5 }}>
          <BellAlertIcon style={{ color: '#ff6600' }} size={80} />
          <View className="flex justify-center items-center w-full">
            <Text className="text-center p-2 text-2xl font-bold">
              Notifications
            </Text>
            <Text className="text-center p-2 text-2xl font-bold">
              100
            </Text>
          </View>
        </View>
      </View>
      {/* create any necessary view Image here */}
      <View className="p-2">
        <Text className="text-left font-bold underline text-3xl">
          Important Information
        </Text>
        <Text>
          Thank you for participating in the voting process! Your voice matters, and your input is valued. Please take note of the following guidelines to ensure a smooth and fair voting experience. The voting period is as set by the organization until the polls are closed.
        </Text>
        <Text>
          Results are anounced and monitored via our web platform to make sure the process is free and fair
        </Text>
        <Text>
          You can only vote once
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen