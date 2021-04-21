import FirebaseConfig from "./firebase/FirebaseConfig";
import React from "react";
import Providers from './navigation';


FirebaseConfig();

const App = () => {
  return <Providers />;
}

export default App;








// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from "expo-status-bar";
// import React, {  useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import LoginScreen from './screens/LoginScreen'
// import OnboardingScreen from './screens/OnboardingScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const  AppStack = createStackNavigator(); 

// export default function App() {
//   const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

//   useEffect(() =>{
//     AsyncStorage.getItem('alreadyLaunched').then(value => {
//       if(value == null){
//         AsyncStorage.setItem('alreadyLaunched', 'true');
//         setIsFirstLaunch(true);
//       } else {
//         setIsFirstLaunch(false);
//       }
//     })
//   }, []);

//   if(isFirstLaunch === null){
//     return null;
//   } else if(isFirstLaunch === true){
//     return (
//       <NavigationContainer>
//         <AppStack.Navigator headerMode="none">
//           <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
//           <AppStack.Screen name="Login" component={LoginScreen} />
//         </AppStack.Navigator>
//       </NavigationContainer>
//     );
//   } else {
//     return <LoginScreen/>;
// }

// }
