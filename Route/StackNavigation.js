import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage"
import LogIn from '../SCR/LogIn';
import SingUp from '../SCR/SingUp';
import LogOut from '../SCR/LogOut';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {

    const [AsyncDataValue,setAsyncDataValue] = useState(null)

    let authData = useSelector(state => state.auth)

    console.log("done", authData);

    useEffect(()=>{
        asyncData()
    },[])

    let asyncUser = null;

    const asyncData = async () => {
        asyncUser = await AsyncStorage.getItem("user")

        setAsyncDataValue(asyncUser)
    }

    console.log("zzzzzzzzzzzzzzzzzz", AsyncDataValue !== "Valid", authData.auth === null);

    if (authData.auth === null) {

        return (
            <Stack.Navigator independent={true} initialRouteName="login">
                <Stack.Screen name="login" component={LogIn} />
                <Stack.Screen name="signup" component={SingUp} />
            </Stack.Navigator>
        )
    } else {
        return (
            <Stack.Navigator independent={true} initialRouteName="LogOut">

                <Stack.Screen name="LogOut" component={LogOut} />
            </Stack.Navigator>
        )
    }

}