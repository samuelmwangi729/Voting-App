import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Register = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [fullnames, setFullName] = useState(null);
  const [password, setpassword] = useState(null);
  const [cpassword, setcpassword] = useState(null);
  const [errors, setErrors] = useState("")
  const [resp, setResp] = useState("")
  const [loading, setLoading] = useState(false)
  const [respSuccess, setRespSuccess] = useState("")
  validateForm = () => {
    //check the username if present 
    if (!username) {
      setErrors({ 'email': 'The email is required' })
      return;
    } else if (!fullnames) {
      setErrors({ 'fullnames': 'The full names are required' })
      return
    }

    else if (!password) {
      setErrors({ 'password': 'Password is required' })
      return
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
      setErrors("")
      return true
    }
  }
  const RegisterUser = async () => {
    setResp("")
    setLoading(true)
    try {
      const response = await fetch(`${process.env.API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Names: fullnames,
          email: username,
          password: password,
          repeatPassword: cpassword
        })
      })
      const data = await response.json()
      setLoading(false)
      if (data.error) {
        setResp(data.error.message)
      } else {
        setUsername("")
        setFullName("")
        setpassword("")
        setcpassword("")
        setRespSuccess(data.message)
      }
    } catch (err) {
      console.log(err.message)
    }

  }
  submitData = () => {
    setResp("")
    if (validateForm()) {
      //post the bata to the backend
      RegisterUser()
    }
  }
  return (
    <SafeAreaView className="h-full">
      <View className="flex justify-between items-center px-2 h-1/4 bg-[#ff6600] rounded-b-3xl">
        <Text className="text-center top-1/2 text-white font-bold text-6xl">
          VOTAS
        </Text>
      </View>
      <KeyboardAvoidingView behaviour="padding" className="px-2 h-3/4">
        <View className="h-3/4 mt-5 w-full" style={{ elevation: 5 }}>
          <View className="mt-1 px-5 flex gap-2">
            <Text className="text-center font-bold text-2xl underline">
              Register An Account
            </Text>
            {/* create the form here  */}
            {
              respSuccess ? (
                <Text className="text-center text-green-600">
                  {respSuccess}
                </Text>
              ) : null
            }
            {
              resp ? (<Text className="text-center text-red-600">
                {resp}
              </Text>) : null
            }
            {
              errors.email ? (<Text className="text-left font-bold text-red-500">
                {errors.email}
              </Text>) : null
            }
            <Text>Email Address</Text>
            <TextInput
              className={`px-2 h-10 ${errors.email ? " border border-red-500" : "border"}`}
              placeholder="Enter your User Email"
              defaultValue={username}
              onChangeText={(newUsername) =>
                setUsername(newUsername)
              }
              keyboardType="email-address"
            />
            <Text>Full Name</Text>
            {
              errors.fullnames ? (<Text className="text-left font-bold text-red-500">
                {errors.fullnames}
              </Text>) : null
            }
            <TextInput
              className={`px-2 h-10 ${errors.fullnames ? " border border-red-500" : "border"}`}
              placeholder="Enter Full Names Here"
              defaultValue={fullnames}
              onChangeText={(fullnames) => setFullName(fullnames)}
            />
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
              onChangeText={(password) => setpassword(password)}
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
              onChangeText={(cpassword) => setcpassword(cpassword)}
            />
            <TouchableOpacity className="bg-[#ff6600] h-10 flex justify-center" onPress={submitData}>
              {
                loading ? (
                  <View className="flex flex-row justify-center items-center">
                    <ActivityIndicator size={'large'} color={"white"} />
                    <Text className="text-white px-5 text-xl font-bold">
                      Please Wait ...
                    </Text>
                  </View>
                ) : (
                  <Text className="text-center text-white text-xl">
                    Register
                  </Text>
                )
              }
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-center">Or</Text>
            {/* use different register method  */}
            <TouchableOpacity className="bg-white border h-10 flex  flex-row justify-evenly items-center ">
              <Image
                source={{
                  uri: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                }}
                className="h-5 w-20 pt-9"
                resizeMode="contain"
              />
              <Text className="text-center text-black text-xl">
                Register With Google
              </Text>
            </TouchableOpacity>
            <View className="top-1">
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text className="text-center capitalize text-lg">
                  Already Registered?
                  <Text className="font-bold px-2 underline upper">
                    Sign In here
                  </Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
