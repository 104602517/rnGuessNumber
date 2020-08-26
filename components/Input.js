import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const input = props => {

    return (
        <TextInput value={props.inputNumber} onChangeText={props.inputHandeler} keyboardType="number-pad" maxLength={2} style={styles.input}></TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 15,
        flex: 1,
        textAlign: 'center'
    }
})

export default input;
