import React, { useState, useContext } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image} from "react-native";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FirebaseConfig from "../firebase/FirebaseConfig";
import * as firebase from "firebase";
import '@firebase/auth';
import '@firebase/firestore';
import { AuthContext } from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  // const [userName, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const [phone, setPhone] = useState();

  const {register} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>

            {/* <FormInput
                labelValue={phone}
                onChangeText={(userPhone) => setEmail(userPhone)}
                placeholderText="user name"
                iconType="user"
                autoCorrect={false}
            />  */}

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="email"
                iconType="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            {/* <FormInput
                labelValue={phone}
                onChangeText={(userPhone) => setEmail(userPhone)}
                placeholderText="phone"
                iconType="phone"
                autoCorrect={false}
            />  */}

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="confirm password"
                iconType="lock"
                secureTextEntry={true}
            />        

            <FormButton
              buttonTitle="Sign Up"
              onPress={()=> register(email, password)}
            />

        <View style={styles.textPrivate}> 
            <Text style={styles.color_textPrivate}>
              By registering, you confirm that you accept our{' '}
            </Text>
            <TouchableOpacity onPress={() => alert('Privacy Policy!')}>
            <Text style={[styles.color_textPrivate, {color: '#F9A826'}]}>
                Privacy Policy
            </Text>
            </TouchableOpacity>
             <Text style={styles.color_textPrivate}>. </Text>
      </View>

            <Image
                source= {require('../assets/create.png')}
                style= {styles.logo}
            />
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 80
    },
    logo: {
      resizeMode: 'cover',
      marginTop: 20
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 30,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      marginTop: 15,
      fontSize: 16,
      fontWeight: '500',
      color: '#F9A826',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 15,
      marginHorizontal: 25,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 12,
      fontWeight: '400',
      color: 'grey',
    },
  });