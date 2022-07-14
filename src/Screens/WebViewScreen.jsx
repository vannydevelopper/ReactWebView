import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import WebView from "react-native-webview";

export default function WebViewScreen(){
       const route = useRoute()
       const {donnees} = route.params
       console.log(donnees)
       const navigation = useNavigation()
       return(
             <>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: "center", paddingHorizontal: 20, }}>
                     <TouchableNativeFeedback onPress={()=>navigation.navigate('Home')} useForeground>
                            <View style={{ borderRadius: 50, padding: 12, overflow: 'hidden' , backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                                   <Ionicons name="arrow-back-outline" size={24} color="#000" />
                            </View>
                     </TouchableNativeFeedback>
                     <Text style={styles.titleHistorique}>
                            Formulaire
                     </Text>
              </View>
                    
              <WebView
                     style={styles.container}
                     source={{ uri: donnees }}
              />
              </>

       )
}

const styles = StyleSheet.create({
       container: {
            flex: 1,
       },
       titleHistorique: {
              fontWeight: "bold",
              color: '#000',
              fontSize: 16,
              marginHorizontal: 10
       },
  })