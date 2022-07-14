import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import HistoriqueScreen from "../Screens/HistoriqueScreen";

const Stack = createStackNavigator()

export default function HistoriqueNavigator(){
       return(
              <Stack.Navigator>
                     <Stack.Screen name="Historique" component={HistoriqueScreen} options={{ headerShown: false }}/>
              </Stack.Navigator>
       )
}