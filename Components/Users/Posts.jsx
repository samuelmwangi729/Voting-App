import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'

const Posts = () => {
    const [post, setPost] = useState("")
    const [institution, setInstitution] = useState([])
    const [userinstitution, setUserInstitution] = useState("")
    const [errors, setErrors] = useState({})
    const [posting, setPosting] = useState(false)
    const [loading, setLoading] = useState(false)
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
    const handleChange = val => {
        if (val.length > 0) {
            setPost(val)
            setErrors({})
            //set the errors here 
        } else {
            setErrors({ 'post': 'This field can not be blank' })

        }
    }
    const validForm = () => {
        if (!post) {
            setErrors({ 'post': "This field is required" })
            return;
        } else {
            return true
        }
    }
    //soon we will post it to the backend 
    const SubmitData = async () => {
        if (validForm()) {
            Submit()
        }
    }
    const Submit = async () => {
        setPosting(true)
        const req = await fetch(`${process.env.API_URL}/Leaders/Posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                PostData: post,
                Institution: userinstitution
            })
        })
        const resp = await req.json()
        if (resp.status === 'success') {
            //set success message with return message
            setPost("")
            setUserInstitution("")
            setErrors({ 'succ': resp.message })
        } else {
            setErrors({ 'req': resp.message })
        }
    }
    return (
        <SafeAreaView>
            <View>
                <Text className="text-center font-bold text-xl">
                    Add Posts to be Vied For
                </Text>
            </View>
            <View className="w-[90%] m-auto mt-5">
                {
                    errors.req ? (
                        <Text className="text-center font-bold text-red-500">
                            {errors.req}
                        </Text>
                    ) : null
                }
                {
                    errors.succ ? (
                        <Text className="text-center font-bold text-green-500">
                            {errors.succ}
                        </Text>
                    ) : null
                }
                <Text>
                    Institution
                </Text>
                {
                    errors.institution ? (
                        <Text className="text-red-500">
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
                    Posts Being Vied
                </Text>
                {
                    errors.post ? (
                        <Text className="text-red-500">
                            {errors.post}
                        </Text>
                    ) : null
                }
                <TextInput defaultValue={post} placeholder='Enter the post here. Eg. School President' className={`mt-2 px-2 ${errors.post ? "border border-red-500" : "border"}`} onChangeText={newPost => handleChange(newPost)} />
                <View className="mt-2">
                    <Button title='Add Post' color={'#ff6600'} onPress={SubmitData} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Posts