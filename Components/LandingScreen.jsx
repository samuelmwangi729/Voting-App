import { View, Text,StatusBar, Image, Pressable, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import ImageBanner from '../assets/banner.png'
const LandingScreen = ({navigation}) => {
  return (
    <>
      <View className="bg-[#FF6600] h-3/4 relative">
        <StatusBar style='light' backgroundColor='#FF6600' translucent={true}/>
        <Image className="w-full h-full mt-20" source={ImageBanner} resizeMode='center' />
        <Text className="text-6xl text-white absolute top-1/4 left-[30%] underline font-bold">
          VOTAS
        </Text>
      </View>
      <View className="bg-[#FF6600] h-1/4 flex flex-col justify-evenly items-center">
        <TouchableOpacity className="w-[90%] border border-white rounded-full text-center p-3">
          <Text className="w-full text-center text-xl font-bold text-white">
            Learn More
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[90%] border border-white rounded-full text-center p-3 bg-white" onPress={()=>navigation.navigate('Login')}>
          <Text className="w-full text-center text-xl font-bold text-[#FF6600]">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default LandingScreen