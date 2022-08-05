import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screen/HomeScreen'
import SearchScreen from '../screen/SearchScreen'
import ResultsSearchScreen from '../screen/ResultsSearchScreen'
import OrderScreen from '../screen/OrderScreen';


const Stack = createNativeStackNavigator();
const MainNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions ={{
                headerShown :false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="ResultsSearchScreen" component={ResultsSearchScreen} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />

        </Stack.Navigator> 
    )
}

export default MainNavigator   
