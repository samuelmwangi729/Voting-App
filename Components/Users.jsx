import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserPlusIcon } from 'react-native-heroicons/solid'
import { ArrowLeftIcon, PlusIcon } from 'react-native-heroicons/outline';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
const Users = ({ navigation }) => {
  const [fullName, setFullName] = useState(null)
  const [uniqueId, setUniqueId] = useState(null)
  const [errors, setErrors] = useState({})
  const [institution, setInstitution] = useState([])
  const [userinstitution, setUserInstitution] = useState([])
  const [userType, setUserType] = useState(null)
  const [userCat, setUserCat] = useState(null)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const loadCategories = async () => {
    const req = await fetch(`${process.env.API_URL}/Categories`)
    const response = await req.json()
    setCategories(response.data)
  }
  const changeName = val => {
    //check the length of the object 
    if (val.length > 0) {
      //set the full names to the value 
      setFullName(val)
      setErrors({ 'fullname': '' })
    }
    else {
      setFullName("")
      setErrors({ 'fullname': 'This field cant be blank' })
      return;
    }
  }
  const fetchInstitutions = async () => {
    setLoading(true)
    const req = await fetch(`${process.env.API_URL}/Institutions`)
    const resp = await req.json()
    //set the institutions to the institutions 
    setInstitution(resp.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchInstitutions()
    loadCategories()
  }, [])
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between items-center px-4 bg-[#ff6600] pb-2 mt-0">
        <TouchableOpacity className="text-xl text-center font-bold" onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={'white'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <KeyboardAvoidingView behavior='padding'>
          <Text className="text-center font-bold text-xl mt-1">
            Add Users
          </Text>

          <View className="w-[90%] bg-slate-200 h-full m-auto mt-1 p-2">
            <Text className="font-bold">
              Full Names
            </Text>
            {
              errors.fullname ? (
                <Text className="text-red-600 font-bold">
                  {errors.fullname}
                </Text>
              ) : null
            }
            <TextInput className={`px-2 ${errors.fullname ? "border-b border-red-500 text-red-500" : "border-b"}`} placeholder='Enter the Full Names here' defaultValue={fullName} onChangeText={newName => changeName(newName)} />
          </View>
          <View className="w-[90%] bg-slate-200 h-full m-auto mt-1 p-2">
            <Text className="font-bold">
              Unique Identifier (ID No or Adm No)
            </Text>
            {
              errors.fullname ? (
                <Text className="text-red-600 font-bold">
                  {errors.fullname}
                </Text>
              ) : null
            }
            <TextInput className={`px-2 ${errors.fullname ? "border-b border-red-500 text-red-500" : "border-b"}`} placeholder='Enter the ID or the Admission Number here' defaultValue={fullName} onChangeText={uid => uniqueId(uid)} />
          </View>
          <View className="w-[90%] bg-slate-200 h-full m-auto mt-1 p-2">
            <Text className="font-bold">
              Select Institution
            </Text>
            {
              errors.fullname ? (
                <Text className="text-red-600 font-bold">
                  {errors.fullname}
                </Text>
              ) : null
            }
            <Picker mode={'dropdown'} selectedValue={userinstitution} onValueChange={(newVal) => setUserInstitution(newVal)} className="w-full">
              <Picker.Item color='#ff6600' label="---Select Institution---" />
              {institution.map((item, index) => (
                <Picker.Item key={index} color='#ff6600' label={item.InstitutionName} value={item.InstitutionName} />
              ))}
            </Picker>
          </View>
          <View className="w-[90%] bg-slate-200 h-full m-auto mt-1 p-2">
            <Text className="font-bold">
              Select User Type
            </Text>
            {
              errors.fullname ? (
                <Text className="text-red-600 font-bold">
                  {errors.fullname}
                </Text>
              ) : null
            }
            <Picker mode={'dropdown'} selectedValue={userType} onValueChange={(newVal) => setUserType(newVal)} className="w-full">
              <Picker.Item color='#ff6600' label="---Select Institution---" value={""} />
              <Picker.Item color='#ff6600' label="Administrator" value={'Administrator'} />
              <Picker.Item color='#ff6600' label="Presiding Officer" value={'Presiding'} />
              <Picker.Item color='#ff6600' label="Returning Officer" value={'Returning'} />
              <Picker.Item color='#ff6600' label="Voter" value={'Voter'} />
              <Picker.Item color='#ff6600' label="Observer" value={'Observer'} />
            </Picker>
          </View>
          <View className="w-[90%] bg-slate-200 h-full m-auto mt-1 p-2">
            <Text className="font-bold">
              User Category
            </Text>
            {
              errors.fullname ? (
                <Text className="text-red-600 font-bold">
                  {errors.fullname}
                </Text>
              ) : null
            }
            <Picker mode={'dropdown'} selectedValue={userCat} onValueChange={(newVal) => setUserCat(newVal)} className="w-full">
              <Picker.Item color='#ff6600' label="---Select User's Voting Category---" />
              {categories.map((item, index) => (
                <Picker.Item key={index} color='#ff6600' label={item.CategoryName} value={item.CategoryName} />
              ))}
            </Picker>
          </View>
          <View className="w-[90%] bg-slate-200 h-full m-auto mt-1 p-2">
            <Button title='Add User' className="mt-5" color={'#ff6600'} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Text className="text-center mt-5 text-xl font-bold">
        Or
      </Text>
      <View className="w-[90%] m-auto">

        <Text>
          Upload SpreadSheet File
        </Text>
        <TextInput className="border px-2 mb-2" placeholder='Upload the file here' />
        <Button title='Upload Document' className="mt-5" color={'#ff6600'} />
      </View>
    </SafeAreaView>
  )
}

export default Users