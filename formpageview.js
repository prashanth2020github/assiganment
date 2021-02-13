import React from "react"
import {useState} from "react"
import { StyleSheet, Text, View , Button ,TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


function Signup({Navigation}){
    const [initalname , setInitalname ] = useState('')
    const [initalpass , setInitalpass ] = useState('')

   
   var usernew1 = initalname
   var password1 = initalpass

  var datastore = {
      username:usernew1,
      password:password1
    }

     var handlebtnfun = async()=>{
      try{
      await AsyncStorage.setItem("userdata" , JSON.stringify(datastore) )
      }
      catch(err){
        alert("err")
      }
     props.Navigation.Navigate("Login")
    }
    

     

    return(
        <View style={formpage.main}>
            <Text>WELCOME</Text>
        <TextInput  onChangeText={text =>setInitalname(text)} value={initalname} style = {formpage.container} placeholder="user"/>
          <TextInput onChangeText={text =>setInitalpass(text)} value={initalpass} style = {formpage.container}/>
           <Button  onPress={()=>handlebtnfun()} style={formpage.btnwrapper} title={"signup"}/>
        </View>
    )
}
const formpage = StyleSheet.create({
    main:{
        width:"100%",
        height:"100vh",
        color:"white",
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },

    container: {
    width:"70%",
    height:30,
    backgroundColor:"white",
    margin:10,
    borderBottomColor:"black",
    textAlign:"center",
    outline:"none",
    border:"none"
    },

    Button:{
    backgroundColor:"yellow",
    width:"70%",
    height:"50%"
    }
  });

export default Signup