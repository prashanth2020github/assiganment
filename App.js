import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from "react"
import { StyleSheet, Text, View , Button } from 'react-native';

import Navigator from "./homestackscreen.js"

export default function App() {
 const[ userload , setuserload] = useState(false)
  return (
        <View>
          <Navigator/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: 'center',
    justifyContent: 'center',
  },
});