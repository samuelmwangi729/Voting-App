import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon, ChevronRightIcon, BuildingLibraryIcon ,UserGroupIcon,PlusCircleIcon,UserPlusIcon,TagIcon, TrophyIcon} from 'react-native-heroicons/outline';

const Setting = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center px-4 mt-2">
        <TouchableOpacity className="text-xl text-center font-bold" onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={'black'} />
        </TouchableOpacity>
        <Text className="text-xl text-center font-bold">
          Settings
        </Text>
      </View>
      <Text className="text-right p-2">
        Make Any changes Via this page
      </Text>
      <View className="bg-white w-full h-[80vh]">
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }} onPress={()=>navigation.navigate('institutions')}>
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <BuildingLibraryIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Institutions
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }} onPress={()=>navigation.navigate('addInstitution')}>
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <PlusCircleIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Add Institutions
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }}
        onPress={()=>navigation.navigate('Users')}
        >
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <UserGroupIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Users
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }} onPress={()=>navigation.navigate("Categories")}>
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <TagIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Add User Categories
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }} onPress={()=>navigation.navigate("Posts")}>
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <TrophyIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Add Posts
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }} onPress={()=>navigation.navigate("Candidates")}>
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <UserPlusIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Add Candidates
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }}>
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <BuildingLibraryIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Institutions
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }}>
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <BuildingLibraryIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Institutions
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }}>
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <BuildingLibraryIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Institutions
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 mt-2 shadow-sm border-b h-16 flex flex-row justify-between items-center w-[90%] m-auto" style={{ elevation: 2 }}>
          <View className="flex flex-row justify-around items-center gap-5">
            <Text className="text-center">
              <BuildingLibraryIcon color={'black'} />
            </Text>
            <Text className="text-xl font-bold">
              Institutions
            </Text>
          </View>
          <Text>
            <ChevronRightIcon color={'black'} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Setting