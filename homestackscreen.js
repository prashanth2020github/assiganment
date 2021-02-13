import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation"
import Signup from "./formpageview.js"
import Login from "./loginpageview.js"
import Userdata from "./userdeatilsview"

const screens = {
    Signup:{
        screen:Signup
    },
    Login:{
        screen:Login
    },
    Userdata:{
       screen:Userdata
   }
    
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)