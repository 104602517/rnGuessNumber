import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import StyleVar from '../styleVarriables/Varriables'

const numberWrapper = props => {
    return (
        <View style={{...styles.numberWrapper, ...props.style}}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    numberWrapper: {
        borderWidth: 3,
        borderColor: StyleVar.Secondary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    number: {
        fontSize: 20,
        color: StyleVar.Secondary,
        fontWeight: '500'
    }
});

export default numberWrapper;
