import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import StyleVar from '../styleVarriables/Varriables'

const header = props => {
    return(
        <View style={styles.Header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 100,
        paddingTop: 60,
        backgroundColor: StyleVar.Primary,
        paddingBottom: 20
    },
    text: {
        textAlign: 'center',
        fontSize:18,
        fontWeight: '400'
    }
})

export default header;