import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    inputSearch:{
        backgroundColor : '#e7e7e7',
        margin : 10,
        padding : 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText:{
        fontSize : 20,
        fontWeight :'600',
        color : '#6e6e6e'
    },
    timeContainer:{
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : 120,
        padding : 10,
        backgroundColor :'#fff',
        borderRadius : 50

    },
    row:{
        flexDirection :'row',
        alignItems :'center',
        padding : 20,
        borderBottomWidth : 1,
        borderBottomColor : '#dbdbdb'

    },
    iconContainer:{
        backgroundColor :'#b3b3b3',
        padding :10,
        borderRadius : 25,

    },
    textDestination :{
        marginLeft : 10,
        fontWeight : '600',
        fontSize : 16,

    }, 

})

export default styles;