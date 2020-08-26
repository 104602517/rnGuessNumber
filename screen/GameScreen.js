import React,{useState} from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

import Card from '../components/Card'
import StyleVar from '../styleVarriables/Varriables'
import Input from '../components/Input'

const gameScreen = () => {

    const [inputNumber, setInputNumber] = useState('');
    const [comfirmed, setComfirmed] = useState(false);
    const [comfirmNumber, setComfirmNumber] = useState('');

    const inputHandeler = input => {
        setInputNumber(input.replace(/[^0-9]/g,''))
    }

    const resetNumber = () => {
        setInputNumber('');
    }

    const comfirmHandeler = () => {
        
    }

    return (
        <View style={styles.screen}>
            <Card style={{padding: 20}}>
                <Text style={{textAlign:'center'}}>Input a number!</Text>
                <View style={styles.inputWrapper}>
                    <View style={styles.input}>
                        <Input inputNumber={inputNumber} inputHandeler={inputHandeler}/>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    <View style={styles.buttons}>
                        <Button title="Reset" color={StyleVar.Primary} onPress={resetNumber}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="confirm" color={StyleVar.Secondary}></Button>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 20,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttons: {
        width: 120
    },
    inputWrapper: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        alignItems: 'center',
        width: 50,
        flexDirection: 'row'
    }
})
export default gameScreen;