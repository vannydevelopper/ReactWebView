import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Host } from "react-native-portalize";
import BotomTabBar from "../components/BotomTabBar";
import HistoriqueNavigator from "./HistoriqueNavigator";
import HomeNavigator from "./HomeNavigator";
import ProfilNavigator from "./ProfilNavigator";

const BotomTab = createBottomTabNavigator()

export default function RootNavigator(){
       return(
                     <Host>
                            <BotomTab.Navigator initialRouteName="Home" tabBar={props => <BotomTabBar {...props} />} screenOptions={{ headerShown: false }}>
                                   <BotomTab.Screen name="HomeTab" component={HomeNavigator} />
                                   <BotomTab.Screen name="HistoriqueTab" component={HistoriqueNavigator}/>
                                   <BotomTab.Screen name="ProfilTab" component={ProfilNavigator}/>
                            </BotomTab.Navigator>
                     </Host>

       )
}

const styles = StyleSheet.create({
       container: {
           flex: 1
       }
   })
