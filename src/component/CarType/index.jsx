import React from 'react'
import { View, Pressable, Text } from 'react-native'
import CarTypeRow from '../CarTypeRow'

import typeData from '../../assets/data/types'

const CarType = ({typeState , onSubmit}) => {

    const [selectedType,setselectedType] = typeState;
    
    
    return (
        <View>
           {typeData.map((type) => (
                <CarTypeRow 
                    type= {type} 
                    key ={type.id} 
                    isSelected={type.type === selectedType}
                    onPress ={ () => setselectedType(type.type)}
                />)
           )}
            <Pressable 
                onPress={onSubmit} 
                style= {{
                    backgroundColor:'black',
                    padding:10,
                    margin:10,
                    alignItems :'center',   

            }}>
                <Text style ={{ color:'white' , fontWeight:'bold'}}>Chọn xe</Text>
            </Pressable>
        </View>
    )
}

export default CarType;
