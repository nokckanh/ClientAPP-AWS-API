import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container:{
        padding : 10,
        height : '100%'

    },
    TextInput:{
        padding : 10,
        backgroundColor : '#eee',
        marginVertical : 5,
        marginLeft:20,

    },
    separator:{
        backgroundColor:'#efefef',
        height : 1,
    },
    listView:{
        position:'absolute',
        top:105,   
      },
      autocompleteContainer:{
        position:'absolute',
        top:10,
        left:10,
        right:10,
    },
    row :{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        
    },
    iconContainer :{
        backgroundColor: '#a2a2a2',
        padding:5,
        borderRadius:50,
        marginRight:15,

    },
    locationText :{

    },
    circle :{
        width :5,
        height :5,
        backgroundColor:'black',
        position:'absolute',
        top:30,
        left:15,
        borderRadius:5,
    },
    line :{
        width :1,
        height :60,
        backgroundColor:'#c4c4c4',
        position:'absolute',
        top:35,
        left:17,
    },
    square :{
        width :5,
        height :5,
        backgroundColor:'black',
        position:'absolute',
        top:90,
        left:15,
    },
})

export default styles;