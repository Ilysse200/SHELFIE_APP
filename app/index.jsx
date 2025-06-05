//Represent the home page component for the application
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      {/**To output text, we use text component in react native */}
      <Text>The Number 1</Text> 
      <Text>Reading List App</Text>
      {/** View component can be thought of as a  div tag in normal react. Its used to wrap
       *nested elements and for layout and structure*/}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})