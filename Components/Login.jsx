import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Pressable, KeyboardAvoidingView, ActivityIndicator } from 'react-native'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [login_error, setLoginError] = useState("")
    const [login_success, setLoginSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const validateForm = () => {
        //validate the fields
        if (!username) {
            setErrors({ "username": "Please Enter a username" })
        } else if (!password) {
            setErrors({ "password": "Please Enter a password" })
        }
        else {
            return true
        }
    }
    const handleSubmit = async () => {
        if (validateForm()) {
            //submit the data to the backend server 
            setLoading(true)
            try {
                const response = await fetch("http://192.168.100.10:8080/api/login", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: username,
                        password: password
                    })
                })
                const login_response = await response.json()
                if (login_response.error) {
                    setLoading(false)
                    setLoginSuccess("")
                    setLoginError(login_response.error.message)
                } else {
                    setLoading(false)
                    setLoginError("")
                    setLoginSuccess("Login successful")
                    console.log(login_response)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handleUsernameChange = (text) => {
        setLoginError("")
        setLoading(false)
        if ((text).toString().length === 0) {
            setErrors({ "username": "Username cannot be empty" })
            setUsername('')
            return;
        } else {
            setErrors({ "username": "" })
            setUsername(text)
        }
    }
    const handlePasswordChange = (text) => {
        if ((text).toString().length === 0) {
            setErrors({ "password": "Password cannot be empty" })
            setPassword('')
            return;
        } else {
            setErrors({ "password": "" })
            setPassword(text)
        }
    }
    return (
        <SafeAreaView className="w-full h-full" style={{ paddingTop: StatusBar.currentHeight }}>
            <View className="flex justify-between items-center gap-2 px-2 h-1/4 bg-[#ff6600] rounded-b-3xl">
                <Text className="text-center top-1/2 text-white font-bold text-6xl">
                    VOTAS
                </Text>
            </View>
            <KeyboardAvoidingView behaviour="padding" className="px-2 h-1/2">
                <Text className="text-center font-bold text-xl px-2 py-5">
                    Login Your Account
                </Text>
                {
                    login_error ? (
                        <Text className="text-center text-red-700">{login_error}</Text>
                    ) : null
                }
                {
                    login_success ? (<Text className="text-center text-green-600">{login_success}</Text>) : null
                }
                <View>
                    <Text className="font-bold text-md">
                        Username
                    </Text>
                    {
                        errors.username ? <Text className="text-red-600">{errors.username}</Text> : null
                    }
                    <TextInput defaultValue={username} className={`h-10 px-2 ${errors.username ? "border-b border-red-500 m-1" : "border-b"}`} placeholder="Enter your Email Here" autoFocus={false} onChangeText={newUsername => handleUsernameChange(newUsername)} keyboardType="email-address" autoCapitalize={false} />
                    <Text className="font-bold text-md mt-6">
                        Password
                    </Text>
                    {
                        errors.password ? <Text className="text-red-600">{errors.password}</Text> : null
                    }
                    <TextInput defaultValue={password} className={`h-10 px-2 ${errors.password ? "border-b border-red-500 m-1" : "border-b"}`} placeholder="Enter your Password Here" secureTextEntry={true} autoCapitalize={false} autoCorrect={false} onChangeText={newPassword => handlePasswordChange(newPassword)} />

                    {loading ? (
                        <View className="bg-[#ff6600] mt-3">
                            <ActivityIndicator size={'large'} color={"white"} />
                            <Text className="text-center text-white mb-2">
                                Please Wait
                            </Text>
                        </View>
                    ) : (
                        <Pressable >
                            <TouchableOpacity className="w-full bg-[#ff6600] p-4 mt-5 rounded-lg" onPress={handleSubmit}>
                                <Text className="text-center text-white font-bold text-xl">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </Pressable>
                    )}

                </View>
                <Text className="text-center mt-5 font-bold text-lg">
                    Or Login With ...
                </Text>
                <View className="flex flex-row justify-evenly items-center gap-2 mt-5">
                    <Pressable className="border p-3 bg-[#ff6600] w-1/4">
                        <TouchableOpacity>
                            <Text className="text-white font-bold text-center">
                                Twitter
                            </Text>
                        </TouchableOpacity>
                    </Pressable>
                    <Pressable className="border p-3 bg-[#ff6600] w-1/4">
                        <TouchableOpacity>
                            <Text className="text-white font-bold text-center">
                                Facebook
                            </Text>
                        </TouchableOpacity>
                    </Pressable>
                    <Pressable className="border p-3 bg-[#ff6600] w-1/4">
                        <TouchableOpacity>
                            <Text className="text-white font-bold text-center">
                                Gmail
                            </Text>
                        </TouchableOpacity>
                    </Pressable>
                </View>
                <View className="top-10">
                    <Pressable>
                        <Text className="text-center capitalize text-lg">Do not have an Account?
                            <Text className="font-bold px-2 underline upper">
                                Sign Up here
                            </Text>
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Login