import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import ProfilScreen from "../Screens/Profil/ProfilScreen";

const Stack = createNativeStackNavigator()

export default function ProfilNavigator(){
       return(
              <Stack.Navigator>
                     {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
                     <Stack.Screen name="Profil" component={ProfilScreen} options={{ headerShown: false }}/>
              </Stack.Navigator>
       )
}