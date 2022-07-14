import React, { useRef, useState } from 'react'
import { ScrollView, Text, StyleSheet, View,useWindowDimensions,StatusBar, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Button, Icon, Input } from 'native-base'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { primaryColor } from "../../styles";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserAction } from '../../store/actions/userActions';

export default function LoginScreen(){
       const [showPassword, setShowPassword] = useState(false)
       const { height } = useWindowDimensions()
       const passwordInputRef = useRef(null)
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const navigation = useNavigation()
       const dispatch = useDispatch()

       const handleLogin = async () =>{
              const user = {
                     email,
                     password
              };
              await AsyncStorage.setItem("user", JSON.stringify(user));
              dispatch(setUserAction(user))
       }
       return(
              <>
              {/* <ImageBackground source={require('../../../assets/images/home3.png')}> */}
             <ScrollView keyboardShouldPersistTaps="handled">
                     <View style={styles.container}>
                            <Image source={require('../../../assets/images/Mediabox.png')} style={{...styles.image, resizeMode:"center", height: (30*height-StatusBar.currentHeight)/100}}/>
                            <Text style={styles.title}>Connexion</Text>
                            <View style={styles.inputs}>
                                   <Input
                                          placeholder='Email ou numéro de téléphone'
                                          InputLeftElement={
                                                 <Icon
                                                 as={<MaterialIcons name="alternate-email" size={20} color="#777" />}
                                                 size={6}
                                                 mr="2"
                                                 color="muted.400"
                                                 />
                                          }
                                          borderWidth={0}
                                          borderBottomWidth={1}
                                          borderBottomColor={'#ddd'}
                                          py={2}
                                          onChangeText={(em)=>setEmail(em)}
                                          value={email}
                                          _focus={{
                                                 borderBottomColor: primaryColor
                                          }}
                                          returnKeyType="next"
                                          blurOnSubmit={false}
                                          onSubmitEditing={() => {
                                                 passwordInputRef.current.focus()
                                          }}
                                          autoCompleteType='off'
                                   />

                                   <Input
                                          placeholder='Mot de passe'
                                          InputLeftElement={
                                                 <Icon
                                                        as={<Ionicons name="lock-closed-outline" size={20} color="#777" />}
                                                        size={6}
                                                        mr="2"
                                                        color="muted.400"
                                                 />}
                                                 InputRightElement={
                                                 <Icon
                                                        as={<Ionicons name={!showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#777" />}
                                                        size={6}
                                                        mr="2"
                                                        color="muted.400"
                                                        onPress={() => setShowPassword(t => !t)}
                                                 />}
                                                 secureTextEntry={!showPassword}
                                                 onChangeText={(em)=>setPassword(em)}
                                                 value={password}
                                                 borderWidth={0}
                                                 borderBottomWidth={1}
                                                 borderBottomColor={'#ddd'}
                                                 py={2}
                                                 _focus={{
                                                 borderBottomColor: primaryColor
                                                 }}
                                                 returnKeyType="go"
                                                 mt={3}
                                                 ref={passwordInputRef}
                                   />
                            </View>
                            <TouchableOpacity>
                                   <Text style={styles.forgetPass}>Mot de passe oublié</Text>
                            </TouchableOpacity>
                            <Button
                                   borderRadius={15}
                                   isDisabled={email == "" || password == ""}
                                   onPress={handleLogin}
                                   mt={5}
                                   backgroundColor={primaryColor}
                                   py={3.5}
                                   _text={{ color: '#fff', fontWeight: 'bold' }}
                            >
                                   Se connecter
                            </Button>
                            <Text style={styles.orLabel}>Ou continuer avec ...</Text>
                            <View style={styles.socials}>
                                   <TouchableOpacity style={{...styles.social, marginRight: 5}}>
                                          <Image source={require('../../../assets/images/google.png')} style={styles.socialImage}/>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={{...styles.social, marginLeft: 5}}>
                                          <Image source={require('../../../assets/images/facebook.png')} style={styles.socialImage} />
                                   </TouchableOpacity>
                            </View>
                     </View>
             </ScrollView>
             {/* </ImageBackground> */}
             </>
       )
}

const styles = StyleSheet.create({
       container:{
            paddingHorizontal: 20,
       },
       image:{
            maxWidth: '80%',
            alignSelf: 'center'
       },
       title: {
              fontSize: 25,
              fontWeight: 'bold',
              marginBottom: 25,
              opacity: 0.8
       },
       forgetPass: {
              color: primaryColor,
              textAlign: 'right',
              marginTop: 10,
              fontWeight: 'bold'
       },
       orLabel: {
              color: '#777',
              textAlign: 'center',
              marginVertical: 30,
              fontSize: 12
       },
       socials: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
       },
       socials: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
       },
       socialImage: {
              width: 30,
              height: 30,
       },
       social: {
              borderRadius: 15,
              borderWidth: 1,
              borderColor: '#ddd',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              height: 50
       },
  })