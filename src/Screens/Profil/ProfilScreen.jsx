import React from "react";
import { ImageBackground, Text, View, StyleSheet, TouchableNativeFeedback, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { flexDirection } from "styled-system";
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from "../../store/selectors/userSelector";
import { unsetUserAction } from "../../store/actions/userActions";
import { FontAwesome5, EvilIcons, AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import ProfilCard from "../../components/ProfilCard";

const Profil = () =>{
       return(
              <View style={styles.bottomContainer}>
                     <ProfilCard/>
                     <View style={styles.detailCard}>
                            <View style={styles.cardImage}>
                                   <View style={styles.imagecard}>
                                          <EvilIcons name="user" size={35} color="#53a4d4" />
                                   </View>
                                   <View style={styles.names}>
                                          <Text style={styles.itemTitle}>Nom</Text>
                                          <Text style={styles.itemValue}>AZOSENGA</Text>
                                   </View>
                            </View>
                            <View style={styles.cardImage}>
                                   <View style={styles.imagecard}>
                                          <EvilIcons name="user" size={35} color="#53a4d4" />
                                   </View>
                                   <View style={styles.names}>
                                          <Text style={styles.itemTitle}>Prenom</Text>
                                          <Text style={styles.itemValue}>Vanny</Text>
                                   </View>
                            </View>
                            <View style={styles.cardImage}>
                                   <View style={styles.imagecard}>
                                          <EvilIcons name="user" size={35} color="#53a4d4" />
                                   </View>
                                   <View style={styles.names}>
                                          <Text style={styles.itemTitle}>Residance</Text>
                                          <Text style={styles.itemValue}>Gasenyi</Text>
                                   </View>
                            </View>
                     </View>
              </View>
       )
}

export default function ProfilScreen(){

       const dispatch = useDispatch()
       const user = useSelector(userSelector)
       return(
              <ImageBackground style={styles.container} source={require('../../../assets/images/home3.png')}>
                     <ScrollView keyboardShouldPersistTaps="handled">
                            <Profil/>
                     </ScrollView>   
              </ImageBackground>
       )
}

const styles = StyleSheet.create({
       container:{
              flex: 1,
              // backgroundColor: "#000",
       },
       detailCard: {
              backgroundColor: '#fff',
              padding: 10,
              paddingBottom: 0,
              // paddingBottom: 0,
              marginBottom: 10,
              borderRadius: 15,
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
              elevation: 10,
              shadowColor: '#c4c4c4',
       },
       cardImage: {
              flexDirection: "row",
              // marginTop: 5,
              marginBottom: 10
       },
       imagecard: {
              width: 50,
              height: 50,
              backgroundColor: "#DCE4F7",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center"
       },
       names: {
              marginLeft: 10,

       },
       itemTitle: {
              fontSize: 15
       },
       itemValue: {
              opacity: 0.8,
              fontWeight: 'bold',
              color: '#777'
       },
})