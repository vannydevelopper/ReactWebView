import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, ImageBackground } from "react-native";
import { Button, Icon, Input } from 'native-base'
import { primaryColor } from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen(){
       const navigation = useNavigation()
       return(
              <ImageBackground style={styles.container} source={require('../../assets/images/home3.png')}>
              <View >
                     <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                     <View style={styles.header}>
                     </View>
              </View>
              <View style={styles.footer}>
                     <View style={styles.card}>
                            <Text style={styles.title}>Bienvenue sur notre application </Text>
                            <Text style={styles.paragraphe}>
                                   Suivrent la documentation il faut suivre la documentation avant de commencer 
                            </Text>
                     </View>
                     <Button
                            borderRadius={15}
                            onPress={()=>navigation.navigate('Scan')}
                            mt={5}
                            backgroundColor={primaryColor}
                            py={3.5}
                            _text={{ color: '#fff', fontWeight: 'bold' }}
                            >
                            Scan
                     </Button>
              </View>
              </ImageBackground>
       )
}

const styles = StyleSheet.create({
       container:{
              flex: 1,
              // backgroundColor: "#000",
       },
       header:{
              height: "40%",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingBottom: 50
       },
       footer:{
              height: "50%",
              backgroundColor: "#FFFDF8",
              borderTopRightRadius: 30,
              borderTopLeftRadius:30,
              paddingHorizontal: 20,
              paddingVertical: 30,
              borderWidth:2,
              borderColor:"#F0A22B",
              borderBottomLeftRadius:30,
              borderBottomRightRadius:30

       },
       card:{
              marginVertical: 20
       },
       title:{
              fontSize: 20,
              fontWeight:"bold"
       },
       paragraphe:{
              fontSize: 15,
              color:"#777"
       }
       
})