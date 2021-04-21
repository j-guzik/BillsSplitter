import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from "firebase";
import '@firebase/auth';
import '@firebase/firestore';
import { AuthContext } from './AuthProvider';
import AuthStack from './AuthStack'
import AppStack from './AppStack';

const Routes = () => {

    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if(initializing) return null;

    return (
        <NavigationContainer>
            { user ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default Routes;