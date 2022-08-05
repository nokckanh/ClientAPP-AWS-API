import React from 'react'
import { View, Text, Pressable } from 'react-native'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Auth } from 'aws-amplify'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            
            <View style={{backgroundColor:'black' ,padding:15}}>

                {/* user row */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',

                }}>
                    <View style={{
                        backgroundColor: '#cacaca',
                        width : 40,
                        height: 40,
                        borderRadius: 25,
                        marginRight:10,
                    }}/>

                    <View>
                        <Text style={{color : 'white' ,fontSize: 24}}>Duong Van Hieu</Text>
                        <Text style={{color : 'lightgray' }}>5.00</Text>
                    </View>
                </View>

                {/* mess row */}
                <View style ={{
                    borderBottomWidth : 1,
                    borderTopWidth : 1, 
                    borderColor: '#919191',
                    paddingVertical:5,
                    marginVertical: 10,
                }}>
                    <Pressable onPress = {() => {console.warn('Message')}}>
                        <Text style={{color:'#dddddd' ,paddingVertical:5}}>Message</Text>
                    </Pressable>
                </View>

                {/* do more */}
                <Pressable onPress = {() => {console.warn('Do more')}}>
                    <Text style={{color:'#dddddd' ,paddingVertical:5}}>Do more with your accout</Text>
                </Pressable>

                {/* make monry */}
                <Pressable onPress = {() => {console.warn('Make money')}}>
                    <Text style={{color:'white' ,paddingVertical:5}}>Make money driving</Text>
                </Pressable>
            </View>

            <DrawerItemList {...props} />

            <Pressable onPress = {() => {Auth.signOut()}}>
                    <Text style={{padding:5,paddingLeft:20}}>Log Out</Text>
            </Pressable>

        </DrawerContentScrollView>
    )
}

export default CustomDrawer
