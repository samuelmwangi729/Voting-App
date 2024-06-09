import { View, Text, StatusBar, TextInput, Button, TouchableOpacity, ActivityIndicator, FlatList, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const AddInstitution = ({navigation}) => {
    const [institution, setInsitution] = useState(null)
    const [county, setCounty] = useState(null)
    const [sCounty, setScounty] = useState(null)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
   
    const validateForm = () => {
        //validate the form here
        if (!institution) {
            setErrors({ 'institution': 'The Institution is required' })
            return;
        } else if (!county) {
            setErrors({ 'county': 'The county is required' })
            return;
        } else if (!sCounty) {
            setErrors({ 'subCounty': 'The sub county is required' })
            return;
        } else {
            return true;
        }
    }
    const submitData = async () => {
        setLoading(true);
        try {
            const req = await fetch(`${process.env.API_URL}/Institutions/Post`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    InstitutionName: institution,
                    County: county,
                    SubCounty: sCounty
                })
            })
            const resp = await req.json()
            setLoading(false)
            setInsitution("")
            setCounty("")
            setScounty("")
            //get the response 
            if (resp.status === 'success') {
                //tell the user the request is successful
                setErrors({ 'success': resp.message })
            } else {
                setErrors({ 'data': resp.message })
                return;
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = () => {
        if (validateForm()) {
            submitData()
        }
    }
  return (
    <SafeAreaView>
            <KeyboardAvoidingView behavior='padding' >
                <View className="bg-slate-50 w-[90%] m-auto p-7 top-auto" style={{ elevation: 5 }}>
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
                    {errors.data ? (
                        <Text className="text-red-500">
                            {errors.data}
                        </Text>
                    ) : null}
                    {errors.success ? (
                        <Text className="text-green-600">
                            {errors.success}
                        </Text>
                    ) : null}
                    <TextInput className={`px-2 h-10 ${errors.institution ? "border border-red-600" : "border-2"}`} placeholder='Enter the Institution Name' defaultValue={institution} onChangeText={(newText) => setInsitution(newText)} />
                    <Text className="font-bold">
                        County
                    </Text>
                    {errors.county ? (
                        <Text className="text-red-500">
                            {errors.county}
                        </Text>
                    ) : null}
                    <TextInput className={`px-2 h-10 ${errors.county ? "border border-red-600" : "border-2"}`} defaultValue={county} onChangeText={newText => setCounty(newText)} placeholder='Enter the county here' />
                    <Text className="font-bold">
                        Sub County
                    </Text>
                    {errors.subCounty ? (
                        <Text className="text-red-500">
                            {errors.subCounty}
                        </Text>
                    ) : null}
                    <TextInput className={`px-2 h-10 ${errors.subCounty ? "border border-red-600" : "border-2"}`} defaultValue={sCounty} onChangeText={newText => setScounty(newText)} placeholder='Enter the sub county here' />
                    {loading ? (
                        <View className="bg-[#ff6600] h-10 mt-4 flex justify-center flex-row items-center">
                            <ActivityIndicator size={'large'} color={"white"} className="px-2" />
                            <Text className="text-center text-white font-bold text-xl">
                                Adding Institution
                            </Text>
                        </View>
                    ) : (

                        <TouchableOpacity className="bg-[#ff6600] h-10 mt-4 flex justify-center" onPress={handleSubmit}>
                            <Text className="text-center text-white font-bold text-xl">
                                Add Institution
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
  )
}

export default AddInstitution