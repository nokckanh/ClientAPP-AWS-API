import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainNavigator from './MainNavigatior';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
    <View style = {{
        flex : 1 ,
        justifyContent:'center',
        alignItems:'center',
    }}>
        <Text>{props.name}</Text>
    </View>
);

const Router = () => {
    return (
        <NavigationContainer >
            <Drawer.Navigator 
                drawerContent = {(props) => (<CustomDrawer  {...props} />) } 
                screenOptions ={{
                    headerShown :false,
                }} 
            >
                <Drawer.Screen name ="Main" component = {MainNavigator} />

                <Drawer.Screen name ="Your Trips">
                    {() => <DummyScreen name ={"Your Trips"} /> }
                </Drawer.Screen>

                <Drawer.Screen name ="Helps">
                    {() => <DummyScreen name ={"Helps"} /> }
                </Drawer.Screen>

                <Drawer.Screen name ="Wallet">
                    {() => <DummyScreen name ={"Wallet"} /> }
                </Drawer.Screen>
                
                <Drawer.Screen name ="Setting">
                    {() => <DummyScreen name ={"Setting"} /> }
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Router   
