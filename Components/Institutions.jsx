import { View, Text, StatusBar, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon, PlusIcon } from 'react-native-heroicons/outline';
const Institutions = ({ navigation }) => {
  const [institutions, setInstitutions] = useState([])
  const [fetchingData, setFetchingData] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const handleRefresh = async ()=>{
    setRefreshing(true)
    fetchData()
    setRefreshing(false)
  }
  const fetchData = async () => {
    setFetchingData(true)
    try {
      const req = await fetch(`${process.env.API_URL}/Institutions`)
      const resp = await req.json()
      setFetchingData(false)
      setInstitutions(resp.data)
    } catch (error) {
      console.log(error)
    }
  }
  useLayoutEffect(() => {
    fetchData()
  }, [])
  return (
    <SafeAreaView className="bg-slate-700">
      <View className="flex flex-row justify-between items-center px-4 bg-[#ff6600] pb-2 mt-0">
        <TouchableOpacity className="text-xl text-center font-bold" onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={'white'} />
        </TouchableOpacity>
        <View className=" bg-white rounded-md">
          <TouchableOpacity className="flex flex-row justify-between items-center gap-1 p-2" onPress={()=>navigation.navigate('addInstitution')}>
          <PlusIcon color={'#ff6600'} />
          <Text className="text-xl text-center font-bold text-[#ff6600]">
            Add Institutions
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-slate-50 h-screen w-full m-auto mt-0" style={{ elevation: 5 }}>
        <Text className="text-center font-bold text-2xl underline py-2">
          Available Institutions
        </Text>
        {
          fetchingData ? (
            <View className="flex justify-center flex-row items-center top-1/3">
              <ActivityIndicator size={'large'} color={"#ff6600"} className="px-2" />
              <Text className="text-center text-[#ff6600] font-bold">
                Loading Institutions...
              </Text>
            </View>
          ) : (
            <FlatList className="w-full" data={institutions} renderItem={(item) => {
              return (
                <View className="text-black  flex gap-2 justify-between items-center border w-[95%] m-auto mb-2 mt-2" key={item.index}>
                  <View className="w-[95%] m-auto bg-[#ff6600] p-2">
                    <Text className="text-xl text-center text-white uppercase">{item.item.InstitutionName}</Text>
                  </View>
                  <View className="text-black  flex flex-row gap-2 justify-between items-center w-[90%] m-auto mb-2 mt-2">
                    <Text>County: {item.item.County}</Text>
                    <Text>Sub County: {item.item.SubCounty}</Text>
                  </View>
                </View>
              )
            }} showsVerticalScrollIndicator={false} ListEmptyComponent={<Text> No Institutions Found</Text>}
            refreshing={refreshing} onRefresh={handleRefresh}
            ListFooterComponent={<View className="h-32"></View>}
            />
          )
        }
      </View>
    </SafeAreaView>
  )
}

export default Institutions