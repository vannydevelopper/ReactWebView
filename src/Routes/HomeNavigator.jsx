import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import ScanQrcodeSCreen from "../Screens/ScanQrcodeSCreen";
import WebViewScreen from "../Screens/WebViewScreen";

const Stack = createStackNavigator()

export default function HomeNavigator(){
       return(
              <Stack.Navigator>
                     <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                     <Stack.Screen name="Scan" component={ScanQrcodeSCreen} options={{ headerShown: false }}/>
                     <Stack.Screen name="WebView" component={WebViewScreen} options={{ headerShown: false }}/>
              </Stack.Navigator>
       )
}