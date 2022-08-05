import React from 'react'
import { Text,View,Dimensions } from 'react-native'

import HomeMap from '../../component/HomeMap';
import CovidMessage from '../../component/CovidMessage';
import HomeSearch from '../../component/HomeSearch';


const HomeScreen = () => {
    return (
        <View>
            <View style={{height : Dimensions.get('window').height - 400}}>
                <HomeMap />
            </View>

            <CovidMessage />
            
            <HomeSearch />
        </View>
    )
};
    
export default HomeScreen;
