import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container :{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20
    },
    image :{
        height:70,
        width:80,
        resizeMode:'contain',

    },
    middleContainer :{
        flex :1,
        marginHorizontal:10,
    },
    rightContainer :{
        width:100,
        alignItems:'flex-end',
        flexDirection:'row'
    },
    type :{
        fontWeight: 'bold',
        fontSize:18,
        marginBottom:5,


    },
    time :{
        color:'#5d5d5d'
    },
    price :{
        fontWeight: 'bold',
        fontSize:16,
        marginLeft:6,
    },
    
})

export default styles