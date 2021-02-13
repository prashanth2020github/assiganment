import React from "react"
import {View , Text } from "react-native"

class Userdata extends React.Component{
    constructor(){
        super();
        this.state={
            newdata:[]
        }
    }
      
    componentDidMount=(async)=>{
        var getdata =  AsyncStorage.getItem("userdata")
        var parsedata = JSON.parse(getdata)
        this.setState({newdata:parsedata})
    }
    render(){
        let newdatalist = this.state.newdata.map((item)=>{
            return(
                <View>
                    <Text>{item.username}</Text>
                    <Text>{item.password}</Text>
                </View>
            )
        })
        return(
            <View>
              {newdatalist}
            </View>
           )
    }

}
export default Userdata