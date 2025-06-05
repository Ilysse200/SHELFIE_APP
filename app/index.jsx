//Represent the home page component for the application
// The addition of expo router allows us to add extra screens to our applications
import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/images/logo_light.png'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      {/**Importing the image directly stored locally */}
      <Image source = {Logo} style={styles.img}/>
      {/**To output text, we use text component in react native */}
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </Text>
      {/** */}
      {/* <View style={styles.card}>
        <Text>Hello, This is a card</Text>
      </View> */}
      {/** View component can be thought of as a  div tag in normal react. Its used to wrap
       *nested elements and for layout and structure*/}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  // card:{
  //   backgroundColor:'#eee',
  //   padding:20,
  //   borderRadius:5,
  //   boxShadow:'4px 4px rgba(0,0,0,0.1)'
  // },
  img:{
    marginVertical:20
  }
})