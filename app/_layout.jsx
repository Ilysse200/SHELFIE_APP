import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

//Slot component renders our page as stack does but stack 
// also adds navigation at the top of our page
const RootLayout = () => {
  return (

      <Stack screenOptions={{
        headerStyle:{backgroundColor: '#ddd'},
        headerTintColor: '#333',
      }}>

        <Stack.Screen name="index" options={{ title:'Home'}} />
        <Stack.Screen name="about" options={{ title:'About'}} />
        <Stack.Screen name="contact" options={{ title:'Contact', headerShown: false}} />
      </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})