import React from 'react'
import { View, Text , Pressable } from 'react-native'
import styles from '../CovidMessage/style'

import AntDesigner from 'react-native-vector-icons/AntDesign'
import Material from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'

import { useNavigation } from '@react-navigation/native';

import style from './style';

const HomeSearch = () => {
    const navigation = useNavigation();
    
    const goToSearch = () => {
        navigation.navigate('SearchScreen')
    }

    return (
        <View>
            {/* Input search */}
            <Pressable onPress ={goToSearch} style = {style.inputSearch}>
                <Text style = {style.inputText}> Bạn đi đâu ?</Text>

                <View style = {style.timeContainer}>
                    <AntDesigner name={"clockcircle"} size = {16} color = {'#535353'} />
                    <Text>Bây Giờ</Text>
                    <Material name ={'keyboard-arrow-down'} size = {17}/>
                </View>
            </Pressable>
            {/* Điểm đến */}
            <View style = {style.row}>
                <View style ={style.iconContainer}>
                    <AntDesigner name={"clockcircle"} size = {20} color = {'#fff'} />
                </View>
                <Text style = {style.textDestination} >Điểm đến </Text>
            </View>
            
            <View style = {style.row}>
                <View style ={[style.iconContainer , {backgroundColor : '#218cff'}]}>
                <Entypo name="home" size={20} color="#fff" />
                </View>
                <Text style = {style.textDestination} >Điểm đến </Text>
            </View>
        </View>
    )
}

export default HomeSearch
