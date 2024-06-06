import { View, Text, SafeAreaView, ScrollView, StatusBar, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Users = () => {
    const [institution, setInsitution] = useState(null)
    const [county, setCounty] = useState(null)
    const [sCounty, setScounty] = useState(null)
    const [errors, setErrors] = useState({})
    const validateForm = () => {
        //validate the form here
    }
    const handleSubmit = () => {
        if (validateForm()) {
            alert('submitting form')
        }
    }
    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
            <ScrollView>
                <View>
                    <View className="bg-slate-50 h-[50vh] w-[90%] m-auto p-7 mt-4" style={{ elevation: 5 }}>
                        <Text className="text-center text-2xl font-bold p-2">
                            Add Institutions
                        </Text>
                        {/* Add the form here  */}
                        <Text className="font-bold">
                            Institution Name
                        </Text>
                        {errors.institution ? (
                            <Text className="text-red-500">
                                {errors.institution}
                            </Text>
                        ) : null}
                        <TextInput className="border-2 px-2 h-10" placeholder='Enter the Institution Name' defaultValue={institution} onChangeText={(newText) => setInsitution(newText)} />
                        <Text className="font-bold">
                            County
                        </Text>
                        {errors.county ? (
                            <Text className="text-red-500">
                                {errors.county}
                            </Text>
                        ) : null}
                        <TextInput className="border-2 px-2 h-10" defaultValue={county} onChangeText={newText => setCounty(newText)} />
                        <Text className="font-bold">
                            Sub County
                        </Text>
                        {errors.subCounty ? (
                            <Text className="text-red-500">
                                {errors.subCounty}
                            </Text>
                        ) : null}
                        <TextInput className="border-2 px-2 h-10" defaultValue={sCounty} onChangeText={newText => setScounty(newText)} />
                        <TouchableOpacity className="bg-[#ff6600] h-10 mt-4 flex justify-center" onPress={handleSubmit}>
                            <Text className="text-center text-white font-bold text-xl">
                                Add Institution
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Users