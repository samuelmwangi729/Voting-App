import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ResetCode = ({ navigation }) => {
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [errors, setErrors] = useState({})
  const [succ, setSucc] = useState("")
  const [loading, setLoading] = useState(false)
  const handleChange = val => {
    //check if the value is grater or less than 0
    if (val.length > 0) {
      setErrors({ 'code': '' })
      setCode(val)
    } else {
      setCode("")
      setErrors({ 'code': 'Code cannot be blank' })
    }
  }
  const handlePassChange = val =>{
    if (val.length > 0) {
      setErrors({ 'password': '' })
      setPassword(val)
    } else {
      setPassword("")
      setErrors({ 'password': 'Password cannot be blank' })
    }
  }
  const handlecPassChange = val =>{
    if (val.length > 0) {
      setErrors({ 'confirmpassword': '' })
      setCpassword(val)
    } else {
      setCpassword("")
      setErrors({ 'confirmpassword': 'Password cannot be blank' })
    }
  }
  const validateForm = () => {
    if (!code) {
      setErrors({ 'code': 'Code is required' })
      return;
    }
    else if(!password){
      setErrors({ 'password': 'Password Is required'})
      return;
    }
    else if (!cpassword) {
      setErrors({ 'confirmpassword': 'The confirm field is required' })
      return
    }
    else if (password !== cpassword) {
      setErrors({ 'password': 'The two password must match' })
      return
    }
    else {
      return true
    }
  }
  const UpdatePassword = async () => {
    console.log(code)
    setLoading(true)
    try {
      const req = await fetch(`${process.env.API_URL}/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token:code,
          password:password,
          repeatPassword:cpassword
        })
      })
      const resp = await req.json()
      //check the feedback
      if (resp.status === 'success') {
        setCode("")
        setPassword("")
        setCpassword("")
        //display the text for 5 seconds then redirect 
        setSucc(resp.message)
        setLoading(false)
        setTimeout(() => navigation.navigate('Login'),5000)
      } else {
        setErrors({ 'code': 'Something went wrong!' })
      }
    } catch (err) {
      console.log(err.message)
    }
  }
  const handleSubmit = () => {
    if (validateForm()) {
      UpdatePassword()
    }
  }
  return (
    <SafeAreaView>
      <View className="flex justify-between items-center gap-2 px-2 h-1/4 bg-[#ff6600] rounded-b-3xl">
        <Text className="text-center top-1/2 text-white font-bold text-6xl">
          VOTAS
        </Text>
      </View>
      <KeyboardAvoidingView className="h-3/4" behavior='padding'>
        <View className="mt-4 bg-white">
          <Text className="p-2 text-center text-2xl font-bold underline">
            Enter Password Reset Code
          </Text>

          <View className="w-[80%] m-auto py-5">
            {
              errors.code ? (
                <Text className="text-left text-red-500 p-1">
                  {errors.code}
                </Text>
              ) : null
            }
            {
              succ ? (
                <Text className="text-green-600 capitalize">
                  {succ}
                </Text>
              ) : null
            }
            <Text className="p-1">
              Code
            </Text>
            <TextInput className={`h-10 px-3 ${errors.code ? "border border-red-600" : "border"}`} defaultValue={code} onChangeText={newText => handleChange(newText)} placeholder='Code Sent by Email' autoFocus={true} />
            <Text>Password</Text>
            {
              errors.password ? (<Text className="text-left font-bold text-red-500">
                {errors.password}
              </Text>) : null
            }
            <TextInput
              secureTextEntry={true}
              className={`px-2 h-10 ${errors.password ? " border border-red-500" : "border"}`}
              placeholder="Enter your Password Here"
              defaultValue={password}
              onChangeText={(password) => handlePassChange(password)}
            />
            <Text>Confirm Password</Text>
            {
              errors.confirmpassword ? (<Text className="text-left font-bold text-red-500">
                {errors.confirmpassword}
              </Text>) : null
            }
            <TextInput
              secureTextEntry={true}
              className={`px-2 h-10 ${errors.confirmpassword ? " border border-red-500" : "border"}`}
              placeholder="Confirm Your Password"
              defaultValue={cpassword}
              onChangeText={(cpassword) => handlecPassChange(cpassword)}
            />
            {loading ? (
              <View className="bg-[#ff6600] mt-3 flex flex-row justify-center items-center">
                <ActivityIndicator size={'large'} color={"white"} />
                <Text className="text-center text-white mb-2 mx-2">
                  Please Wait
                </Text>
              </View>
            ) : (
              <TouchableOpacity className="w-full bg-[#ff6600] px-4 py-2 mt-5" onPress={handleSubmit}>
                <Text className="text-center text-white font-bold text-xl">
                  Update Your Password
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => navigation.navigate('Login')} className="mt-3">
              <Text className="text-right text-[#ff6600] font-bold">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ResetCode