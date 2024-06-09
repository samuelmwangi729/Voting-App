import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowLeftIcon, PlusIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker';
const Categories = ({ navigation }) => {
    const [institution, setInstitution] = useState([])
    const [userinstitution, setUserInstitution] = useState("")
    const [category, setCategory] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const ValidateForm = () => {
        if (!userinstitution) {
            //set the errors 
            setErrors({ 'institution': 'The Institution Name is required' })
            return;
        }
        else if (!category) {
            setErrors({ 'category': 'The Category is required' })
            return
        } else {
            return true
        }
    }
    const PostData = async () => {
        setLoading(true);
        const response = await fetch(`${process.env.API_URL}/Post/Categories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Institution: userinstitution,
                CategoryName: category,
            })
        })
        const resp = await response.json()
        if (resp.status === 'success') {
            setUserInstitution("")
            setCategory("")
            //set success message 
            setErrors({ 'success': resp.message })
        } else {
            //set error message
            setErrors({ 'req': resp.message })

        }
    }
    const submitForm = async () => {
        if (ValidateForm()) {
            PostData()
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
    }, [])
    const updateCategory = (val) => {
        if (val.length > 0) {
            setCategory(val)
            setErrors({ 'category': '' })
        } else {
            setCategory("")
            setErrors({ 'category': 'The Category is required' })
        }
    }
    return (
        <SafeAreaView>
            <View className="flex flex-row justify-between items-center px-4 bg-[#ff6600] pb-2 mt-0">
                <TouchableOpacity className="text-xl text-center font-bold" onPress={() => navigation.goBack()}>
                    <ArrowLeftIcon color={'white'} />
                </TouchableOpacity>
            </View>
            <View className="w-full bg-slate-300">
                <Text className="text-center font-bold p-2">
                    Add Voters Categories (Who will be voting)
                </Text>
            </View>
            <KeyboardAvoidingView className="w-[90%] m-auto">
                {
                    errors.req ? (
                        <Text className="text-white text-left p-2 font-bold bg-red-400 mt-2">
                            {errors.req}
                        </Text>
                    ) : null
                }
                {
                    errors.success ? (
                        <Text className="text-white mt-2 bg-green-400 text-center p-2">
                            {errors.success}
                        </Text>
                    ) : null
                }
                <View className="w-[90%] m-auto mt-5">
                    {/* this is where the form goes  */}
                    <Text>
                        Institution
                    </Text>
                    {
                        errors.institution ? (
                            <Text className="text-red-500 text-left p-2">
                                {errors.institution}
                            </Text>
                        ) : null
                    }
                    <Picker mode={'dropdown'} selectedValue={userinstitution} onValueChange={(newVal) => setUserInstitution(newVal)} className="w-full">
                        <Picker.Item color='#ff6600' label="---Select Institution---" />
                        {institution.map((item, index) => (
                            <Picker.Item key={index} color='#ff6600' label={item.InstitutionName} value={item.InstitutionName} />
                        ))}
                    </Picker>
                    <Text>
                        Category (E.g Form 1...)
                    </Text>
                    {
                        errors.category ? (
                            <Text className="text-red-500 text-left py-2">
                                {errors.category}
                            </Text>
                        ) : null
                    }
                    <TextInput className={`px-2 py-2 ${errors.category ? "border border-red-600" : "border-b"}`} placeholder='Enter the categories here. Eg. Form 1' defaultValue={category} onChangeText={newCat => updateCategory(newCat)} />
                    <View className="mt-2">
                        <Button title='Add Categories' color={'#ff6600'} onPress={submitForm} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Categories