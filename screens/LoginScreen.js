import React, { useState, useContext } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image} from "react-native";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
// import {AuthContext} from '../navigation/AuthPr


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image
                source= {require('../assets/logo.png')}
                style= {styles.logo}
            />
            <Text style={styles.text}>Bills Splitter</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="email"
                iconType="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
              buttonTitle="Sign In"
              onPress={() => login(email, password)}
            />

            <Text style={styles.textAccount}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.navButtonText}>
                Create!
              </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 150
    },
    logo: {
      resizeMode: 'cover',
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 15,
      marginTop: 30,
      color: '#051d5f',
    },
    textAccount: {
      marginTop: 15,
      color: 'grey',
    },
    navButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#F9A826',
    },
  });