
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/authReducer'
import AppBar from './AppBar'
import { Bars4Icon } from 'react-native-heroicons/outline';
const MainScreen = ({ route, navigation }) => {
  const user = useSelector(selectUser)
  return (
    <SafeAreaView>
      <AppBar />
      <View className="flax flex-row justify-between items-center" style={{ marginTop: StatusBar.currentHeight }}>
        <Text className="text-md p-2 font-bold">
          Welcome {user.username}
        </Text>
        <TouchableOpacity onPress={() => alert('drawer')}>
          <Text className="px-5 py-1" onPress={() => alert('drawer')}>
            <Bars4Icon style={{ color: 'black' }} />
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-between items-center flex-wrap w-full p-2 gap-3">
        <View className="w-[45%] bg-orange-300">
          <Text className="text-center">1</Text>
        </View>
        <View className="w-[45%] bg-orange-300">
          <Text className="text-center">1</Text>
        </View>
        <View className="w-[45%] bg-orange-300">
          <Text className="text-center">1</Text>
        </View>
        <View className="w-[45%] bg-orange-300">
          <Text className="text-center">1</Text>
        </View>
        <View className="w-[45%] bg-orange-300">
          <Text className="text-center">1</Text>
        </View>
        <View className="w-[45%] bg-orange-300">
          <Text className="text-center">1</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen