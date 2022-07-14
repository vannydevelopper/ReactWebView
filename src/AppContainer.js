import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RootNavigator from "./Routes/RootNavigator";
import LoginScreen from "./Screens/Auth/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { setUserAction } from "./store/actions/userActions";
import { userSelector } from "./store/selectors/userSelector";
import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator()

export default function AppContainer(){
       const dispatch = useDispatch()
       const user = useSelector(userSelector)
       const [userLoading, setUserLoading] = useState(true)

       useEffect(()=>{
              (async function(){
                     const user = await AsyncStorage.getItem("user")
                     //await AsyncStorage.removeItem('user')
                     dispatch(setUserAction(JSON.parse(user)))
                     setUserLoading(false)
              }) ()
       },[dispatch])
       return(
              userLoading ?
                     <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator color="#007BFF" animating={userLoading} size='large' />
                     </View>:
                     <>
                     <NavigationContainer>
                            {user ?
                                   <RootNavigator/>
                                   :
                            <Stack.Navigator>
                                   <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                            </Stack.Navigator>}
                     </NavigationContainer>
              </>
       )
}