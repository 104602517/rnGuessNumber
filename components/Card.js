import React from 'react'
import {View, Button, TextInput, Text, StyleSheet} from 'react-native'

const card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 6,
        borderRadius: 5,
        marginTop: 15
    }
})

export default card;