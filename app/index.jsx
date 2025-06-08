//Represent the home page component for the application
// The addition of expo router allows us to add extra screens to our applications
import { StyleSheet, Text, Image } from 'react-native'
import Logo from '../assets/images/logo_light.png'
import React from 'react'
import { Link } from "expo-router"


//Import themed components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>

      {/**Importing the image directly stored locally */}

      <ThemedLogo style={styles.img} />
      < Spacer height={20} />
      {/**To output text, we use text component in react native */}
      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>


      < Spacer height={10} />
      <ThemedText > Reading List App</ThemedText>
      < Spacer />
      <Link href='/about' style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href='/contact' style={styles.link}>
      <ThemedText>Contact Page</ThemedText>
      </Link>
      {/** */}
      {/* <View style={styles.card}>
        <Text>Hello, This is a card</Text>
      </View> */}
      {/** View component can be thought of as a  div tag in normal react. Its used to wrap
       *nested elements and for layout and structure*/}
    </ThemedView>
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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})