import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState(null);
  const [fullnames, setFullName] = useState(null);
  const [password, setpassword] = useState(null);
  const [cpassword, setcpassword] = useState(null);
  const [errors,setErrors] = useState("")
  const handleChange = (field, value) => {
    if(value.length===0){
        const errorObject = {
            [`${field}`]:`The ${field} field can not be blank`
        }
        setErrors(errorObject)
        return;
    }else{
        const errorObject = {
            [`${field}`]:''
        }
        setErrors(errorObject)
    }
    //check the user email field directly 
    if(field==="email"){
        setUsername(value)
    }else if(field==='fullnames'){
        setFullName(value)
    }
    else if(field==='password'){
        setpassword(value)
    }
    else if(field==='confirmpassword'){
        setcpassword(value)
    }
    else{
        setErrors({'email':'Invalid data submitted'})
    }
  };
  validateForm = () =>{
    //check the username if present 
    if(username){
        setErrors({'email':'The email is required'})
        return;
    }else if(!fullnames){
        setErrors({'fullnames':'The full names are required'})
        return
    }
    
    else if(!password){
        setErrors({'password':'Password is required'})
        return
    }
    else if(!cpassword){
        setErrors({'confirmpassword':'The confirm field is required'})
        return
    }
    else if(password !== cpassword){
        setErrors({'password':'The two password must match'})
        return
    }
    else{
        return true
    }
  }
  submitData= ()=>{
    if(validateForm()){
        alert('submit data')
    }
  }
  return (
    <SafeAreaView className="h-full">
      <View className="flex justify-between items-center px-2 h-1/4 bg-[#ff6600]">
        <Text className="text-center top-1/2 text-white font-bold text-6xl">
          VOTAS
        </Text>
      </View>
      <KeyboardAvoidingView>
        <View className="h-3/4 mt-5 w-full" style={{ elevation: 5 }}>
          <View className="mt-4 p-5 flex gap-2">
            <Text className="text-center font-bold text-2xl underline">
              Register An Account
            </Text>
            {/* create the form here  */}
            <Text>Email Address</Text>
            {
                errors.email?(<Text className="text-left font-bold text-red-500">
                    {errors.email}
                </Text>):null
            }
            <TextInput
              className={`px-2 h-10 ${errors.email?" border border-red-500":"border"}`}
              placeholder="Enter your User Email"
              defaultValue={username}
              onChangeText={(newUsername) =>
                handleChange("email", newUsername)
              }
              keyboardType="email-address"
            />
            <Text>Full Name</Text>
            {
                errors.fullnames?(<Text className="text-left font-bold text-red-500">
                    {errors.fullnames}
                </Text>):null
            }
            <TextInput
              className={`px-2 h-10 ${errors.fullnames?" border border-red-500":"border"}`}
              placeholder="Enter Full Names Here"
              defaultValue={fullnames}
              onChangeText={(fullnames) => handleChange("fullnames", fullnames)}
            />
            <Text>Password</Text>
            {
                errors.password?(<Text className="text-left font-bold text-red-500">
                    {errors.password}
                </Text>):null
            }
            <TextInput
              secureTextEntry={true}
              className={`px-2 h-10 ${errors.password?" border border-red-500":"border"}`}
              placeholder="Enter your Password Here"
              defaultValue={password}
              onChangeText={(password) => handleChange("password", password)}
            />
            <Text>Confirm Password</Text>
            {
                errors.confirmpassword?(<Text className="text-left font-bold text-red-500">
                    {errors.confirmpassword}
                </Text>):null
            }
            <TextInput
              secureTextEntry={true}
              className={`px-2 h-10 ${errors.confirmpassword?" border border-red-500":"border"}`}
              placeholder="Confirm Your Password"
              defaultValue={cpassword}
              onChangeText={(cpassword) => handleChange("confirmpassword", cpassword)}
            />
            <TouchableOpacity className="bg-[#ff6600] h-10 flex justify-center" onPress={submitData}>
              <Text className="text-center text-white text-xl">Register</Text>
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
