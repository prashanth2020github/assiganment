import React from "react"
import {useState , useEffect} from "react"
import { StyleSheet, Text, View , Button ,TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


function Login(){
    const [initalname , setInitalname ] = useState('')
    const [initalpass , setInitalpass ] = useState('')
    const [userlogged , setuserlogged] =  useState(false)

     var getitemsfun = async()=>{
        try{
     var getdata = await AsyncStorage.getItem("userdata")
     var parsedata = JSON.parse(getdata)
     if(initalname==parsedata.username && initalpass==parsedata.password ){
      setuserlogged(!userlogged ) 
             }

        }
        catch(err){
          alert("err")
        }
       }
       useEffect=()=>{
         if(setuserlogged){
           NavigationPreloadManager.navigate("userpage")
         }
       }

       return(
 <View style={formpage.main}>
 <Text>WELCOME</Text>
 <TextInput  onChangeText={text =>setInitalname(text)} value={initalname} style = {formpage.container} placeholder="username"/>
 <TextInput onChangeText={text =>setInitalpass(text)} value={initalpass} style = {formpage.container} placeholder="password"/>
 <Button  onPress={()=>getitemsfun()} style={formpage.btnwrapper} title={"login"}/>
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

export default Login