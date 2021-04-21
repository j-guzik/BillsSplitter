import React, { useState, useContext } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image} from "react-native";
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const AddGroupScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add group</Text>
        </View>
    )
}

export default AddGroupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#051d5f',
    }
})