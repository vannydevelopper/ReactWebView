import React from "react";
import { Text, View, StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { userSelector } from "../store/selectors/userSelector";
import { unsetUserAction } from "../store/actions/userActions";

export default function ProfilCard(){
       const dispatch = useDispatch()
       const navigation = useNavigation()
       const user = useSelector(userSelector)

       return(
              <View style={styles.profileCard}>
                     <View style={styles.cardUser}>
                            <Image source={require('../../assets/images/user.png')} style={styles.userImage}/>
                            <View style={styles.userNames}>
                                   <Text style={styles.username}>AZOSENGA Vanny</Text>
                                   <Text style={styles.userDesc}>123</Text>
                            </View>
                     </View>
                     <View style={styles.cardActions}>
                            <View style={styles.actionPv}>
                                   <Text style={styles.actionTitle}>Province</Text>
                                   <Text style={styles.actionValue}>BUJUMBURA</Text>
                            </View>
                            <View style={styles.actionPv}>
                                   <Text style={styles.actionTitle}>Date</Text>
                                   <Text style={styles.actionValue}>12/2/2022</Text>
                            </View>
                     </View>
                     <TouchableNativeFeedback onPress={() => dispatch(unsetUserAction())}>
                            <View style={styles.moreBtn}>
                                   <MaterialIcons name="logout" size={20} color="#777" />
                                   <Text style={{ ...styles.actionTitle, ...styles.moreInfoBtnText }}>Deconnexion</Text>
                            </View>
                     </TouchableNativeFeedback>
              </View>
       )
}

const styles = StyleSheet.create({
       profileCard: {
              backgroundColor: '#fff',
              padding: 20,
              paddingTop: 10,
              paddingBottom: 0,
              borderRadius: 20,
              width: '90%',
              alignSelf: 'center',
              marginTop: 30,
              elevation: 10,
              shadowColor: '#c4c4c4',
              maxWidth: 500
       },
       userImage: {
              width: 60,
              height: 60,
              borderRadius: 50
       },
       cardUser: {
              flexDirection: 'row',
              alignItems: 'center'
       },
       userNames: {
              marginLeft: 10
       },
       username: {
              fontWeight: 'bold',
              fontSize: 13,
              opacity: 0.8
       },
       userDesc: {
              color: '#777',
              fontSize: 13,
       },
       cardActions: {
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
       },
       actionTitle: {
              color: 'blue',
              color: '#53a4d4',
              fontWeight: 'bold',
              opacity: 0.8,
              fontSize: 10
       },
       actionValue: {
              fontWeight: 'bold',
              fontSize: 10
       },
       moreBtn: {
              borderTopWidth: 1,
              borderTopColor: '#ddd',
              paddingVertical: 20,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
       },
       moreInfoBtnText: {
              textAlign: 'center',
              marginLeft: 10
       },

})