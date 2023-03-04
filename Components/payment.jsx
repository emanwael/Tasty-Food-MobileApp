import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Payment() {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Payment</Text>
        <StatusBar barStyle="light-content" backgroundColor="#FF5A00" />
        <Image 
        source={{uri:'https://cdn.pixabay.com/photo/2022/11/10/20/44/switzerland-7583676_1280.jpg'}}
        style={styles.ImgStyle}
        />
       <TextInput 
       style={styles.inputStyle}
       placeholder='name' />
         <TextInput 
       style={styles.labelStyle}
       placeholder='Expiration date' />
       <TouchableOpacity 
          style={styles.button}>
        <Text style={styles.buttonText}>
          Pay Now
        </Text>
      </TouchableOpacity>  
      </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    

    
  },
  ImgStyle: {
    width: 300,
    height: 100,
    borderRadius: 8,
    marginBottom:100

  },
  button : {
    backgroundColor:'#FF5A00',
    width:150,
    height:45,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    borderRadius:5
  },
  buttonText : {
    fontSize: 15,
    color: '#f4f4f4',
    fontWeight:'bold',
    textTransform:'uppercase'
  },
 
  inputStyle : {
    backgroundColor:'#2222',
    borderRadius:5,
    marginBottom:20,

  },
  labelStyle : {
    marginBottom:5,
    borderRadius:5,
    backgroundColor:'#2222',

  },
  text :{
    marginTop:100,
    fontSize:29,
    marginBottom:100,
    textAlign: 'center'
  }
 
});
