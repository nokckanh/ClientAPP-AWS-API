import React from 'react'
import { View, Image, Text ,Pressable } from 'react-native'
import styles from './style'

import Ionicons from 'react-native-vector-icons/Ionicons'


const CarTypeRow = (props) => {
    const {type , onPress, isSelected} = props;

    const getNameCar = () =>{
        if(type.type === 'UberX'){
            return require('../../assets/images/UberX.jpeg')
        }
        if(type.type === 'Comfort'){
            return require('../../assets/images/Comfort.jpeg')
        }
        return require('../../assets/images/UberXL.jpeg')
        
    } 

    return (
        <Pressable 
            onPress={onPress} 
            style = {[styles.container , {backgroundColor : isSelected ? '#efefef' : 'white' }]}>
            {/* Hinh Anh */}
            <Image 
                style ={styles.image} 
                source ={getNameCar()} 
            />
            <View style = {styles.middleContainer}>
                <Text style = {styles.type}>

                    {type.type }{'  '}
                    <Ionicons name={'person'} size={16} />
                    3
                </Text>
                <Text style = {styles.time}>
                    8:03 PM Drop off
                </Text>

            </View>
            <View style = {styles.rightContainer}>
                <Ionicons name ={'pricetag'} size ={18} color ={'#42d742'} />
                <Text style = {styles.price} >
                    Giá  {type.price }$
                </Text>
            </View>
        </Pressable>
    )
}

export default CarTypeRow
