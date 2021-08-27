import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../components/HomeScreen';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default () =>{
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}