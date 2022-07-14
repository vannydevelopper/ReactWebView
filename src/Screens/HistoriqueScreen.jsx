import React from "react";
import { Text, View, StyleSheet, Image, TouchableNativeFeedback, ImageBackground, ScrollView } from "react-native";

export default function HistoriqueScreen(){
       return(
             <ImageBackground style={styles.container} source={require('../../assets/images/home3.png')}>
                     <View style={styles.title}>
                            <Text style={styles.histoTitle}>Historiques</Text>
                     </View>
                     <ScrollView keyboardShouldPersistTaps="handled">
                            <View style={styles.DetailCard}>
                                   <View style={styles.entete}>
                                          <View style={styles.pvHeaderRight}>
                                                 <View style={styles.verificationImage}>
                                                        <Image source={require('../../assets/images/user.png')} style={styles.image}/>
                                                 </View>
                                                 <Text style={styles.username}>Egide</Text>
                                          </View>
                                          <Text style={styles.itemValue}>12/12/2012</Text>
                                   </View>
                                   <View style={styles.userDesc}></View>
                                   <View style={styles.principal1}>
                                          <View style={styles.names}>
                                                 <Text style={styles.itemTitle}> Page Scanner </Text>
                                          </View>
                                          <Text style={styles.nombre}>12</Text>
                                   </View>
                            </View>   
                            <View style={styles.DetailCard}>
                                   <View style={styles.entete}>
                                          <View style={styles.pvHeaderRight}>
                                                 <View style={styles.verificationImage}>
                                                        <Image source={require('../../assets/images/user.png')} style={styles.image}/>
                                                 </View>
                                                 <Text style={styles.username}>Egide</Text>
                                          </View>
                                          <Text style={styles.itemValue}>12/12/2012</Text>
                                   </View>
                                   <View style={styles.userDesc}></View>
                                   <View style={styles.principal1}>
                                          <View style={styles.names}>
                                                 <Text style={styles.itemTitle}> Page Scanner </Text>
                                          </View>
                                          <Text style={styles.nombre}>12</Text>
                                   </View>
                            </View>  
                            <View style={styles.DetailCard}>
                                   <View style={styles.entete}>
                                          <View style={styles.pvHeaderRight}>
                                                 <View style={styles.verificationImage}>
                                                        <Image source={require('../../assets/images/user.png')} style={styles.image}/>
                                                 </View>
                                                 <Text style={styles.username}>Egide</Text>
                                          </View>
                                          <Text style={styles.itemValue}>12/12/2012</Text>
                                   </View>
                                   <View style={styles.userDesc}></View>
                                   <View style={styles.principal1}>
                                          <View style={styles.names}>
                                                 <Text style={styles.itemTitle}> Page Scanner </Text>
                                          </View>
                                          <Text style={styles.nombre}>12</Text>
                                   </View>
                            </View> 
                            <View style={styles.DetailCard}>
                                   <View style={styles.entete}>
                                          <View style={styles.pvHeaderRight}>
                                                 <View style={styles.verificationImage}>
                                                        <Image source={require('../../assets/images/user.png')} style={styles.image}/>
                                                 </View>
                                                 <Text style={styles.username}>Egide</Text>
                                          </View>
                                          <Text style={styles.itemValue}>12/12/2012</Text>
                                   </View>
                                   <View style={styles.userDesc}></View>
                                   <View style={styles.principal1}>
                                          <View style={styles.names}>
                                                 <Text style={styles.itemTitle}> Page Scanner </Text>
                                          </View>
                                          <Text style={styles.nombre}>12</Text>
                                   </View>
                            </View> 
                            <View style={styles.DetailCard}>
                                   <View style={styles.entete}>
                                          <View style={styles.pvHeaderRight}>
                                                 <View style={styles.verificationImage}>
                                                        <Image source={require('../../assets/images/user.png')} style={styles.image}/>
                                                 </View>
                                                 <Text style={styles.username}>Egide</Text>
                                          </View>
                                          <Text style={styles.itemValue}>12/12/2012</Text>
                                   </View>
                                   <View style={styles.userDesc}></View>
                                   <View style={styles.principal1}>
                                          <View style={styles.names}>
                                                 <Text style={styles.itemTitle}> Page Scanner </Text>
                                          </View>
                                          <Text style={styles.nombre}>12</Text>
                                   </View>
                            </View>           
                     </ScrollView>
             </ImageBackground>
       )
}

const styles = StyleSheet.create({
       container:{
              flex: 1,
              // backgroundColor: "#000",
       },
       DetailCard: {
              backgroundColor: '#fff',
              padding: 20,
              paddingTop: 50,
              // paddingBottom: 0,
              marginBottom: 2,
              borderRadius: 15,
              marginTop: 10,
              elevation: 10,
              shadowColor: '#c4c4c4',
              marginHorizontal:20
       },
       entete: {
              marginTop: -40,
              flexDirection: 'row',
              alignItems: 'center',
       },
       pvHeaderRight: {
              flexDirection: 'row',
              flex: 1,
              alignContent: "center",
              alignItems: "center",
       },
       verificationImage: {
              backgroundColor: '#DCE4F7',
              width: 40,
              height: 40,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'center'
       },
       image: {
              width: '70%',
              height: '70%',
              // borderRadius: 50
       },
       username: {
              fontWeight: 'bold',
              fontSize: 12,
              marginLeft : 10
       },
       itemValue: {
              opacity: 0.8,
              fontWeight: 'bold',
              color: '#777'
       },
       userDesc: {
              // paddingTop: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              paddingBottom: 10,
              marginBottom: 10
       },
       principal1: {
              flexDirection: "row",
              alignItems: "center",
              marginLeft: -10
       },
       names: {
              marginLeft: 10,
              alignItems: "center",
       },
       itemTitle: {
              fontSize: 15
       },
       nombre: {
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              fontWeight: "bold"
       },
       title:{
              marginHorizontal: 20
       },
       histoTitle:{
              fontSize: 20,
              color:"#777",
              fontWeight:"bold"
       }
})