import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import AddGroupScreen from '../screens/AddGroupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { abs } from 'react-native-reanimated';
// import Tabs from './navigation/tabs';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
    style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
    onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderColor: '#00BFA6'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const AppStack = () => {
    return (
        // <Stack.Navigator>
        //     <Stack.Screen 
        //     name='Home'
        //     component={HomeScreen} 
        //     options={{header: () => null}}
        // />
        // </Stack.Navigator>
        <Tab.Navigator
        tabBarOptions= {{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 50,
                backgroundColor: "white",
                height: 100,
                ...styles.shadow
            }
        }
        }>
            <Tab.Screen name='Home' component={HomeScreen}
            options= {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 6}}>
                        <Image
                        source={require('../assets/icons/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: focused ? "#00BFA6" : '#748c94'
                        }}
                        />
                        <Text
                        style={{color: focused ? '#00BFA6' : '#748c94', fontSize: 13}}>
                            Home
                        </Text>
                    </View>
                )
            }}
            />
            <Tab.Screen name='Add group' component={AddGroupScreen}
            options= {{
                tabBarIcon: ({focused}) => (
                    <Image
                    source={require('../assets/icons/add.png')}
                        resizeMode='contain'
                        style={{
                            width: 80,
                            height: 80,
                            tintColor: '#F9A826'
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}
            />
            <Tab.Screen name='Account' component={AccountScreen}
            options= {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 6}}>
                        <Image
                        source={require('../assets/icons/user.png')}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,
                            tintColor: focused ? "#00BFA6" : '#748c94'
                        }}
                        />
                        <Text
                        style={{color: focused ? '#00BFA6' : '#748c94', fontSize: 13}}>
                            Account
                        </Text>
                    </View>
                )
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#00BFA6",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default AppStack;