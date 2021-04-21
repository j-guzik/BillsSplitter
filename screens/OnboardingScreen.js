import React from 'react';
import {StyleSheet, Text, View, Button, Image} from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { color } from 'react-native-reanimated';

const Skip = ({...props}) => (
    <Button
    title="Skip"
    color="#F9A826"
    {...props}
    />
)

const Next = ({...props}) => (
    <Button
    title="Next"
    color="#F9A826"
    {...props}
    />
)

const Done = ({...props}) => (
    <Button
    title="Done"
    color="#F9A826"
    {...props}
    />
)

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#00BFA6',
                image: <Image source={require('../assets/wallet.png')} />,
                title: 'Welcome in Bills Splitter!',
            },
            {
                backgroundColor: '#00BFA6',
                image: <Image source={require('../assets/account.png')} />,
                title: 'Easily create an account ...',
            },
            {
                backgroundColor: '#00BFA6',
                image: <Image source={require('../assets/onlinebanking.png')} />,
                title: '... and share bills with friends!',
            },
        ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});