import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'

const Candidates = () => {
  const [institution, setInstitution] = useState([])
  const [categories, setCategories] = useState([])
  const [userCategory, setUserCategory] = useState([])
  const [userinstitution, setUserInstitution] = useState("")
  const [userPosts, setUserPosts] = useState("")
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const loadInstitutions = async () => {
    const req = await fetch(`${process.env.API_URL}/Institutions`)
    const response = await req.json()
    setInstitution(response.data)
  }
  const loadPosts = async () => {
    const req = await fetch(`${process.env.API_URL}/Leaders`)
    const response = await req.json()
    setPosts(response.data)
  }
  const loadCategories = async () => {
    const req = await fetch(`${process.env.API_URL}/Categories`)
    const response = await req.json()
    setCategories(response.data)
  }
  useEffect(() => {
    loadInstitutions()
    loadPosts()
    loadCategories()
  },[])
  return (
    <SafeAreaView>
      <View>
        <Text className="text-center text-xl font-bold">
          Add Candidates
        </Text>
      </View>
      <View>
        <Text>
          Institution
        </Text>
        <Picker mode={'dropdown'} selectedValue={userinstitution} onValueChange={(newVal) => setUserInstitution(newVal)} className="w-full">
          <Picker.Item color='#ff6600' label="---Select Institution---" />
          {institution.map((item, index) => (
            <Picker.Item key={index} color='#ff6600' label={item.InstitutionName} value={item.InstitutionName} />
          ))}
        </Picker>
        <Text>
          Post Advertised
        </Text>
        <Picker mode={'dropdown'} selectedValue={userPosts} onValueChange={(newVal) => setUserPosts(newVal)} className="w-full">
          <Picker.Item color='#ff6600' label="---Select Posts---" />
          {posts.map((item, index) => (
            <Picker.Item key={index} color='#ff6600' label={item.Post} value={item.Post} />
          ))}
        </Picker>
        <Text>
          Candidates Separated by Unique Identifiers
        </Text>
        <TextInput className="border" placeholder='Enter the candidates list separated by commas' />
        <Text>
          Voted By (Choose all who will vote for this candidate)
        </Text>
        <Picker mode={'dropdown'} selectedValue={userCategory} onValueChange={(newVal) => setUserCategory(newVal)} className="w-full">
          <Picker.Item color='#ff6600' label="---Who to Vote In this Candidate---" />
          {categories.map((item, index) => (
            <Picker.Item key={index} color='#ff6600' label={item.CategoryName} value={item.CategoryName} />
          ))}
        </Picker>
      </View>
    </SafeAreaView>
  )
}

export default Candidates