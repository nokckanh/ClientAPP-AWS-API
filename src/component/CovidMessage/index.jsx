import React from 'react'
import { Text, View } from 'react-native'

import styles from './style'

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>
                Chỉ được di chuyển khi cần thiết
            </Text>
            <Text style = {styles.text}>
                Di chuyển an toàn ,Di chuyển an toàn,Di chuyển an toàn,Di chuyển an toàn
            </Text>
            <Text style = {styles.learnMore}>
                Xem tiếp
            </Text>

        </View>
    )
}

export default CovidMessage
