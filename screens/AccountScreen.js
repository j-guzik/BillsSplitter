import React, { useState, useContext } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image} from "react-native";
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const AccountScreen = () => {
    const {user, logout} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>You are logged in as </Text>
            <Text style={styles.nameText}>{user.email}</Text>
            <FormButton buttonTitle='Logout' onPress={() => logout()} />
        </View>
    )
}

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#051d5f',
    },
    nameText: {
        marginBottom: 30
    }
})