import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Reset = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({})
    const [succ, setSucc] = useState("")
    const [loading, setLoading] = useState(false)
    const handleChange = val => {
        //check if the value is grater or less than 0
        if (val.length > 0) {
            setErrors({ 'email': '' })
            setEmail(val)
        } else {
            setEmail("")
            setErrors({ 'email': 'Email cannot be blank' })
        }
    }
    const validateForm = () => {
        if (!email) {
            setErrors({ 'email': 'Email is required' })
            return;
        }
        else {
            return true
        }
    }
    const ResetPassword = async () => {
        setLoading(true)
        try {
            const req = await fetch(`${process.env.API_URL}/reset`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email
                })
            })
            const resp = await req.json()
            //check the feedback
            if (resp.status === 'success') {
                setEmail("")
                //display the text for 5 seconds then redirect 
                setSucc(resp.message)
                setLoading(false)
            } else {
                setErrors({ 'email': 'Something went wrong!' })
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    const handleSubmit = () => {
        if (validateForm()) {
            ResetPassword()
        }
    }
    return (
        <SafeAreaView className="bg-white">
            <View className="flex justify-between items-center gap-2 px-2 h-1/2 bg-[#ff6600] rounded-b-3xl">
                <Text className="text-center top-1/2 text-white font-bold text-6xl">
                    VOTAS
                </Text>
            </View>
            <KeyboardAvoidingView className="h-1/2 bg-white mt-2" behavior='padding'>
                <View className="bg-white h-full">

                    <View className="w-[80%] m-auto">
                        <Text className="top-[-40] text-center text-2xl font-bold underline">
                            Reset Your Password
                        </Text>
                        {
                            errors.email ? (
                                <Text className="text-left text-red-500 p-1">
                                    {errors.email}
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
                        <Text className="p-2">
                            Enter Your Email Address
                        </Text>
                        <TextInput className={`h-10 px-3 ${errors.email ? "border border-red-600" : "border"}`} defaultValue={email} onChangeText={newText => handleChange(newText)} placeholder='Enter your Email Address Here' keyboardType='email-address' />
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
                                    Reset Password
                                </Text>
                            </TouchableOpacity>
                        )}
                        <View className="flex flex-row justify-between items-center">
                            <TouchableOpacity onPress={() => navigation.navigate('resetcode')} className="mt-3">
                                <Text className="text-right text-[#ff6600] font-bold">
                                    Already Have the Code?
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} className="mt-3">
                                <Text className="text-right text-[#ff6600] font-bold">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Reset