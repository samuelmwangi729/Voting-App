import {
  View,
  Text,
  Image,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import ImageBanner from "../assets/banner.png";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/authReducer";
import Dashboard from "./Dashboard";
import AppBar from "./AppBar";

const LandingScreen = ({ navigation }) => {
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user.loggedIn) {
      navigation.navigate("dashboard");
    }
  });
  return (
    <>
      {user.loggedIn ? (
        <Dashboard />
      ) : (
        <>
          <View className="bg-[#FF6600] h-3/4 relative">
            <AppBar />
            <Image
              className="w-full h-full mt-20"
              source={ImageBanner}
              resizeMode="center"
            />
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
            <TouchableOpacity
              className="w-[90%] border border-white rounded-full text-center p-3 bg-white"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="w-full text-center text-xl font-bold text-[#FF6600]">
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default LandingScreen;
